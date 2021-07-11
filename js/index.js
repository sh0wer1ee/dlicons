var icon_json;
var toggle = false;
var loaded = {
    'amulet': false,
    'chara': false,
    'dragon': false,
    'weapon': false
};
var current_type = 'rua';
var link_text = '';
var iconOptions = document.getElementById("icon-select");
var outText = document.getElementById("output-text");
var picker = $("select.icon-select").data('picker');

fetch(`./index.json`)
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    })
    .then(response => response.json())
    .then(json => {
        icon_json = json;
        loadOptions(icon_json);
    }).catch(function(error) {
        console.log('rua');
    });

fetch('https://gitee.com/api/v5/repos/sh0wer1ee/dlicons/commits')
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    })
    .then(response => response.json())
    .then(json => {
        latestTime = json[0].commit.author.date;
        var d = new Date(latestTime);
        var datestring = (d.getFullYear() + '/' + ('0' + (d.getMonth() + 1)).slice(-2) + '/' +
            ('0' + d.getDate()).slice(-2) + ' ' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2));
        document.getElementById("update-time").innerText = `Last update: ${datestring}`;
    }).catch(function(error) {
        console.log(error);
        document.getElementById("update-time").innerText = `Last update: N/A`;
    });

function loadOptions(icon_json) {
    var icon_dic = icon_json[current_type];
    $("select.icon-select").empty();
    for (var key in icon_dic) {
        var optf = document.createElement('option');
        optf.setAttribute("data-img-src", icon_dic[key].path);
        optf.setAttribute("id", icon_dic[key].id);
        optf.setAttribute("value", `${icon_dic[key].path}@${icon_dic[key].nga_path}`);
        optf.innerHTML = icon_dic[key].name;
        iconOptions.appendChild(optf);
    }
    toggleName();
}

function toggleName() {
    if (toggle) {
        $("select.icon-select").imagepicker({
            show_label: true
        });
    } else {
        $("select.icon-select").imagepicker({
            show_label: false
        });
    }
}

function load() {
    if (!loaded[current_type]) {
        loadOptions(icon_json);
        for (var key in loaded) {
            loaded[key] = false;
        }
        loaded[current_type] = true;
        console.log(`${current_type} loaded.`);
    }
}

document.getElementById("amulet-btn").addEventListener("click",
    function() {
        current_type = 'amulet';
        load();
    });
document.getElementById("chara-btn").addEventListener("click",
    function() {
        current_type = 'chara';
        load();
    });
document.getElementById("dragon-btn").addEventListener("click",
    function() {
        current_type = 'dragon';
        load();
    });
document.getElementById("weapon-btn").addEventListener("click",
    function() {
        current_type = 'weapon';
        load();
    });
document.getElementById("toggle-btn").addEventListener("click",
    function() {
        toggle = !toggle;
        toggleName();
    });
document.getElementById("cancel-all-btn").addEventListener("click",
    function() {
        $("select.icon-select").data('picker').picker_options.forEach((imgp, i) => {
            imgp.option[0].selected = false;
        });
        $("select.icon-select").data('picker').sync_picker_with_select();
    });
document.getElementById("generate-link-btn").addEventListener("click",
    function() {
        outText.innerHTML = "";
        $("select.icon-select").data('picker').selected_values().forEach(function(item, index) {
            path = item.split('@')[0];
            outText.innerHTML += `[img]${path.replace("./","https://sh0wer1ee.gitee.io/dlicons/")}[/img]`;
        });
    });
document.getElementById("generate-nga-link-btn").addEventListener("click",
    function() {
        outText.innerHTML = "";
        $("select.icon-select").data('picker').selected_values().forEach(function(item, index) {
            path = item.split('@')[1];
            outText.innerHTML += `[img]${path}[/img]`;
        });
    });