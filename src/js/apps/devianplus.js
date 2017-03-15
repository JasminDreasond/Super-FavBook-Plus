$("body").append($("<div>", {id: "scrollup", class: "glyphicon glyphicon-arrow-up"}).click(
function(){ $("html, body").animate({ scrollTop: 0 }, "slow");}).affix({offset:{top: 575}}))

function loadingset(data){
if(data == true){$("#loading").removeClass("hide"); $("#container").addClass("wait");}
else if(data == false){$("#loading").addClass("hide"); $("#container").removeClass("wait");}
}

var pagesforsec = 24
var pagesforsecresult = 0
var pagesforsecpgnbx

// Gerador de copia

function copycodestpx(title, code){

$("#copytextdapkl").remove();
$("body").append($("<div>", {id: "copytextdapkl", style: "display: none;"}).append(

$("<p>").text(title),
$("<input>", {type: "text", value: code})
.click(function(){$(this).select();})
.change(function(){$(this).val(code);}),

$("<br>"),

$("<input>", {type: "submit", value: "Close"}).click(function(){$("#copytextdapkl").remove();})

).fadeIn())

}

// Trocar Páginas por segundo

function changepagesforscd(mynmbxs){
	
if(mynmbxs == "start"){chrome.storage.local.get({maxitemfor: 10}, function(config){
$("#loadnumber").val(config.maxitemfor);
pagesforsecpgnbx = Number(config.maxitemfor)
})}

else{
if(mynmbxs < 10){
$("#loadnumber").val(10);
pagesforsecpgnbx = Number(10)
chrome.storage.local.set({maxitemfor: 10})
}
else if(mynmbxs > 99){
$("#loadnumber").val(99);
pagesforsecpgnbx = Number(10)
chrome.storage.local.set({maxitemfor: 10})
}
else{
pagesforsecpgnbx = Number(mynmbxs)
chrome.storage.local.set({maxitemfor: mynmbxs})
}}

}

changepagesforscd("start");

$("#loadnumber").change(function(){changepagesforscd($(this).val());});

// System
function startfavpage(folderid){chrome.bookmarks.getSubTree(folderid ,function(foldercfg){ var folder = foldercfg[0].children;
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
var numbercountitems = 0



function itemcountsystemfolder(){
if(numbercountitems == 0){$("#itemnumber").text("Nothing in the folder");}
if(numbercountitems == 1){$("#itemnumber").text(numbercountitems+" Item in the folder");}
else{$("#itemnumber").text(numbercountitems+" Items in the folder");}
}



function generatormenupx(){
$("#imagelist").empty();

$("#imagelist").append($("<div>", {id: "homepx"}).append(

$("<h1>", {class: "title"}).text("Welcome"),

$("<p>", {class: "info"}).text("This is your Chrome Favourites Page"),
$("<p>", {class: "info"}).text("Send your favourite art to the folder \"DevianPlus - FavPage\""),
$("<img>", {id: "devmasc", alt: "devmasc", src: "http://orig11.deviantart.net/9365/f/2009/291/8/3/f_e_l_l_a___deviantart_tour_4_by_greatlp.png"}),

$("<p>", {class: "credits"}).text("Art made by ").append($("<a>", {href: "http://thekidkaos.deviantart.com/art/F-e-l-l-a-DeviantART-Tour-4-140702952", target: "_blank"}).text("thekidKaos"))


))

$("#itemnumber").text("This is the Home Page");

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
$("#imagelist figure").css("display", "");
}
else if(result == ":checked"){
$("#imagelist figure").css("display", "none");
$("#imagelist .artmark").css("display", "");
}
else{
$("#imagelist figure").css("display", "none");
$("#imagelist figure").has(".title a:contains('"+result+"')").css("display", "");
$("#imagelist figure").has(".title a:contains('"+result.toUpperCase()+"')").css("display", "");
$("#imagelist figure").has(".title a:contains('"+result.toLowerCase()+"')").css("display", "");
}

}

$("#search").keyup(function(){searchimages($(this).val());});

// Open Image
function openfolder(idfolder, thishere, loadtypepx){

pagesforsecpg = pagesforsecpgnbx
createdmore = false
$("[id='removefavclick']").off("click");
$("#moreclick, #moreclick2").off("click").remove();
$("#imagelist figure img").off("click", "contextmenu");
$("#imagelist figure .author a").off("contextmenu");
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

var invertimagedetect = false
var backgroundchangedetect = false



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

}

$("#nextimageclickpx").click(function(){nextimagestpx("next");});
$("#previousimageclickpx").click(function(){nextimagestpx("previous");});


function closeimagest(){
detectpageopenx = false

$("#nextimageclickpx, #previousimageclickpx").removeClass("limitpagepx");
document.title = "Devian Plus"

$("body").css("overflow", "").removeClass("imagemodeps");
$("#imgpreview").addClass("anticlick").fadeOut(function(){
$("#imgpreview img").attr("src", "");
});
}

function openimagest(datype, clickdata, thishere){

document.title = clickdata.title+" - Devian Plus"

$("#imgpreview #conteudo, #clickclosepagepxk").off("click");
$("#imgpreview img").off("click").attr("src", "");

if(datype == "photo"){

pageclicknumberp = Number($(thishere).attr("numberpage"))
$("body").css("overflow", "hidden").addClass("imagemodeps");
$("#imgpreview img").attr("src", clickdata.img).click(function(){window.open(clickdata.img, "_blank");});
$("#imgpreview").removeClass("anticlick").fadeIn();
$("#imgpreview #conteudo, #clickclosepagepxk").click(function(){closeimagest();});

}

else if(detectpageopenx == true){
nextimagestpx(typepsxanex, true);
}

else if((datype == "link") || (datype == "rich")){window.open(clickdata.url, "_blank");}

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

$("#defaultfolder").prepend($("<li>", {class: "homefolder"}).append($("<a>", {class: "glyphicon glyphicon-home active"}).text("Home").click(function(){
openfolder(startid, this, "homepage");
})));

$("#openpagefav").text("FOLDER ID: "+startid);
	
}

// New Sub Folder
if(start == "subfolder"){
subcounter = subcounter+1
$("#subfolderpx"+oldfolder).append($("<ul>", {id: "folder"+folderset}));
}

// Criação
function generatordv(thumbdata){

if(thumbdata.img == null){
thumbdata.img = chrome.extension.getURL("images/noimg.png")
thumbdata.height = "200"
}



// Custom Right Click

function addrightclickclass(thishere){
if(thumbdata.rightclicktype == false){}
else{$(thishere).addClass("selectedplusthumbpx");}
}

//None
var customrightclicknope = {
  title: 'None',
  items: [ 

{label:'None', icon:"" , action:function() {}}
  
]}

if(thumbdata.rightclicktype == false){
var customrightclickimg = customrightclicknope
var customrightclickprofile = customrightclicknope
}

else if(thumbdata.rightclicktype == "derpibooru"){
// Image
var customrightclickimg = {
  title: 'Open Image',
  items: [
  
{label:'Page', icon:'https://derpicdn.net/favicon.ico' , action:function() {window.open(thumbdata.url, "_blank")}}
  
]}

//Profile
var customrightclickprofile = {
  title: 'Open Profile',
  items: [

{label:'Custom Icons - Credits', icon:"http://orig09.deviantart.net/209a/f/2016/060/6/8/applications_by_solchu123-d9tl2cg.gif" , action:function() {
window.open("http://solchu123.deviantart.com/gallery/59279676/EMOTICONS", "_blank")
}},
  
null, 
  
{label:'Page', icon:'http://orig03.deviantart.net/5c27/f/2016/073/d/f/bullet_camera_by_solchu123-d9v2xue.gif' , action:function() {window.open(thumbdata.author_url, "_blank")}}
  
]}
}

else if(thumbdata.rightclicktype == "deviantart"){

// Image
var customrightclickimg = {
  title: 'Open Image',
  items: [ 

{label:'Custom Icons - Credits', icon:"http://orig09.deviantart.net/209a/f/2016/060/6/8/applications_by_solchu123-d9tl2cg.gif" , action:function() {
window.open("http://solchu123.deviantart.com/gallery/59279676/EMOTICONS", "_blank")
}},
  
null, 
  
{label:'Page', icon:'http://st.deviantart.net/emoticons/d/dalogo1.gif' , action:function() {window.open(thumbdata.url, "_blank")}},

null, 

{label:'Get Thumb Code', icon:"http://orig15.deviantart.net/c20e/f/2016/068/d/c/badge_plus_more_by_solchu123-d9uiher.gif" , action:function() {
copycodestpx("Thumb Code:",":thumb"+thumbdata.artid+":");
}}
  
]}

//Profile
var customrightclickprofile = {
  title: 'Open Profile',
  items: [

{label:'Custom Icons - Credits', icon:"http://orig09.deviantart.net/209a/f/2016/060/6/8/applications_by_solchu123-d9tl2cg.gif" , action:function() {
window.open("http://solchu123.deviantart.com/gallery/59279676/EMOTICONS", "_blank")
}},
  
null, 
  
{label:'Profile', icon:'http://st.deviantart.net/emoticons/d/dalogo1.gif' , action:function() {window.open(thumbdata.author_url, "_blank")}},
{label:'Gallery', icon:'http://orig09.deviantart.net/48a4/f/2016/070/4/e/binoculars_by_solchu123-d9uqrru.gif' , action:function() {window.open(thumbdata.author_url+"/gallery/", "_blank")} },
{label:'Prints', icon:'http://orig03.deviantart.net/8ff3/f/2016/069/a/e/basket_by_solchu123-d9ulgzd.gif' , action:function() {window.open(thumbdata.author_url+"/prints/", "_blank")} },
{label:'Favourites', icon:'http://st.deviantart.net/emoticons/s/star_full.gif' , action:function() {window.open(thumbdata.author_url+"/favourites/", "_blank")} },
{label:'Journal', icon:'http://orig02.deviantart.net/1750/f/2016/070/6/5/book_by_solchu123-d9uqsap.gif' , action:function() {window.open(thumbdata.author_url+"/journal/", "_blank")} },

null,

{label:'Get Icon Code', icon:"http://orig15.deviantart.net/c20e/f/2016/068/d/c/badge_plus_more_by_solchu123-d9uiher.gif" , action:function() {
copycodestpx("Icon Code:",":icon"+thumbdata.author_name.toLowerCase()+":");
}},

{label:'Get Dev Code', icon:"http://orig15.deviantart.net/c20e/f/2016/068/d/c/badge_plus_more_by_solchu123-d9uiher.gif" , action:function() {
copycodestpx("Dev Code:",":dev"+thumbdata.author_name.toLowerCase()+":");
}}
  
]}

}

//Generator

$("#imagelist figure[folderurl='"+thumbdata.url+"']:empty").append(
$("<div>", {class: "glyphicon glyphicon-remove", id: "removefavclick"}).click(function(){removeimagepxke(this);}),
$("<img>", {title: thumbdata.type, src: thumbdata.img, height: thumbdata.height}).click(function(){openimagest(thumbdata.type, {"url": thumbdata.url, "imgthumb": thumbdata.img, "author_url": thumbdata.author_url, "author_name": thumbdata.author_name, "title": thumbdata.title, "img": thumbdata.realimg}, this);})
.contextPopup(customrightclickimg).contextmenu(function(){addrightclickclass(this);}),
$("<p>", {class: "title"}).append($("<a>", {href: thumbdata.url, target: "_blank"}).text(thumbdata.title), $("<input>", {type: "checkbox", id: "markseck"}).click(function(){markthisobjectart(this);})),
$("<p>", {class: "author"}).text("by ").append($("<a>", {href: thumbdata.author_url, target: "_blank"}).text(thumbdata.author_name)
.contextPopup(customrightclickprofile).contextmenu(function(){addrightclickclass(this);})
),
$("<p>", {class: "provider"}).append($("<a>", {href: thumbdata.provider, target: "_blank"}).text(thumbdata.provider)),
$("<p>", {class: "hideurl"}).text(thumbdata.url)
);
loopcreatordv();
}

//Loop
function loopcreatordv(){
	
// End Load

function updateimagesloadend(){
var numberimgdetectpx = 0
pageclicknumberpmax = 0
$("[id^='objfavit']").each(function(){
numberimgdetectpx = numberimgdetectpx+1
pageclicknumberpmax = pageclicknumberpmax+1
$("#"+$(this).attr("id")+" img").attr("numberpage", numberimgdetectpx)
$("#"+$(this).attr("id")+" #removefavclick, #"+$(this).attr("id")+" #markseck").attr("folderid", $(this).attr("id").replace("objfavit", ""))
if($(this).attr("checkedload") == "true"){$(this).addClass("artmark"); $("#"+$(this).attr("id")+" #markseck").prop("checked", true)}
else{$(this).removeClass("artmark");}
});
}

function endimageload(){if(finalcomplete == true){

pagesforsecpg = pagesforsecpgnbx
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

$("#imagelist").append($("<figure>", {id: "objfavit"+data[artcountpx].id, folderurl:  data[artcountpx].url, checkedload: checkedart}))
}

artcountpx = artcountpx+1

// Create Sub Folder
function subfoldercreate(myfoderid){chrome.bookmarks.getSubTree(myfoderid ,function(foldercfg2){

var subfolderchi = foldercfg2[0].children;
generatorimages(foldercfg2[0].children, subfolderchi.length, "subfolder", foldercfg2[0].id, "subfolderpx"+foldercfg2[0].id, myfoderid);

})}

// New Sub Folder
if(start == "subfolder"){if(urlpage == null){
$("#iconopen"+folderset).addClass("subfolderctpxcf");
$("#folder"+folderset).append($("<li>",{id: "subfolderpx"+data[subfoldernb].id, class: "subfolderkp"+subcounter}).append($("<span>", {class: "glyphicon glyphicon-folder-close", id: "iconopensubfolderpx"+data[subfoldernb].id}).click(function(){openmorefolder("subfolderpx"+data[subfoldernb].id);}), $("<a>").text(data[subfoldernb].title).click(function(){
openfolder(data[subfoldernb].id, this, "folder");
})));

subfoldercreate(data[subfoldernb].id);
loopcreatordv();
}
else{loopcreatordv();}}



// Detect Folder File
if(urlpage == null){
if(start == true){

// New Folder
$("#"+folderset).append($("<li>", {id: "subfolderpx"+data[subfoldernb].id, class: "firstsubfolder"}).append($("<span>", {class: "glyphicon glyphicon-folder-close", id: "iconopensubfolderpx"+data[subfoldernb].id}).click(function(){openmorefolder("subfolderpx"+data[subfoldernb].id);}), $("<a>").text(data[subfoldernb].title).click(function(){
openfolder(data[subfoldernb].id, this, "folder");
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

$("<div>", {id: "moreclick", class: "clickdevart"}).text("More").click(function(){
pagesforsecpg = pagesforsecpg+pagesforsecpgnbx
loopcreatordv();
}),

$("<div>", {id: "moreclick2", class: "clickdevart"}).text("All (Max: 200)").click(function(){
pagesforsecpg = pagesforsecpg+200
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
if((urlpage.indexOf(".deviantart.com") > -1) || (urlpage.startsWith("https://derpibooru.org/")) || (urlpage.startsWith("http://sta.sh/")) || (urlpage.startsWith("https://sta.sh/"))){

var validatorurlda = urlpage

if(validatorurlda.indexOf(".deviantart.com") > -1){
var validatorurlda = validatorurlda.split('.deviantart.com')[0];
var antidaname = validatorurlda.replace("http://" ,"").replace("https://" ,"");
var validatorurlda = validatorurlda+".deviantart.com/";
var validatorurlda = validatorurlda.replace(antidaname, "www");
}

//Validar URL
if((validatorurlda == "http://www.deviantart.com/") || (validatorurlda == "https://www.deviantart.com/") || (urlpage.startsWith("http://fav.me/")) || (urlpage.startsWith("https://fav.me/")) || (urlpage.startsWith("http://sta.sh/")) || (urlpage.startsWith("https://sta.sh/")) || (validatorurlda.startsWith("https://derpibooru.org/"))){


if(artcountpx == maxitem){finalcomplete = true}
else{finalcomplete = false}

if((start == true) || (start == "homepage")){}
else{

if((validatorurlda == "http://www.deviantart.com/") || (validatorurlda == "https://www.deviantart.com/") || (urlpage.startsWith("http://fav.me/")) || (urlpage.startsWith("https://fav.me/")) || (urlpage.startsWith("http://sta.sh/")) || (urlpage.startsWith("https://sta.sh/"))){
$.ajax({cache: false, dataType: "json", url: "http://backend.deviantart.com/oembed?url="+oembed_url})
.done(function(deviantart){

// Validador

var urlinsertxs =  this.url.replace("http://backend.deviantart.com/oembed?url=", "")
var urlinsertxs = urlinsertxs.substring(0, urlinsertxs.lastIndexOf("&_="))

if((urlinsertxs.startsWith("http://sta.sh/")) || (urlinsertxs.startsWith("https://sta.sh/"))){var providerselectda = "http://sta.sh/"}
else{var providerselectda = "http://www.deviantart.com/"}

urldeviantart = urlinsertxs;

if(urldeviantart.indexOf("?q=") > -1){
urldeviantart2pr = urldeviantart.substring(0, urldeviantart.lastIndexOf("?q="))
urldeviantart2 = urldeviantart2pr.slice(-9);
}

else{
urldeviantart2 = urldeviantart.slice(-9);
}

urldeviantart2 = urldeviantart2.replace(/\-/g, "");

if((deviantart.type == "photo") || (deviantart.type == "rich") || (deviantart.type == "link")){generatordv({
"img": deviantart.thumbnail_url, "height": deviantart.thumbnail_height, "url": urlinsertxs, "title": deviantart.title, "author_url": deviantart.author_url, "author_name": deviantart.author_name, "type": deviantart.type, "realimg": deviantart.url, "provider": providerselectda, "artid": urldeviantart2, "rightclicktype": "deviantart"
});}

endimageload();
folderpxsepx = true

})
.fail(function(xhr, responseText){

var urlinsertxs =  this.url.replace("http://backend.deviantart.com/oembed?url=", "")
var urlinsertxs = urlinsertxs.substring(0, urlinsertxs.lastIndexOf("&_="))

generatordv({
"img": chrome.extension.getURL("images/error.png"), "height": "200", "url": urlinsertxs, "title": "URL Load Failed", "author_url": urlinsertxs, "author_name": "", "type": "link", "realimg": urlinsertxs, "provider": "http://www.deviantart.com/"
});

updateimagesloadend();
loopcreatordv();

});
}
	
else if(validatorurlda.startsWith("https://derpibooru.org/")){
$.ajax({cache: false, dataType: "json", url: "https://derpibooru.org/oembed.json?url="+urlpage})
.done(function(derpibooru){

// Validador

var urlinsertxs =  this.url.replace("https://derpibooru.org/oembed.json?url=", "")
var urlinsertxs = urlinsertxs.substring(0, urlinsertxs.lastIndexOf("&_="))

if(derpibooru.type == "photo"){generatordv({
"img": "https://"+derpibooru.thumbnail_url, "height": "", "url": urlinsertxs, "title": "Derpibooru", "author_url": derpibooru.author_url, "author_name": derpibooru.author_name, "type": derpibooru.type, "realimg": "https://"+derpibooru.thumbnail_url, "provider": "https://derpibooru.org/", "artid": false, "rightclicktype": "derpibooru"
});}

endimageload();
folderpxsepx = true

})
.fail(function(xhr, responseText){

var urlinsertxs =  this.url.replace("https://derpibooru.org/oembed.json?url=", "")
var urlinsertxs = urlinsertxs.substring(0, urlinsertxs.lastIndexOf("&_="))

generatordv({
"img": chrome.extension.getURL("images/error.png"), "height": "200", "url": urlinsertxs, "title": "URL Load Failed", "author_url": urlinsertxs, "author_name": "", "type": "link", "realimg": urlinsertxs, "provider": "https://derpibooru.org/"
});

updateimagesloadend();
loopcreatordv();

});
}

}

}
else{loopcreatordv();}
}
else{loopcreatordv();}

}}

}

loopcreatordv();
	
}

// Comando Inicial
generatorimages(foldercfg[0].children, folder.length, true, foldercfg[0].id, "folderlist");















})}

// Start System

function searchfolder(){chrome.bookmarks.search({"title": "DevianPlus - FavPage"}, function(favdata){
if(favdata[0] == null){chrome.bookmarks.create({"parentId": "1", "title": "DevianPlus - FavPage"}, function(){
$("#foldercreatesc").modal();
searchfolder();
})}
else{startfavpage(favdata[0].id);}
})}

searchfolder();

$("#refreshfolderlist").click(function(){location.reload();});






var idfolderpx

// Gerenciador abrir e fechar

function closerecpagespx(exittype){
if(exittype == "normal"){$("#importfavfolder").addClass("anticlick").fadeOut();}
else{
$("#importfavfolder").addClass("anticlick").fadeOut(function(){

});
}}
function openrecpagespx(){$("#importfavfolder").removeClass("anticlick").fadeIn();}



// Atualizar verificador de pastas
function updatepagesforsec(){
$.ajax({cache: false, url: "https://www.deviantart.com/settings/browsing"})
.done(function(data){
loadingset(false);
$("#openimportbtx").val("Import Pages");
var getconfigop = $(data).find(".browse-limit .spacemenus").val();
if(getconfigop == null){pagesforsec = 24}
else{pagesforsec = Number(getconfigop)}
openrecpagespx();
}).fail(function(){
loadingset(false);
$("#openimportbtx").val("ERROR");
})
}

// Sistema pegar pastas 
function recpagespxerk(data){

if(data.intro == "send"){closerecpagespx("normal"); loadingset(true);
devname = data.devname
devpagetype = data.devpagetype
urlfinaldev = data.urlfinaldev
}

if(data.intro == "start"){
$("#openimportbtx").val("Loading...");
loadingset(true);
}

if((data.intro == "start") || (data.intro == "again")){

$("#danamesf").val("")
$("#favtypesf").val("gallery")
$("#favfoldersf").val("")

if(data.intro == "again"){
$("#dasubclosesf").off("click").click(function(){location.reload();})
}

updatepagesforsec();
}

else if((data.intro == "send") || (data.intro == "next")){
var completeurlsx = "?offset="+pagesforsecresult

//Validador Page



// Ajax
$.ajax({cache: false, url: "http://"+devname+".deviantart.com/"+devpagetype+"/"+urlfinaldev+completeurlsx}).done(function(data){
	
var gettitlepage = data.match("<title>(.*?)</title>")[1];
var finddefaultpage = ".folderview-art .torpedo-container .thumb";

// Gerador de favoritos

chrome.bookmarks.search({"title": gettitlepage}, function(detectfolderfavpx){

if(detectfolderfavpx[0] == undefined){
chrome.bookmarks.search({"title": "DevianPlus - FavPage"}, function(favdata){
chrome.bookmarks.create({"parentId": favdata[0].id, "title": gettitlepage}, function(newfavpxsd){
$(data).find(finddefaultpage).each(function(){
var itemselectart = this
chrome.bookmarks.create({"parentId": newfavpxsd.id, "title": $(itemselectart).find(".info .title-wrap .title").text(), "url": $(itemselectart).attr("href")})
})
})
})
}

else{
$(data).find(finddefaultpage).each(function(){
var itemselectart = this
chrome.bookmarks.create({"parentId": detectfolderfavpx[0].id, "title": $(itemselectart).find(".info .title-wrap .title").text(), "url": $(itemselectart).attr("href")})
})
}

})

// Próximo Favorito
if($(data).find(".pagination .pages .next a").attr("class") == "away"){
pagesforsecresult = pagesforsecresult+pagesforsec
recpagespxerk({"intro" :"next"});
}
else{loadingset(false); pagesforsecresult = 0; recpagespxerk({"intro" :"again"}); $("#resultimportpx").text("Your new folder was created with success!");}
})
.fail(function(){$("#resultimportpx").text("Error in the URL was detected!"); loadingset(false); recpagespxerk({"intro" :"again"});})


}}

$("#openimportbtx").click(function(){recpagespxerk({"intro" :"start"});});

$("#dasubmovsf").click(function(){recpagespxerk({"intro" :"send", "devname": $("#danamesf").val(), "devpagetype": $("#favtypesf").val(), "urlfinaldev": $("#favfoldersf").val()});});
$("#dasubclosesf").click(function(){closerecpagespx();});




chrome.extension.onMessage.addListener(function(message,sender,sendResponse){
if(message.text == "updateconfig"){sendResponse({type:"updateconfig2"})

$("#importfavfolder").addClass("hide"); loadingset(true);
	
$.ajax({cache: false, url: "https://www.deviantart.com/settings/browsing"})
.done(function(data){
var getconfigop = $(data).find(".browse-limit .spacemenus").val();
if(getconfigop == null){pagesforsec = 24}
else{pagesforsec = Number(getconfigop)}
$("#importfavfolder").removeClass("hide"); loadingset(false);
})

};});




// Auto Detect URL

function autodetecturlpxs(thishere){if($(thishere).val().indexOf(".deviantart.com") > -1){var validatorurlda = $(thishere).val().split('.deviantart.com')[0];

function removepxsurlk(typeurlfv){

var gepdsdsk1 = $(thishere).val().split('.com/'+typeurlfv+'/')[0] 
var gepdsdsk2 = $(thishere).val().replace(gepdsdsk1, "")
var gepdsdsk3 = gepdsdsk2.replace(".com/"+typeurlfv+"/", "")

var gepdsdsk11 = $(thishere).val().split('?offset=')[0] 
var gepdsdsk22 = $(thishere).val().replace(gepdsdsk11, "")
var gepdsdsk33 = gepdsdsk22.replace("?offset=", "")

$("#favfoldersf").val(gepdsdsk3.replace("?offset="+gepdsdsk33, ""))

$(thishere).val("");

}

$("#danamesf").val(validatorurlda.replace("http://" ,"").replace("https://" ,""));
if($(thishere).val().indexOf(".deviantart.com/favourites") > -1){$("#favtypesf").val("favourites"); removepxsurlk("favourites");}
else if($(thishere).val().indexOf(".deviantart.com/gallery") > -1){$("#favtypesf").val("gallery"); removepxsurlk("gallery");}

}}

$("#daautodetectsf").change(function(){autodetecturlpxs(this);});