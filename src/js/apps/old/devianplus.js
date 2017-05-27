
// Derpibooru
	
else if(validatorurlda.startsWith("https://derpibooru.org/")){
	

// Gallery
	
if(
(urlpage.startsWith("https://derpibooru.org/search?q=faved_by%3A")) || 
(urlpage.startsWith("https://derpibooru.org/search?q=uploader%3A")) || 
(urlpage.startsWith("https://derpibooru.org/search?q=artist%3A")) || 
(urlpage.startsWith("https://derpibooru.org/search?q=my:"))
){

page_web_nav_cache = [];
page_web_nav = 0;
enableurlmode = true;
$("#imagelist").empty();
function sendloadimageda_derp(playimagest){if((playimagest == "send") || (playimagest == "next")){


var completeurlsx = "&page="+Number(pagesforsecresult+1);

//Validador Page

// Ajax
$.ajax({cache: false, url: urlpage+completeurlsx}).done(function(data){

webpagename = $(data).find(".block__header__title").text().split("Showing images ")[0];
webpagename_url = this.url;
var finddefaultpage = ".js-resizable-media-container .media-box .media-box__content .image-container";

// Gerador de favoritos

var numberpageweb = 0;
if(page_web_nav == 0){page_web_nav_cache.push({"title": webpagename, "url": webpagename_url}); page_web_nav = page_web_nav+1;}
page_web_nav_cache.push({"items": []});

$(data).find(finddefaultpage).each(function(){
var itemselectart = this;
numberpageweb = numberpageweb+1;

var fixurl_web = "https://derpibooru.org/";
var fixurl_web2 = "https://";
var urlpage_web = fixurl_web+$(itemselectart).find("a").attr("href");

if(($(itemselectart).attr("data-source-url") != null) && ($(itemselectart).attr("data-source-url") != undefined)){
var sourceurl_web = $(itemselectart).attr("data-source-url");
}
else{var sourceurl_web = urlpage_web;}

var real_webimages_json = JSON.parse($(itemselectart).attr("data-uris"));

if((real_webimages_json.full != undefined) && (real_webimages_json.full != null)){var real_webimages = fixurl_web2+real_webimages_json.full;}
else if((real_webimages_json.tall != undefined) && (real_webimages_json.tall != null)){var real_webimages = fixurl_web2+real_webimages_json.tall;}
else if((real_webimages_json.medium != undefined) && (real_webimages_json.medium != null)){var real_webimages = fixurl_web2+real_webimages_json.medium;}
else if((real_webimages_json.thumb != undefined) && (real_webimages_json.thumb != null)){var real_webimages = fixurl_web2+real_webimages_json.thumb;}
else if((real_webimages_json.thumb_small != undefined) && (real_webimages_json.thumb_small != null)){var real_webimages = fixurl_web2+real_webimages_json.thumb_small;}
else if((real_webimages_json.thumb_tiny != undefined) && (real_webimages_json.thumb_tiny != null)){var real_webimages = fixurl_web2+real_webimages_json.thumb_tiny;}

var real_webimages_tags =  $(itemselectart).attr("data-image-tag-aliases").split(",");


for(i = 0; i < real_webimages_tags.length; i++){
if(real_webimages_tags[i].indexOf("artist:") > -1){var artistname_web = real_webimages_tags[i].replace("artist:", "").replace(/ /g, "");}
if((artistname_web == undefined) || (artistname_web == null)){var artistname_web = "Unknown";}
}

var title_webimage_pre = $(itemselectart).find("a").attr("title").split(" | Tagged:")[0];
var title_webimage = $(itemselectart).find("a").attr("title").replace(title_webimage_pre, "").replace("| Tagged: ", "").replace("| Tagged:", "");

page_web_nav_cache[page_web_nav].items.push({
"img": fixurl_web2+$(itemselectart).find("a img").attr("src"), "height": "auto", "url": urlpage_web, "title": title_webimage.substring(0,35)+"...", "author_url": sourceurl_web, "author_name": artistname_web, "type": "photo", "realimg": real_webimages, "provider": "https://derpibooru.org/", "rightclicktype": "derpibooru", "web": true, "numberpage": numberpageweb
});

});

pageclicknumberpmax = numberpageweb;


// Próximo Favorito
if($(data).find(".pagination .js-next").attr("class") == "js-next"){
pagesforsecresult = pagesforsecresult+1;
page_web_nav = page_web_nav+1;
sendloadimageda_derp("next");
}
else{loadingset(false); pagesforsecresult = 0; web_creatorst();}
})
.fail(function(){loadingset(false); window.open(this.url, "_blank");})


}}

sendloadimageda_derp("send");
	


}