function createclickoption(data){

if(data.disablecs == true){
$("#"+data.id).click(function(){window.open("apps/"+data.id+".html", data.id+"fp");}).on("contextmenu",function(){
chrome.windows.create({url: "apps/"+data.id+".html", type: "popup", state: "maximized"});
return false;
})
}
else{
$("#"+data.id).click(function(){
chrome.windows.create({url: "apps/"+data.id+".html", type: "popup", state: "maximized"})
}).on("contextmenu",function(){
chrome.windows.create({url: "apps/"+data.id+".html", type: "popup", state: "maximized"})
return false;
})
}

$("#"+data.id+" img").attr("title", chrome.i18n.getMessage("app"+data.id)).tooltip(); 

}

createclickoption({"id": "devianplus","disablecs": true});
createclickoption({"id": "soundbookplus"});
createclickoption({"id": "fanficbookinplus"});

// Facebook

function popupsharedpx(urlpagex){
window.open(urlpagex, "_blank", 'resizable,height=360,width=570')
}

// Facebook
$("#facebookshare").click(function(){
popupsharedpx("https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Fsuper-favbook-plus%2Fnanoagbfpchifchpanhgbhbnmpkhmncm%3Fhl&amp;src=sdkpreparse")
})

// Twitter
$("#twittershare").click(function(){
var urltwitterpxs = encodeURI("Super FavBook Plus :D https://goo.gl/2ppMik")
popupsharedpx("https://twitter.com/intent/tweet?text="+urltwitterpxs)
})

$("#checkapi").click(function(){
chrome.windows.create({url: "apps/checkapi.html", type: "popup", state: "maximized"});
});







// Api Change

chrome.storage.local.get({api_youtube: true, api_soundcloud: true},function(data){
$("[id='api_change']").each(function(){
if($(this).attr("api") == "youtube"){$(this).prop("checked", data.api_youtube);}
else if($(this).attr("api") == "soundcloud"){$(this).prop("checked", data.api_soundcloud);}
});});

$("[id='api_change']").click(function(){
if($(this).attr("api") == "youtube"){
chrome.storage.local.set({api_youtube: $(this).prop("checked")})
}
else if($(this).attr("api") == "soundcloud"){
chrome.storage.local.set({api_soundcloud: $(this).prop("checked")})
}
});




$("#translatorcredits").attr("href", chrome.i18n.getMessage("translator_page"));

if((chrome.i18n.getMessage("translator_text") == "") || (chrome.i18n.getMessage("translator_text") == null) || (chrome.i18n.getMessage("translator_text") == undefined)){
$("#translatorspace").remove();
}