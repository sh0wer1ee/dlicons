import os
import re
import shutil
from UnityPy import AssetsManager
import json
import timeit
from PIL import Image

process_dic = {
    'chara/m' : 'images.icon.chara.m',
    'chara/l' : 'images.icon.chara.l',
    'dragon/m' : 'images.icon.dragon.m',
    'dragon/l' : 'images.icon.dragon.l',
    'amulet/m' : 'images.icon.amulet.m',
    'amulet/l' : 'images.icon.amulet.l',
    'weapon/m' : 'images.icon.weapon.m',
    'weapon/l' : 'images.icon.weapon.l'
}

ROOT = os.path.dirname(os.path.realpath(__file__))
IMG = os.path.join(ROOT, 'icons')
ASSETS = os.path.join(ROOT, 'assets')
os.makedirs(IMG, exist_ok=True)
os.makedirs(ASSETS, exist_ok=True)

def combineA8(imageData):
    (w,h) = imageData['img'].size
    (z,z,z,a) = imageData['a8'].resize((w,h), Image.ANTIALIAS).split()
    (r,g,b) = imageData['img'].split()
    return Image.merge("RGBA", (r,g,b,a))

def dumpImages(filename, asset_type):
    assets_dir = os.path.join(ASSETS, process_dic[asset_type])
    output_path = os.path.join(IMG, asset_type)
    imageData = {}
    am = AssetsManager(os.path.join(assets_dir, filename))
    for asset in am.assets.values():
        for o in asset.objects.values():
            data = o.read()
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
    except KeyError:# The best way to fight with shitty codes is writing shittier codes to counterattack
        #print(imageData['name'])
        missing_path ='%s%s' % ('s.', process_dic[asset_type])
        missing_dir = os.path.join(ASSETS, missing_path)
        missing_asset = imageData['name'].split('/')[-1].split('.')[0]
        #print(os.path.join(missing_dir, '%s%s' % (missing_asset, '_alphaa8')))
        am = AssetsManager(os.path.join(missing_dir, '%s%s' % (missing_asset, '_alphaa8')))
        for asset in am.assets.values():
            for o in asset.objects.values():
                data = o.read()
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
        

def processAssets():
    for path in process_dic:
        for f in os.listdir(os.path.join(ASSETS, process_dic[path])):
            dumpImages(f, path)

def main():
    start = timeit.default_timer()
    processAssets()
    end = timeit.default_timer()
    print('time spent: ' + str(end-start))

if __name__ == '__main__':
    main()