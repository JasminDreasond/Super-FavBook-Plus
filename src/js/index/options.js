// Click Load CSS System

function antirepeat(data1, data2, type){
var duplicateChk = {};
$(""+data1+":contains("+data2+")").each(function(){
if (duplicateChk.hasOwnProperty(this.id)) {
if(type == 'remove'){$(this).remove();}
else if(type == 'hide'){$(this).addClass('hide');}
} else {
duplicateChk[this.id] = 'true';
}
});
}


// Variables CSS

var checkcssval1 = false;
var checkcssval2 = false;
var checkcssval3 = false;


// System Filter

function validatorwarncss(css , number){

if((css == "") || (css == undefined) || (css == null)){
if(number == 1){checkcssval1 = true;}
if(number == 2){checkcssval2 = true;}
if(number == 3){checkcssval3 = true;}
}

function checklinesetk(cssitem){

if(cssitem.startsWith('\/\* Super FavBook Plus \*\/')){
if(number == 1){checkcssval1 = true;}
if(number == 2){checkcssval2 = true;}
if(number == 3){checkcssval3 = true;}
}

else if((cssitem.startsWith('Author:') == false) && (cssitem.startsWith('URL:') == false) && (cssitem.startsWith('Page:') == false)){
if((cssitem.indexOf('http://') > -1) || (cssitem.indexOf('https://') > -1) || (cssitem.indexOf('ftp://') > -1) || (cssitem.indexOf('file://') > -1)){

if(cssitem.indexOf('file://') > -1){var warntypecss = 'file';}
else if(cssitem.indexOf('ftp://') > -1){var warntypecss = 'ftp';}
else if(cssitem.indexOf('http://') > -1){var warntypecss = 'http';}
else if(cssitem.indexOf('https://') > -1){var warntypecss = 'https';}
if(cssitem.indexOf('@import ') > -1){var warntypecss = warntypecss+' import';}


$("#csswarns").append($("<div>", {class: "warn_here "+warntypecss}).text(cssitem));
antirepeat("[class^='warn_here']", cssitem, 'remove');

}} else{if((cssitem != undefined) && (cssitem != null) && (cssitem != '')){

if(cssitem.startsWith('Author:')){

$("#authorlist_css[number='1']:contains("+chrome.i18n.getMessage("none")+")").text('');
var datauserpek = cssitem.replace('Author: ', '').replace('Author:', '');
$("#authorlist_css[number='"+number+"']").text(datauserpek).contextPopup({
  title: chrome.i18n.getMessage("author"),
  items: [
  
{label:chrome.i18n.getMessage("profile"), icon:'',action:function(){}, href: $("#authorlist_css[number='"+number+"']").attr('url'), target: '_blank'},
{label:chrome.i18n.getMessage("page"), icon:'',action:function(){}, href: $("#authorlist_css[number='"+number+"']").attr('page') , target: '_blank'}
  
]}, 'click').click(function(){$(this).addClass("selectedplusthumbpx");});
antirepeat("[id='authorlist_css']", datauserpek, 'hide');

} else if(cssitem.startsWith('URL:')){

var datauserpek = cssitem.replace('URL: ', '').replace('URL:', '');
$("#authorlist_css[number='"+number+"']").attr('url', datauserpek);

} else if(cssitem.startsWith('Page:')){

var datauserpek = cssitem.replace('Page: ', '').replace('Page:', '');
$("#authorlist_css[number='"+number+"']").attr('page', datauserpek);

}

}}

}
var enteredText = css;
var numberOfLineBreaks = (enteredText.match(/\n/g)||[]).length;
var characterCount = enteredText.length + numberOfLineBreaks;
checklinesetk(css.split('\n')[0]);
for (i = 0; i < numberOfLineBreaks; i++) {checklinesetk(css.split('\n')[i+1]);}

}



// Load Change

$("#ctcss_appdevianplus, #ctcss_appsoundbookplus, #ctcss_appfanficbookinplus").change(function(){
$("#csswarns, [id='authorlist_css']").empty().removeClass('hide').off('click');
$("#authorlist_css[number='1']").text(chrome.i18n.getMessage("none"));
checkcssval1 = false; checkcssval2 = false; checkcssval3 = false;
validatorwarncss($("#ctcss_appdevianplus").val(), 1);
validatorwarncss($("#ctcss_appsoundbookplus").val(), 2);
validatorwarncss($("#ctcss_appfanficbookinplus").val(), 3);
});


// Load Part 2

function loadcustomcssst(data){$("#ctcss_appdevianplus").val(data.dp); $("#ctcss_appsoundbookplus").val(data.sb); $("#ctcss_appfanficbookinplus").val(data.ffb); $("#ctcss_appdevianplus").trigger('change');}


// Load STCLICK

function loadsystemcssclick(){chrome.storage.local.get({loadsync: 'local', dp_css: '', sb_css: '', ffb_css: ''} ,function(settings){
if(settings.loadsync == 'sync'){chrome.storage.sync.get({dp_css: '', sb_css: '', ffb_css: ''} ,function(settings2){
loadcustomcssst({dp: settings2.dp_css, sb: settings2.sb_css, ffb: settings2.ffb_css});
$("#loadcscsstype").val(settings.loadsync);
})}
else{
loadcustomcssst({dp: settings.dp_css, sb: settings.sb_css, ffb: settings.ffb_css});
$("#loadcscsstype").val(settings.loadsync);
}
})}




// Save CSS

$("#savecustomcss").click(function(){chrome.storage.local.get({loadsync: 'local', dp_css: '', sb_css: '', ffb_css: ''} ,function(settings){$("#csserror").empty().addClass('hide'); $(".csserror").removeClass("csserror");

if((checkcssval1 == true) && (checkcssval2 == true) && (checkcssval3 == true)){
if(settings.loadsync == 'sync'){
chrome.storage.sync.set({
dp_css: $("#ctcss_appdevianplus").val(),
sb_css: $("#ctcss_appsoundbookplus").val(),
ffb_css: $("#ctcss_appfanficbookinplus").val()
}, function(){
$("#customcssbase").modal('toggle');
})
}

else{
chrome.storage.local.set({
dp_css: $("#ctcss_appdevianplus").val(),
sb_css: $("#ctcss_appsoundbookplus").val(),
ffb_css: $("#ctcss_appfanficbookinplus").val()
}, function(){
$("#customcssbase").modal('toggle');
})
}
}

else{
$("#csserror").append($("<span>").text(chrome.i18n.getMessage('options_customerror_1')), $("<strong>").text(" /* Super FavBook Plus */ "), $("<span>").text(chrome.i18n.getMessage('options_customerror_2'))).removeClass('hide');

if(checkcssval1 == false){$("#ctcss_appdevianplus").addClass("csserror");}
if(checkcssval2 == false){$("#ctcss_appsoundbookplus").addClass("csserror");}
if(checkcssval3 == false){$("#ctcss_appfanficbookinplus").addClass("csserror");}

}

})});


// Clicks Modal CSS

$("#opencustomcss").click(function(){
$("#csserror").empty().addClass('hide'); $(".csserror").removeClass("csserror"); 
loadsystemcssclick(); $("#customcssbase").modal();
});

$("#loadcscsstype").change(function(){chrome.storage.local.set({loadsync: $(this).val()}, function(){loadsystemcssclick();});});

$("[id^='removecss']").click(function(){
if(Number($(this).attr("id").replace("removecss", "")) == 1){$("#ctcss_appdevianplus").val("").trigger("change");}
if(Number($(this).attr("id").replace("removecss", "")) == 2){$("#ctcss_appsoundbookplus").val("").trigger("change");}
if(Number($(this).attr("id").replace("removecss", "")) == 3){$("#ctcss_appfanficbookinplus").val("").trigger("change");}
});










// Clicks Modal

$("#desktopopen").click(function(){$('#opendesktopkep').modal();});
$("#privacyopen").click(function(){$('#privacyhere').modal();});


//Ajustador Máximo

var windowbns = 16;
var windowbns2 = 39;

// GET

if(location_GET.appmode == 'true'){

var widthwn = 760+windowbns;
var heightwn = 460+windowbns2;
window.resizeTo(widthwn,heightwn);
$("body").removeClass('hide').addClass('app');

}
else{$("body").removeClass('hide');}


var getidextension = chrome.extension.getURL('');
var getidextension = getidextension.replace('chrome-extension://', '').replace('/', '');
$("#desktopurl").attr("href", chrome.extension.getURL('index.html?appmode=true'));
$("#urliconfixed").text('%USERPROFILE%/\AppData/\Local/\Google/\Chrome/\User Data/\Default/\Web Applications/\_crx_'+getidextension+'/'+chrome.i18n.getMessage('appName')+'.ico');


// Create Click

function createclickoption(data){

if (data.appmode == true){
$("#"+data.id).click(function(){
chrome.windows.create({url: "apps/"+data.id+".html", type: "popup", state: "maximized"});
window.close();
}).on("contextmenu",function(){
chrome.windows.create({url: "apps/"+data.id+".html", type: "popup", state: "maximized"});
window.close();
return false;
})
}
else if(data.disablecs == true){
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

if(location_GET.appmode == 'true'){var disablecsper = true;} else {var disablecsper = false;}
createclickoption({"id": "devianplus","disablecs": true, 'appmode': disablecsper});
createclickoption({"id": "soundbookplus", 'appmode': disablecsper});
createclickoption({"id": "fanficbookinplus", 'appmode': disablecsper});

// RD

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

// Check API

$("#checkapi").click(function(){
chrome.windows.create({url: "apps/checkapi.html", type: "popup", state: "maximized"});
});







// Api Change

chrome.storage.local.get({api_youtube: true, api_soundcloud: true, api_dailymotion: true},function(data){
$("[id='api_change']").each(function(){
if($(this).attr("api") == "youtube"){$(this).prop("checked", data.api_youtube);}
else if($(this).attr("api") == "soundcloud"){$(this).prop("checked", data.api_soundcloud);}
else if($(this).attr("api") == "dailymotion"){$(this).prop("checked", data.api_dailymotion);}
});});

$("[id='api_change']").click(function(){
if($(this).attr("api") == "youtube"){
chrome.storage.local.set({api_youtube: $(this).prop("checked")})
}
else if($(this).attr("api") == "soundcloud"){
chrome.storage.local.set({api_soundcloud: $(this).prop("checked")})
}
else if($(this).attr("api") == "dailymotion"){
chrome.storage.local.set({api_dailymotion: $(this).prop("checked")})
}
});



// Translator

$("#translatorcredits").attr("href", chrome.i18n.getMessage("translator_page"));

if((chrome.i18n.getMessage("translator_text") == "") || (chrome.i18n.getMessage("translator_text") == null) || (chrome.i18n.getMessage("translator_text") == undefined)){
$("#translatorspace").remove();
}







// Tumblr Page

//$("#tumblrpost").tumblr(
//{"id": "jackiedreasond"}, 
//{'limit': 2, 'scroll': false, 'pagination': 4, 'next_top': 2, 'window_mode': true, 'scroll_page': true, 'force_disable_tag': true,
//'custom_description_blog': chrome.i18n.getMessage("options_tumblr_description")}
//);