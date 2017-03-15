// Youtube
var youtubetag = document.createElement('script');
youtubetag.src = "/js/api/youtube/api.js";
var youtubefirstScriptTag = document.getElementsByTagName('script')[0];
youtubefirstScriptTag.parentNode.insertBefore(youtubetag, youtubefirstScriptTag);