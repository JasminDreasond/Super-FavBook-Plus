/**

 * Super FavBook Plus
 * https://github.com/JasminDreasond/Super-FavBook-Plus
 * By Jasmin Dreasond
 * License : MIT
 
**/

// Youtube
var youtubetag = document.createElement('script');
youtubetag.src = "https://www.youtube.com/iframe_api";
var youtubefirstScriptTag = document.getElementsByTagName('script')[0];
youtubefirstScriptTag.parentNode.insertBefore(youtubetag, youtubefirstScriptTag);