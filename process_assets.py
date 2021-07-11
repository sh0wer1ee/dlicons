import os
import re
import shutil
import UnityPy
import json
import timeit
from PIL import Image

process_dic = {
    'chara/m': 'images.icon.chara.m',
    'chara/l': 'images.icon.chara.l',
    'dragon/m': 'images.icon.dragon.m',
    'dragon/l': 'images.icon.dragon.l',
    'amulet/m': 'images.icon.amulet.m',
    'amulet/l': 'images.icon.amulet.l',
    'weapon/m': 'images.icon.weapon.m',
    'weapon/l': 'images.icon.weapon.l'
}
image_dic = {
    'amulet': {},
    'chara': {},
    'dragon': {},
    'weapon': {}
}
textlabel = {}
tl_json = json.load(open('json/TextLabel.json', 'r', encoding='utf8'))
cd_json = json.load(open('json/CharaData.json', 'r', encoding='utf8'))
dd_json = json.load(open('json/DragonData.json', 'r', encoding='utf8'))
ac_json = json.load(open('json/AbilityCrest.json', 'r', encoding='utf8'))
ws_json = json.load(open('json/WeaponSkin.json', 'r', encoding='utf8'))
mp_json = json.load(open('map.json', 'r', encoding='utf8'))
for tid in tl_json:
    textlabel[tl_json[tid]['_Id']] = tl_json[tid]['_Text']

ROOT = os.path.dirname(os.path.realpath(__file__))
IMGFOLDER = 'icons'
IMG = os.path.join(ROOT, IMGFOLDER)
ASSETS = os.path.join(ROOT, 'assets')
os.makedirs(IMG, exist_ok=True)
os.makedirs(ASSETS, exist_ok=True)


def combineA8(imageData):
    (w, h) = imageData['img'].size
    (z, z, z, a) = imageData['a8'].resize((w, h), Image.ANTIALIAS).split()
    (r, g, b) = imageData['img'].split()
    return Image.merge("RGBA", (r, g, b, a))


def dumpImages(filename, asset_type):
    assets_dir = os.path.join(ASSETS, process_dic[asset_type])
    output_path = os.path.join(IMG, asset_type)
    imageData = {}
    env = UnityPy.load(os.path.join(assets_dir, filename))
    for obj in env.objects:
        data = obj.read()
        if str(data.type) == 'AssetBundle':
            imageData['name'] = data.name
        if str(data.type) == 'Texture2D':
            if 'alpha' in str(data.name):
                imageData['a8'] = data.image
            else:
                imageData['img'] = data.image
    filepath = os.path.join(output_path, '%s.png' % filename)
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    try:
        combineA8(imageData).save(filepath)
    except KeyError:  # The best way to fight with shitty codes is writing shittier codes to counterattack
        # print(imageData['name'])
        missing_path = '%s%s' % ('s.', process_dic[asset_type])
        missing_dir = os.path.join(ASSETS, missing_path)
        missing_asset = imageData['name'].split('/')[-1].split('.')[0]
        #print(os.path.join(missing_dir, '%s%s' % (missing_asset, '_alphaa8')))

        env = UnityPy.load(os.path.join(missing_dir, '%s%s' %
                           (missing_asset, '_alphaa8')))
        for obj in env.objects:
            data = obj.read()
            if str(data.type) == 'Texture2D':
                if 'alpha' in str(data.name):
                    imageData['a8'] = data.image
                else:
                    imageData['img'] = data.image
        combineA8(imageData).save(filepath)
    if '/l' in asset_type:
        output_path = os.path.join(IMG, asset_type.replace('/l', '/s'))
        filepath = os.path.join(output_path, '%s.png' % filename)
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        combineA8(imageData).resize((80, 80)).save(filepath)
        name, id = localize(filename, asset_type.split('/')[0])
        image_dic[asset_type.split('/')[0]][filename] = {}
        image_dic[asset_type.split('/')[0]][filename]['id'] = id
        image_dic[asset_type.split('/')[0]][filename]['name'] = name
        try:
            image_dic[asset_type.split(
                '/')[0]][filename]['nga_path'] = mp_json[filename]
        except KeyError:
            print(f'Cannot find the nga link of {filename}.')
            image_dic[asset_type.split(
                '/')[0]][filename]['nga_path'] = ''
        image_dic[asset_type.split('/')[0]][filename]['path'] = (
            './%s/%s/%s.png' % (IMGFOLDER, asset_type.replace('/l', '/s'), filename))


def localize(id, type):
    _name = ''
    _id = ''
    try:
        if type == 'amulet':
            for key in ac_json:
                if str(ac_json[key]['_BaseId']) == id.split('_')[0]:
                    _name = textlabel[ac_json[key]['_Name']]
                    _id = key
                    break
        elif type == 'chara':
            for key in cd_json:
                if str(cd_json[key]['_BaseId']) == id.split('_')[0] and cd_json[key]['_VariationId'] == int(id.split('_')[1]):
                    try:
                        _name = textlabel[cd_json[key]['_SecondName']]
                    except KeyError:
                        _name = textlabel[cd_json[key]['_Name']]
                    _id = key
                    break
        elif type == 'dragon':
            for key in dd_json:
                if str(dd_json[key]['_BaseId']) == id.split('_')[0]:
                    try:
                        _name = textlabel[dd_json[key]['_SecondName']]
                    except KeyError:
                        _name = textlabel[dd_json[key]['_Name']]
                    _id = key
                    break
        elif type == 'weapon':
            for key in ws_json:
                if str(ws_json[key]['_BaseId']) == id.split('_')[0] and str(ws_json[key]['_FormId']) == id.split('_')[2]:
                    _name = textlabel[ws_json[key]
                                      ['_Name']].replace('［皮肤］', '')
                    if _name == '':
                        _name = textlabel[ws_json[key]['_Name'].replace(
                            '_SKIN_NAME_', '_NAME_')]
                    _id = key
                    break
    except KeyError:
        _name = id
    return _name, _id


def processAssets():
    for path in process_dic:
        for f in os.listdir(os.path.join(ASSETS, process_dic[path])):
            dumpImages(f, path)
    json.dump(image_dic, open('index.json', 'w', encoding='utf-8'),
              ensure_ascii=False, indent=4)


def processJson():
    mapJson = {}
    linkList = []
    indexJson = json.load(open('index.json', encoding='utf-8'))
    charaJson = indexJson['chara']
    with open('memo.txt', 'r', encoding='utf-8') as f:
        for l in f:
            if l.strip() != '':
                linkList.append(l.strip())
    linkList = linkList[::-1]
    mapJson = dict(zip(charaJson.keys(), linkList))
    json.dump(mapJson, open('chara.json', 'w', encoding='utf-8'), indent=4)


def main():
    start = timeit.default_timer()
    processAssets()
    end = timeit.default_timer()
    print('time spent: ' + str(end-start))


if __name__ == '__main__':
    main()
