$("body").append($("<div>", {id: "scrollup", class: "glyphicon glyphicon-arrow-up"}).click(
function(){ $("html, body").animate({ scrollTop: 0 }, "slow");}).affix({offset:{top: 575}}))

function loadingset(data){
if(data == true){$("#loading").removeClass("hide"); $("#container").addClass("wait");}
else if(data == false){$("#loading").addClass("hide"); $("#container").removeClass("wait");}
}

// System
function startfavpage(folderid, detectagain){chrome.bookmarks.getSubTree(folderid ,function(foldercfg){ var folder = foldercfg[0].children;

if(detectagain == "again"){}
else{
var subcounter = 0
var finalcomplete = false
var folderpxse = false
var folderpxsepx = false
var createdmore = false
var pagesforsecpg
var pageclicknumberp
var pageclicknumberpmax
var detectpageopenx = false
var typepsxanex
var numbercaplist
var idfolderclick
var detectcapselected
var pagesforsecpgnbx
var numbercountitems = 0
}


function itemcountsystemfolder(){
if(numbercountitems > 99){numbercountitemsview = "99+"}
else{numbercountitemsview = numbercountitems}
if(numbercountitems == 0){
$("#itemnumber").empty().append($("<span>", {class: "glyphicon glyphicon-folder-open folderitems"}), $("<span>", {class: "badge", "data-placement": "bottom", "data-original-title": numbercountitems+" "+chrome.i18n.getMessage("gapp_nothingfolder")}).text(numbercountitemsview).tooltip());
}
if(numbercountitems == 1){
$("#itemnumber").empty().append($("<span>", {class: "glyphicon glyphicon-folder-open folderitems"}), $("<span>", {class: "badge", "data-placement": "bottom", "data-original-title": numbercountitems+" "+chrome.i18n.getMessage("gapp_itemfolder")}).text(numbercountitemsview).tooltip());
}
else{
$("#itemnumber").empty().append($("<span>", {class: "glyphicon glyphicon-folder-open folderitems"}), $("<span>", {class: "badge", "data-placement": "bottom", "data-original-title": numbercountitems+" "+chrome.i18n.getMessage("gapp_itemsfolder")}).text(numbercountitemsview).tooltip());
}
}






// Abrir Capitulo

function selectcapst(thishere){chrome.bookmarks.get($(thishere).attr("folderid"), function(selectfavfic){
var titlefav = selectfavfic[0].title.split(":CAPPLUSPX")[0]
chrome.bookmarks.update(selectfavfic[0].id, {"title": titlefav+":CAPPLUSPX"+$(thishere).val()}, function(newcapselected){
$("#openfic[folderid='"+$(thishere).attr("folderid")+"']").attr("capsave", $(thishere).val())
})
})}

function submitcapst(thishere){window.open($("#capselect option:selected").attr("url"), "_blank")}







// Homepage

function generatormenupx(){
$("#imagelist").empty();

$("#imagelist").append($("<div>", {id: "homepx"}).append(

$("<h1>", {class: "title"}).text(chrome.i18n.getMessage("welcome")),

$("<p>", {class: "info"}).text(chrome.i18n.getMessage("gapp_welcome_text")),
$("<p>", {class: "info"}).text(chrome.i18n.getMessage("app_fb_welcome_text")+' "'+chrome.i18n.getMessage("app_fb_folder")+'"')

))

$("#itemnumber").empty().append($("<span>", {class: "glyphicon glyphicon-home folderitems"}), $("<span>", {class: "badge", "data-placement": "bottom", "data-original-title": chrome.i18n.getMessage("gapp_folderhome")}).text(0).tooltip());

loadingset(false);
}



// Remover Imagem

function removeimagepxke(thishere){

chrome.bookmarks.get($(thishere).attr("folderid"), function(removeidfolderpx){

var confirmremovefolderpx = confirm("Confirm your action:\n\nREMOVE\n\n"+removeidfolderpx[0].title.replace(":CHECKED", "")+"\n\n"+removeidfolderpx[0].url);

if(confirmremovefolderpx == true){chrome.bookmarks.remove($(thishere).attr("folderid"), function(){
$("#objfavit"+$(thishere).attr("folderid")+" img").off("click");
$("#objfavit"+$(thishere).attr("folderid")).remove();
numbercountitems = numbercountitems-1
itemcountsystemfolder();
})}

})

}

// Marcar Imagem

function markthisobjectart(thishere){

chrome.bookmarks.get($(thishere).attr("folderid"), function(detectfoldersekl){

if($(thishere).prop("checked") == true){
chrome.bookmarks.update($(thishere).attr("folderid"), {title: detectfoldersekl[0].title+":CHECKED"}, function(getinfofavselect){
$("#objfavit"+$(thishere).attr("folderid")).addClass("artmark");
})
}
else{
chrome.bookmarks.update($(thishere).attr("folderid"), {title: detectfoldersekl[0].title.replace(":CHECKED", "")}, function(getinfofavselect){
$("#objfavit"+$(thishere).attr("folderid")).removeClass("artmark");
})
}

})

}








// Pesquisar
function searchimages(result){

if(result == ""){
$("#imagelist [id^='objfavit']").css("display", "");
}
else if(result == ":checked"){
$("#imagelist [id^='objfavit']").css("display", "none");
$("#imagelist .artmark").css("display", "");
}
else{
$("#imagelist [id^='objfavit']").css("display", "none");
$("#imagelist [id^='objfavit']").has("#openfic:contains('"+result+"')").css("display", "");
$("#imagelist [id^='objfavit']").has("#openfic:contains('"+result.toUpperCase()+"')").css("display", "");
$("#imagelist [id^='objfavit']").has("#openfic:contains('"+result.toLowerCase()+"')").css("display", "");
}

}

if(detectagain == "again"){}
else{$("#search").keyup(function(){searchimages($(this).val());});}

// Open Image
function openfolder(idfolder, thishere, loadtypepx){

pagesforsecpg = 999999999999999999
createdmore = false
$("[id='removefavclick']").off("click");
$("#moreclick, #moreclick2").off("click").remove();
$("#imagelist [id='openfic']").off("click");
$("#folders .active").removeClass("active");
$(thishere).addClass("active");
$("#imagelist").empty();

chrome.bookmarks.getSubTree(idfolder ,function(foldercfg3){
var folderimagescfg = foldercfg3[0].children;
generatorimages(folderimagescfg, folderimagescfg.length, loadtypepx);
})

}


//Open Folders
function openmorefolder(data){

if($("#folder"+data).attr("class") == "open"){
$("#folder"+data).removeClass("open");
$("#"+data+" #iconopen"+data).removeClass("glyphicon-folder-open clickopen").addClass("glyphicon-folder-close");
}

else{
$("#folder"+data).addClass("open");
$("[id^='foldersubfolderpx']").has("#folder"+data).addClass("open");
$("#"+data+" #iconopen"+data).addClass("glyphicon-folder-open clickopen").removeClass("glyphicon-folder-close");
}

}


// Open Image

if(detectagain == "again"){}
else{
var invertimagedetect = false
var backgroundchangedetect = false
}


function backgroundchangedetectclick(detectbackstart){

if(backgroundchangedetect == true){if(detectbackstart == true){$("#imgpreview, #backchangecolor").addClass("backchhangepx");}
else{
backgroundchangedetect = false
chrome.storage.local.set({backgroundchangedetect: false});
$("#imgpreview, #backchangecolor").removeClass("backchhangepx");
}}
else {if(detectbackstart == true){$("#imgpreview, #backchangecolor").removeClass("backchhangepx");}
else{
backgroundchangedetect = true
chrome.storage.local.set({backgroundchangedetect: true});
$("#imgpreview, #backchangecolor").addClass("backchhangepx");
}}

}

$("#backchangecolor").click(function(){backgroundchangedetectclick();});

chrome.storage.local.get({backgroundchangedetect: false}, function(backgetpx){
backgroundchangedetect = backgetpx.backgroundchangedetect
backgroundchangedetectclick(true);
})


function invertimageclick(){

if(invertimagedetect == true){invertimagedetect = false
$("#imgpreview #conteudo center img, #imginvertclick").removeClass("invertimagepx");
}
else {invertimagedetect = true
$("#imgpreview #conteudo center img, #imginvertclick").addClass("invertimagepx");
}

}

$("#imginvertclick").click(function(){invertimageclick();});


function nextimagestpx(typeclick, detectautonext){
	
$("body").css("overflow", "").removeClass("imagemodeps");
$("#imgpreview").addClass("anticlick").fadeOut(function(){

detectpageopenx = true
$("#imgpreview").animate({ scrollTop: 0 }, 0);
if(detectautonext == true){}
else{$("#nextimageclickpx, #previousimageclickpx").removeClass("limitpagepx");}

if(typeclick == "next"){
typepsxanex = "next"
if(pageclicknumberp == pageclicknumberpmax){pageclicknumberp = 0
$("#nextimageclickpx").addClass("limitpagepx");
}
pageclicknumberp = pageclicknumberp+1
if($("[numberpage='"+pageclicknumberp+"']").is(":visible")){
$("[numberpage='"+pageclicknumberp+"']").trigger("click");
}
else{nextimagestpx(typeclick, detectautonext);}
}
else if(typeclick == "previous"){
typepsxanex = "previous"
pageclicknumberp = pageclicknumberp-1
if(pageclicknumberp == 0){pageclicknumberp = Number(pageclicknumberpmax)
$("#previousimageclickpx").addClass("limitpagepx");
}
if($("[numberpage='"+pageclicknumberp+"']").is(":visible")){
$("[numberpage='"+pageclicknumberp+"']").trigger("click");
}
else{nextimagestpx(typeclick, detectautonext);}
}

});}

$("#nextimageclickpx").click(function(){nextimagestpx("next");});
$("#previousimageclickpx").click(function(){nextimagestpx("previous");});


function closeimagest(){
detectpageopenx = false

$("#nextimageclickpx, #previousimageclickpx").removeClass("limitpagepx");
document.title = chrome.i18n.getMessage("appfanficbookinplus");

$("body").css("overflow", "").removeClass("imagemodeps");
$("#imgpreview").addClass("anticlick").fadeOut();
}

function openimagest(datype, clickdata, thishere){

document.title = $(thishere).text()+" - "+chrome.i18n.getMessage("appfanficbookinplus");

$("#clickclosepagepxk, #capsubmit").off("click");
$("#capselect").off("change");
$("#imgpreview #conteudo").empty();

if(datype == "openurl"){

pageclicknumberp = Number($(thishere).attr("numberpage"))
$("body").css("overflow", "hidden").addClass("imagemodeps");

loadingset(true);

if(($(thishere).attr("urlclick").startsWith("https://fanfiction.com.br/historia/")) || ($(thishere).attr("urlclick").startsWith("https://www.fanfiction.net/s/")) || ($(thishere).attr("urlclick").startsWith("http://www.fimfiction.net/"))){

idfolderclick = $(thishere).attr("folderid");
detectcapselected = Number($(thishere).attr("capsave"))
if(Number.isNaN(detectcapselected)){detectcapselected = 1}

$.ajax({cache: false, url: $(thishere).attr("urlclick")})
.done(function(fanfic){
loadingset(false);

var gettitlepage = fanfic.match("<title>(.*?)</title>")[1];
var pagenumbpxk = 0

if(this.url.startsWith("https://fanfiction.com.br/")){

// Titulo

$("#imgpreview #conteudo").append($("<a>", {href: this.url, target: "_blank", class: "title"}).text(gettitlepage));

// Autor
$(fanfic).find("#left_part .tooltip_userinfo").each(function(){
$(this).attr('href',"https://fanfiction.com.br"+$(this).attr('href'));
$("#imgpreview #conteudo").append($("<div>", {class: "autor"}).append($("<span>").text(chrome.i18n.getMessage("by")+" "), $("<a>", {href: $(this).attr("href"), target: "_blank"}).text($(this).text())));
})

$("#imgpreview #conteudo").append($("<div>", {id: "ficoptions"}).append(
$("<select>", {id: "capselect", folderid: idfolderclick}).change(function(){selectcapst(this);}),
$("<input>", {id: "capsubmit", type: "submit", value: chrome.i18n.getMessage("enter"), folderid: idfolderclick}).click(function(){submitcapst(this);})
))

// Capa
$(fanfic).find("#left_part .story_index_capa").each(function(){
$(this).attr('src',"https:"+$(this).attr('src'));
$("#imgpreview #conteudo").append($("<img>", {src: $(this).attr("src"), class: "capa", alt: "capa"}));
})

// Capitulos
$(fanfic).find(".chapter_list a").each(function(){
pagenumbpxk = pagenumbpxk+1
$(this).attr('href',"https://fanfiction.com.br"+$(this).attr('href'));
$("#capselect").append($("<option>", {url: $(this).attr("href"), value: pagenumbpxk}).text($(this).text()));
})

}
else if(this.url.startsWith("https://www.fanfiction.net/")){

// Titulo

$("#imgpreview #conteudo").append($("<a>", {href: this.url, target: "_blank", class: "title"}).text($(fanfic).find("#profile_top b[class='xcontrast_txt']").text()));

$("#imgpreview #conteudo").append($("<div>", {id: "ficoptions"}).append(
$("<select>", {id: "capselect", folderid: idfolderclick}).change(function(){selectcapst(this);}),
$("<input>", {id: "capsubmit", type: "submit", value: chrome.i18n.getMessage("enter"), folderid: idfolderclick}).click(function(){submitcapst(this);})
))

// Autor
$(fanfic).find("#profile_top .xcontrast_txt[href^='/u/']").each(function(){
$(this).attr('href',"https://www.fanfiction.net"+$(this).attr('href'));
$("#imgpreview #conteudo").append($("<div>", {class: "autor"}).append($("<span>").text(chrome.i18n.getMessage("by")+" "), $("<a>", {href: $(this).attr("href"), target: "_blank"}).text($(this).text())));
})

var geturlcap = this.url.split("?_=")[0]
var geturlcap = geturlcap.substring(0, geturlcap.lastIndexOf("/"))
var geturlcaprs = this.url.replace(geturlcap, "")
var geturlcap = geturlcap.substring(0, geturlcap.lastIndexOf("/"))+"/"

// Capitulos
$(fanfic).find("#chap_select:first-child option").each(function(){

$("#capselect").append($("<option>", {url: geturlcap+$(this).attr("value")+geturlcaprs, value: $(this).attr("value"), id: "capdivpx"+$(this).attr("value")
}).text($(this).text()));
numbercaplist = Number($(this).attr("value"))

})

for (i = 0; i < numbercaplist; i++) {var numxsd3 = i+1; $("#capdivpx"+numxsd3).remove();}

}
else if(this.url.startsWith("http://www.fimfiction.net/")){

// Titulo

$("#imgpreview #conteudo").append($("<a>", {href: this.url, target: "_blank", class: "title"}).text($(fanfic).find(".story_name").text()));

// Autor
$(fanfic).find(".title .author a").each(function(){
$(this).attr('href',"http://www.fimfiction.net"+$(this).attr('href'));
$("#imgpreview #conteudo").append($("<div>", {class: "autor"}).append($("<span>").text(chrome.i18n.getMessage("by")+" "), $("<a>", {href: $(this).attr("href"), target: "_blank"}).text($(this).text())));
})

$("#imgpreview #conteudo").append($("<div>", {id: "ficoptions"}).append(
$("<select>", {id: "capselect", folderid: idfolderclick}).change(function(){selectcapst(this);}),
$("<input>", {id: "capsubmit", type: "submit", value: chrome.i18n.getMessage("enter"), folderid: idfolderclick}).click(function(){submitcapst(this);})
))

// Capa
$(fanfic).find(".story_image a").each(function(){
$("#imgpreview #conteudo").append($("<img>", {src: $(this).attr("href"), class: "capa", alt: "capa"}));
})

// Capitulos
$(fanfic).find(".chapters .chapter_container a").each(function(){
if($(this).attr('href').startsWith("/download_chapter.php?")){}
else{
pagenumbpxk = pagenumbpxk+1
$(this).attr('href',"http://www.fimfiction.net"+$(this).attr('href'));
$("#capselect").append($("<option>", {url: $(this).attr("href"), value: pagenumbpxk}).text($(this).text()));
}})

}

$("#capselect").val(detectcapselected)

$("#imgpreview").removeClass("anticlick").fadeIn();
$("#clickclosepagepxk").click(function(){closeimagest();});

}).fail(function(){loadingset(false); $("#erroropen").modal();})

}

else{loadingset(false); $("#erroropen").modal();}

}

else if(detectpageopenx == true){
nextimagestpx(typepsxanex, true);
}

}

// Generator
function generatorimages(data, number, start, startid, folderset, oldfolder){

if(start == "subfolder"){}
else{
numbercountitems = number
itemcountsystemfolder();
}

// Variavel
var urlpage
var urlname
var maxitem = number
if(number > pagesforsecpg){
var moreitem = true
}
else{
var moreitem = false
}
var artcountpx = 0
var cancelload = false

if(start == true){

$("#defaultfolder").prepend($("<li>", {class: "homefolder"}).append($("<a>", {class: "glyphicon glyphicon-home active"}).text(chrome.i18n.getMessage("home")).click(function(){
openfolder(startid, this, "homepage");
})));

$("#openpagefav").append($("<span>", {class: "glyphicon glyphicon-star folderitems folderid", "data-placement": "bottom", "data-original-title": chrome.i18n.getMessage("gapp_folderid")+": "+startid}).tooltip())
.click(function(){chrome.windows.create({url: "chrome://bookmarks/#"+startid, type: "normal", state: "normal"});});
	
}

// New Sub Folder
if(start == "subfolder"){
subcounter = subcounter+1
$("#subfolderpx"+oldfolder).append($("<ul>", {id: "folder"+folderset}));
}

//Loop
function loopcreatordv(starttime){
if(starttime == true){}
else{
artcountpx = artcountpx+1
if(artcountpx == maxitem){finalcomplete = true}
else{finalcomplete = false}
}
	
// End Load

function updateimagesloadend(){
var numberimgdetectpx = 0
pageclicknumberpmax = 0
$("[id^='objfavit']").each(function(){
numberimgdetectpx = numberimgdetectpx+1
pageclicknumberpmax = pageclicknumberpmax+1
$("#"+$(this).attr("id")+" #openfic").attr("numberpage", numberimgdetectpx)
$("#"+$(this).attr("id")+" #removefavclick, #"+$(this).attr("id")+" #markseck").attr("folderid", $(this).attr("id").replace("objfavit", ""))
if($(this).attr("checkedload") == "true"){$(this).addClass("artmark"); $("#"+$(this).attr("id")+" #markseck").prop("checked", true)}
else{$(this).removeClass("artmark");}
});
}

function endimageload(){if(finalcomplete == true){

pagesforsecpg = 9999999999999999999
$("#moreclick, #moreclick2").off("click").remove();
loadingset(false);

}
updateimagesloadend();
}

// Base

loadingset(true);

if(data[0] == undefined){generatormenupx();}

if(artcountpx == maxitem-1){if(folderpxsepx == false){folderpxse = true}}
if(start == true){if((maxitem == 0) || (folderpxse == true)){finalcomplete = true; endimageload();}}
if(data[artcountpx] == undefined){loadingset(false); return;}
urlpage = data[artcountpx].url;
urlname = data[artcountpx].title;
if(urlpage == null){}
else{if(data[artcountpx].url.indexOf('?q=') > -1){data[artcountpx].url = data[artcountpx].url.split('?q=')[0];}}
var oembed_url = encodeURI(data[artcountpx].url);
if(urlpage == null){var subfoldernb = artcountpx}
if((artcountpx == pagesforsecpg) && (start == "folder")){loadingset(false); return;}

if((data[artcountpx] == undefined) || (urlpage == null) || (start == true) || (start == "homepage") || (start == "subfolder")){}
else{

if(urlname.endsWith(":CHECKED")){var checkedart = true}
else{var checkedart = false}
}

// Create Sub Folder
function subfoldercreate(myfoderid){chrome.bookmarks.getSubTree(myfoderid ,function(foldercfg2){

var subfolderchi = foldercfg2[0].children;
generatorimages(foldercfg2[0].children, subfolderchi.length, "subfolder", foldercfg2[0].id, "subfolderpx"+foldercfg2[0].id, myfoderid);

})}

// New Sub Folder
if(start == "subfolder"){if(urlpage == null){
$("#iconopen"+folderset).addClass("subfolderctpxcf");
$("#folder"+folderset).append($("<li>",{id: "subfolderpx"+data[subfoldernb].id, class: "subfolderkp"+subcounter}).append($("<span>", {class: "glyphicon glyphicon-folder-close", id: "iconopensubfolderpx"+data[subfoldernb].id}).click(function(){openmorefolder("subfolderpx"+data[subfoldernb].id);}), $("<a>", {folderidreg: data[subfoldernb].id}).text(data[subfoldernb].title).click(function(){
openfolder(data[subfoldernb].id, this, "folder");
}).contextmenu(function(){
chrome.windows.create({url: "chrome://bookmarks/#"+data[subfoldernb].id, type: "normal", state: "normal"});
return false;
})));

subfoldercreate(data[subfoldernb].id);
loopcreatordv();
}
else{loopcreatordv();}}



// Detect Folder File
if(urlpage == null){
if(start == true){

// New Folder
$("#"+folderset).append($("<li>", {id: "subfolderpx"+data[subfoldernb].id, class: "firstsubfolder"}).append($("<span>", {class: "glyphicon glyphicon-folder-close", id: "iconopensubfolderpx"+data[subfoldernb].id}).click(function(){openmorefolder("subfolderpx"+data[subfoldernb].id);}), $("<a>", {folderidreg: data[subfoldernb].id}).text(data[subfoldernb].title).click(function(){
openfolder(data[subfoldernb].id, this, "folder");
}).contextmenu(function(){
chrome.windows.create({url: "chrome://bookmarks/#"+data[subfoldernb].id, type: "normal", state: "normal"});
return false;
})));

// New Sub Folder
subfoldercreate(data[subfoldernb].id);

}
else if(start == "subfolder"){}
else{pagesforsecpg = pagesforsecpg+1}

loopcreatordv();
}




// Create Home Page

if((start == true) || (start == "homepage")){generatormenupx();}

else if(start == "folder"){if(createdmore == false){if(moreitem == true){$("#moreclickbase").append(

$("<div>", {id: "moreclick", class: "clickdevart"}).text(chrome.i18n.getMessage("more")).click(function(){
pagesforsecpg = pagesforsecpg+50
loopcreatordv();
}),

$("<div>", {id: "moreclick2", class: "clickdevart"}).text(chrome.i18n.getMessage("all")).click(function(){
pagesforsecpg = pagesforsecpg+999999999
loopcreatordv();
})

)

}}}

createdmore = true

if(start == "subfolder"){loadingset(false);}
else if(oembed_url == "undefined"){loopcreatordv();}
else if(cancelload == true){$("#imagelist").addClass("hide"); $("#loading").addClass("hide");}
else if(artcountpx < maxitem+1){
	


if(urlpage == null){}

// Image Generator
else{

// Generator Validador URL
if((data[artcountpx].url.startsWith("https://fanfiction.com.br/historia/")) || (data[artcountpx].url.startsWith("https://www.fanfiction.net/s/")) || (data[artcountpx].url.startsWith("http://www.fimfiction.net/"))){

if(artcountpx == maxitem){finalcomplete = true}
else{finalcomplete = false}

if((start == true) || (start == "homepage")){}
else{

if(data[artcountpx].url.startsWith("https://fanfiction.com.br/historia/")){var urlprovidepx = "https://fanfiction.com.br/"}
else if(data[artcountpx].url.startsWith("https://www.fanfiction.net/s/")){var urlprovidepx = "https://www.fanfiction.net/"}
else if(data[artcountpx].url.startsWith("http://www.fimfiction.net/")){var urlprovidepx = "http://www.fimfiction.net/"}

var titlefanficp = data[artcountpx].title.split(":CAPPLUSPX")[0]
var idfanficp = data[artcountpx].title.replace(titlefanficp+":CAPPLUSPX", "")

$("#imagelist").append($("<div>", {id: "objfavit"+data[artcountpx].id, folderurl:  data[artcountpx].url, checkedload: checkedart}).append(

$("<div>", {class: "glyphicon glyphicon-remove", id: "removefavclick"}).click(function(){removeimagepxke(this);}),

$("<div>", {urlclick: data[artcountpx].url, id: "openfic", capsave: idfanficp, folderid: data[artcountpx].id}).text(titlefanficp).click(function(){openimagest("openurl", {}, this);}).on("contextmenu",function(){
window.open($(this).attr("urlclick"), "_blank")
return false;
}),

$("<div>").append($("<a>", {href: urlprovidepx, target: "_blank"}).text(urlprovidepx))

))

setTimeout(function(){loopcreatordv();},1);

endimageload();
folderpxsepx = true

}



}

else{loopcreatordv();}

}}

}

loopcreatordv(true);
	
}

// Comando Inicial
generatorimages(foldercfg[0].children, folder.length, true, foldercfg[0].id, "folderlist");
})}

// Start System

function searchfolder(detectagain){chrome.bookmarks.search({"title": chrome.i18n.getMessage("app_fb_folder")}, function(favdata){
if(favdata[0] == null){chrome.bookmarks.create({"parentId": "1", "title": chrome.i18n.getMessage("app_fb_folder")}, function(newfoldersystem){
chrome.bookmarks.create({"parentId": newfoldersystem.id, "title": chrome.i18n.getMessage("gapp_demofolder")}, function(newfoldersystem2){
chrome.bookmarks.create({"parentId": newfoldersystem2.id, "title": chrome.i18n.getMessage("gapp_filedemo1"), "url": "https://www.fanfiction.net/s/12044162/1/Pokemon-Hoenn-Adventure-The-Final-Generation"});
chrome.bookmarks.create({"parentId": newfoldersystem2.id, "title": chrome.i18n.getMessage("gapp_filedemo2"), "url": "https://www.fanfiction.net/s/12403503/1/The-Epic-of-Renji-Nami-s-Father"});
chrome.bookmarks.create({"parentId": newfoldersystem2.id, "title": chrome.i18n.getMessage("gapp_filedemo3"), "url": "https://www.fanfiction.net/s/12334588/1/Before-I-Go"});	
});
$("#foldercreatesc").modal();
$("#openclicknewfolder").click(function(){chrome.windows.create({url: "chrome://bookmarks/#"+newfoldersystem.id, type: "normal", state: "normal"}); $("#foldercreatesc").modal("toggle");});
searchfolder(detectagain);
})}
else{startfavpage(favdata[0].id, detectagain);}
})}

searchfolder("");

$("#refreshfolderlist").click(function(){location.reload();});







// Import or Export Folder

$("#excodefolder").click(function(){if($('#folderlist .active').attr('folderidreg') != undefined){chrome.bookmarks.getSubTree($('#folderlist .active').attr('folderidreg') ,function(foldercfg){

var items_folder_create_file = [];
for (i = 0; i < foldercfg[0].children.length; i++) {if((foldercfg[0].children[i].url != null) && (foldercfg[0].children[i].url != undefined) && (foldercfg[0].children[i].url != '')){
items_folder_create_file.push({'title': foldercfg[0].children[i].title, 'url': foldercfg[0].children[i].url});
}}
var json_save_file_st = {'title': foldercfg[0].title,'items': items_folder_create_file};
var blob = new Blob([JSON.stringify(json_save_file_st)], {type: "text/plain;charset=utf-8"});
saveAs(blob, "sfb+_fbp_"+foldercfg[0].title+".txt");

});}});

$("#impcodefolder").click(function(){if($("#codepekxed").val() != ''){chrome.bookmarks.search({"title": chrome.i18n.getMessage("app_fb_folder")}, function(favdata){
var json_save_file_jt = JSON.parse($("#codepekxed").val());
chrome.bookmarks.create({"parentId": favdata[0].id, "title": json_save_file_jt.title}, function(newfoldersystem2){

for (i = 0; i < json_save_file_jt.items.length; i++) {
chrome.bookmarks.create({"parentId": newfoldersystem2.id, "title": json_save_file_jt.items[i].title, "url": json_save_file_jt.items[i].url});
}
$("#resultimportpx2").text(chrome.i18n.getMessage("gapp_folderimcomplete"));
$("#codepekxed").val('');

});
})}});

$("#openimportbtx").on('click contextmenu', function(){$('#impofavstpx').modal(); return false;});