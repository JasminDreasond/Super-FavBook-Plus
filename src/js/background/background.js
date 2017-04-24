function startmenu(){

// Intro

chrome.browserAction.onClicked.addListener(function(tab) {
var chromeponypopup = window.open(chrome.extension.getURL('index.html'), "_blank");
chromeponypopup.focus(); 
});

chrome.webRequest.onBeforeRequest.addListener(
function(details) {
chrome.extension.sendMessage({text:"updateconfig"},function(reponse){if(reponse.type == "updateconfig2"){}});
},
{
urls: ["https://www.deviantart.com/settings/update-browsing"],
types: ["main_frame"]
}
);









// Instalação

function installcodecss(data, failcode1, failcode2){chrome.browserAction.setBadgeText({text: ""});
if(data != "fail"){

var checkeditemtoinstall = false;

function checklinesetk(datacheck){if(datacheck.startsWith('\/\* Super FavBook Plus \*\/')){checkeditemtoinstall = true;}}
var enteredText = data;
var numberOfLineBreaks = (enteredText.match(/\n/g)||[]).length;
var characterCount = enteredText.length + numberOfLineBreaks;
checklinesetk(data.split('\n')[0]);
for (i = 0; i < numberOfLineBreaks; i++) {checklinesetk(data.split('\n')[i+1]);}

if(checkeditemtoinstall == true){chrome.storage.local.set({download_code_css: data}, function(){
chrome.windows.create({url: "/install_css.html", type: "popup", state: "normal"});
})}
else{alert(chrome.i18n.getMessage("customtheme_invalid"))}

} else{alert(failcode1.statusText);}}


// Preparar Instalação

function installthemest(data, type){

chrome.browserAction.setBadgeBackgroundColor({color: [51, 102, 255, 255]});
chrome.browserAction.setBadgeText({text: "..."});

if(type == true){$.ajax({cache: false, dataType: "text", url: data})
.done(function(data_cp){installcodecss(data_cp);}).fail(function(failcode1, failcode2){installcodecss("fail", failcode1, failcode2);});}
else{installcodecss(data);}
}






// Base Menu

var contextmenu = {};

function createmenuspekx(data, data2, data3){
//if(contextmenu[data.id] == true){chrome.contextMenus.remove(data.id);}
contextmenu[data.id] = true;
if(data3 == true){chrome.contextMenus.create({	
    id: data.id,	
    title: data.title,
    contexts:data2, 
    onclick: function(click_data){
if(data.type == "default"){chrome.windows.create({url: data.url, type: "popup", state: "maximized"});}
else if(data.type == "get_url"){
if(click_data.linkUrl != null){installthemest(click_data.linkUrl, true);}
else if(click_data.pageUrl != null){installthemest(click_data.pageUrl, true);}
else if(click_data.frameUrl != null){installthemest(click_data.frameUrl, true);}
}
else if(data.type == "get_code"){installthemest(click_data.selectionText, false);}
}
});}
}




// Default

createmenuspekx({"title": chrome.i18n.getMessage("checkapi_title"),"id": "opencheckapi", "url": "apps/checkapi.html", "type": "default"}, ["browser_action"], true);

chrome.contextMenus.create({	
    type: "separator",	
    contexts:["browser_action"]
});

createmenuspekx({"title": chrome.i18n.getMessage("appdevianplus"),"id": "opendevianplus", "url": "apps/devianplus.html", "type": "default"}, ["browser_action"], true);
createmenuspekx({"title": chrome.i18n.getMessage("appsoundbookplus"),"id": "opendsoundbookplus", "url": "apps/soundbookplus.html", "type": "default"}, ["browser_action"], true);
createmenuspekx({"title": chrome.i18n.getMessage("appfanficbookinplus"),"id": "openfanficbookin", "url": "apps/fanficbookinplus.html", "type": "default"}, ["browser_action"], true);


// URL
function loadmorerightclick(){chrome.storage.local.get({loadrightclick: true}, function(settings){
createmenuspekx({"title": chrome.i18n.getMessage("customtheme_geturl"),"id": "get_url", "type": "get_url"}, ["link", "frame", "page"], settings.loadrightclick);
//createmenuspekx({"title": chrome.i18n.getMessage("customtheme_getcode"),"id": "get_code", "type": "get_code"}, ["selection"], settings.loadrightclick);
});}

loadmorerightclick();

}

startmenu();
