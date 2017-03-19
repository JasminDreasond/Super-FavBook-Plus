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

chrome.contextMenus.create({	
    id: "opencheckapi",	
    title: chrome.i18n.getMessage("checkapi_title"),
    contexts:["browser_action"], 
    onclick: function(){chrome.windows.create({url: "apps/checkapi.html", type: "popup", state: "maximized"})}
});

chrome.contextMenus.create({	
    type: "separator",	
    contexts:["browser_action"]
});

chrome.contextMenus.create({	
    id: "opendevianplus",	
    title: chrome.i18n.getMessage("appdevianplus"),
    contexts:["browser_action"], 
    onclick: function(){chrome.windows.create({url: "apps/devianplus.html", type: "popup", state: "maximized"})}
});

chrome.contextMenus.create({	
    id: "opendsoundbookplus",	
    title: chrome.i18n.getMessage("appsoundbookplus"),
    contexts:["browser_action"], 
    onclick: function(){chrome.windows.create({url: "apps/soundbookplus.html", type: "popup", state: "maximized"})}
});

chrome.contextMenus.create({	
    id: "openfanficbookin",	
    title: chrome.i18n.getMessage("appfanficbookin"),
    contexts:["browser_action"], 
    onclick: function(){chrome.windows.create({url: "apps/fanficbookinplus.html", type: "popup", state: "maximized"})}
});