chrome.browserAction.onClicked.addListener(function(tab) {
var chromeponypopup = window.open(chrome.extension.getURL('options.html'), "chromeponypopup");
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

function createmenuspekx(data){
chrome.contextMenus.create({	
    id: data.id,	
    title: data.title,
    contexts:["browser_action"], 
    onclick: function(){chrome.windows.create({url: data.url, type: "popup", state: "maximized"})}
});
}

createmenuspekx({"title": chrome.i18n.getMessage("checkapi_title"),"id": "opencheckapi", "url": "apps/checkapi.html"});

chrome.contextMenus.create({	
    type: "separator",	
    contexts:["browser_action"]
});

createmenuspekx({"title": chrome.i18n.getMessage("appdevianplus"),"id": "opendevianplus", "url": "apps/devianplus.html"});
createmenuspekx({"title": chrome.i18n.getMessage("appsoundbookplus"),"id": "opendsoundbookplus", "url": "apps/soundbookplus.html"});
createmenuspekx({"title": chrome.i18n.getMessage("appfanficbookinplus"),"id": "openfanficbookin", "url": "apps/fanficbookinplus.html"});