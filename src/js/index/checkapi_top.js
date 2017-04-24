// Youtube
var youtubetag = document.createElement('script');
youtubetag.src = "https://www.youtube.com/iframe_api";
var youtubefirstScriptTag = document.getElementsByTagName('script')[0];
youtubefirstScriptTag.parentNode.insertBefore(youtubetag, youtubefirstScriptTag);