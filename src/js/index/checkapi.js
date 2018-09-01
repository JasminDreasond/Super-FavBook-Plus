/**

 * Super FavBook Plus
 * https://github.com/JasminDreasond/Super-FavBook-Plus
 * By Jasmin Dreasond
 * License : MIT
 
**/

var widgetIframe = document.getElementById('sc-widget'),
    widget = SC.Widget(widgetIframe);

var playyt = false;
var pauseyt = false;
var ytdata = {}
var readyyt = false;
var yt_url = "TIAbeZOdjNc";

// Youtube
var youtubeplayer;

function onYouTubeIframeAPIReady() {
    youtubeplayer = new YT.Player('youtubeplayer', {
        height: '115',
        width: '115',
        videoId: yt_url,
        events: {
            'onReady': function() {
                readyyt = true;
                youtubeplayer.playVideo();
            },
            'onStateChange': function(videostates) {

                $(".youtube #music").attr("href", "https://www.youtube.com/watch?v=" + yt_url);
                ytdata.video_id = videostates.target.j.videoData.video_id
                ytdata.title = videostates.target.j.videoData.title
                ytdata.author = videostates.target.j.videoData.author
                ytdata.getVideoUrl = youtubeplayer.getVideoUrl()
                ytdata.getDuration = youtubeplayer.getDuration()

                //if(youtubeplayer.getPlayerState() == 1){playyt = true; youtubeplayer.pauseVideo();}
                //if(youtubeplayer.getPlayerState() == 2){pauseyt = true;}


                //youtubeplayer.seekTo(0);
                //youtubeplayer.getPlayerState();
                //youtubeplayer.getCurrentTime();
                //youtubeplayer.getDuration()


                //youtubeplayer.setVolume()
                //youtubeplayer.unMute();

                //youtubeplayer.loadVideoById({'videoId': "TIAbeZOdjNc",'suggestedQuality': "large"});




            },
            'onError': function() {}
        }
    });
}

function startcheckpage() {

    var readysd = false;

    var playsd = false;
    var pausesd = false;

    var scdata = {}

    // SoundCloud
    widget.bind(SC.Widget.Events.READY, function() {
        readysd = true;

        widget.load("https://soundcloud.com/jasmindreasond/dubstell-fest", { show_artwork: true, show_comments: false, show_playcount: false, auto_play: true });

        widget.bind(SC.Widget.Events.PLAY, function() {
            playsd = true;
            widget.pause();
            widget.getDuration(function(datadur) {
                scdata.getDuration = datadur
            })
            widget.isPaused(function(datapause) {
                if (datapause == true) { pausesd = true; }
            });
            widget.getCurrentSound(function(datamusic) {
                scdata.artwork_url = datamusic.artwork_url
                scdata.avatar_url = datamusic.user.avatar_url
                scdata.title = datamusic.title
                scdata.username = datamusic.user.username
                scdata.permalink_url = datamusic.permalink_url
            });
        })

        //widget.seekTo(0);
        //widget.bind(SC.Widget.Events.PLAY_PROGRESS, function(){
        //widget.getPosition(function(datapor){});
        //})
        //widget.setVolume();

        //widget.bind(SC.Widget.Events.FINISH, function(){});
        //widget.bind(SC.Widget.Events.ERROR, function(){errormusicst(playlistpxct[pageclicknumberpdss]);})

    });











    var dacheking = {}
    var dbcheking = {}
    var daconnect = false;
    var dbconnect = false;

    $.ajax({ cache: false, dataType: "json", url: "https://backend.deviantart.com/oembed?url=https://www.deviantart.com/jasmindreasond/art/HEEYY-33-648665632" })
        .done(function(deviantart) {

            // Validador

            daconnect = true;
            dacheking.thumbnail_url = deviantart.thumbnail_url
            dacheking.thumbnail_height = deviantart.thumbnail_height
            dacheking.deviantart = deviantart.title
            dacheking.author_url = deviantart.author_url
            dacheking.author_name = deviantart.author_name
            dacheking.type = deviantart.type
            dacheking.url = deviantart.url

        })


    $.ajax({ cache: false, dataType: "json", url: "https://derpibooru.org/oembed.json?url=https://derpibooru.org/1353028" })
        .done(function(derpibooru) {

            // Validador

            dbconnect = true;
            dbcheking.thumbnail_url = derpibooru.thumbnail_url
            dbcheking.author_url = derpibooru.author_url
            dbcheking.author_name = derpibooru.author_name
            dbcheking.type = derpibooru.type
            dbcheking.thumbnail_url = derpibooru.thumbnail_url

        })






    function checkapi() {

        var error_warn = "NOPE";
        var complete_warn = "OK";


        $(".all *").removeClass("complete").removeClass("error");

        if (readysd == false) { $(".soundcloud #connect").text(error_warn).addClass("error"); } else { $(".soundcloud #connect").text(complete_warn).addClass("complete"); }
        if (playsd == false) { $(".soundcloud #play").text(error_warn).addClass("error"); } else { $(".soundcloud #play").text(complete_warn).addClass("complete"); }
        if (pausesd == false) { $(".soundcloud #pause").text(error_warn).addClass("error"); } else { $(".soundcloud #pause").text(complete_warn).addClass("complete"); }
        if ((scdata.artwork_url == "") || (scdata.artwork_url == null)) { $(".soundcloud #artwork_url").text(error_warn).addClass("error"); } else { $(".soundcloud #artwork_url").text(complete_warn).addClass("complete"); }
        if ((scdata.avatar_url == "") || (scdata.avatar_url == null)) { $(".soundcloud #avatar_url").text(error_warn).addClass("error"); } else { $(".soundcloud #avatar_url").text(complete_warn).addClass("complete"); }
        if ((scdata.title == "") || (scdata.title == null)) { $(".soundcloud #title").text(error_warn).addClass("error"); } else { $(".soundcloud #title").text(complete_warn).addClass("complete"); }
        if ((scdata.username == "") || (scdata.username == null)) { $(".soundcloud #username").text(error_warn).addClass("error"); } else { $(".soundcloud #username").text(complete_warn).addClass("complete"); }
        if ((scdata.permalink_url == "") || (scdata.permalink_url == null)) { $(".soundcloud #permalink_url").text(error_warn).addClass("error"); } else { $(".soundcloud #permalink_url").text(complete_warn).addClass("complete"); }
        if ((scdata.getDuration == "") || (scdata.getDuration == null)) { $(".soundcloud #getDuration").text(error_warn).addClass("error"); } else { $(".soundcloud #getDuration").text(complete_warn).addClass("complete"); }





        if (readyyt == false) { $(".youtube #connect").text(error_warn).addClass("error"); } else { $(".youtube #connect").text(complete_warn).addClass("complete"); }
        if (playyt == false) { $(".youtube #play").text(error_warn).addClass("error"); } else { $(".youtube #play").text(complete_warn).addClass("complete"); }
        if (pauseyt == false) { $(".youtube #pause").text(error_warn).addClass("error"); } else { $(".youtube #pause").text(complete_warn).addClass("complete"); }
        if ((ytdata.video_id == "") || (ytdata.video_id == null)) { $(".youtube #video_id").text(error_warn).addClass("error"); } else { $(".youtube #video_id").text(complete_warn).addClass("complete"); }
        if ((ytdata.title == "") || (ytdata.title == null)) { $(".youtube #title").text(error_warn).addClass("error"); } else { $(".youtube #title").text(complete_warn).addClass("complete"); }
        if ((ytdata.author == "") || (ytdata.author == null)) { $(".youtube #author").text(error_warn).addClass("error"); } else { $(".youtube #author").text(complete_warn).addClass("complete"); }
        if ((ytdata.getVideoUrl == "") || (ytdata.getVideoUrl == null)) { $(".youtube #getVideoUrl").text(error_warn).addClass("error"); } else { $(".youtube #getVideoUrl").text(complete_warn).addClass("complete"); }
        if ((ytdata.getDuration == "") || (ytdata.getDuration == null)) { $(".youtube #getDuration").text(error_warn).addClass("error"); } else { $(".youtube #getDuration").text(complete_warn).addClass("complete"); }




        if (daconnect == false) { $(".deviantart #connect").text(error_warn).addClass("error"); } else { $(".deviantart #connect").text(complete_warn).addClass("complete"); }
        if ((dacheking.thumbnail_url == "") || (dacheking.thumbnail_url == null)) { $(".deviantart #thumbnail_url").text(error_warn).addClass("error"); } else { $(".deviantart #thumbnail_url").text(complete_warn).addClass("complete"); }
        if ((dacheking.thumbnail_height == "") || (dacheking.thumbnail_height == null)) { $(".deviantart #thumbnail_height").text(error_warn).addClass("error"); } else { $(".deviantart #thumbnail_height").text(complete_warn).addClass("complete"); }
        if ((dacheking.deviantart == "deviantart") || (dacheking.deviantart == null)) { $(".deviantart #deviantart").text(error_warn).addClass("error"); } else { $(".deviantart #deviantart").text(complete_warn).addClass("complete"); }
        if ((dacheking.author_url == "") || (dacheking.author_url == null)) { $(".deviantart #author_url").text(error_warn).addClass("error"); } else { $(".deviantart #author_url").text(complete_warn).addClass("complete"); }
        if ((dacheking.author_name == "") || (dacheking.author_name == null)) { $(".deviantart #author_name").text(error_warn).addClass("error"); } else { $(".deviantart #author_name").text(complete_warn).addClass("complete"); }
        if ((dacheking.type == "") || (dacheking.type == null)) { $(".deviantart #type").text(error_warn).addClass("error"); } else { $(".deviantart #type").text(complete_warn).addClass("complete"); }
        if ((dacheking.url == "") || (dacheking.url == null)) { $(".deviantart #url").text(error_warn).addClass("error"); } else { $(".deviantart #url").text(complete_warn).addClass("complete"); }



        if (dbconnect == false) { $(".derpibooru #connect").text(error_warn).addClass("error"); } else { $(".derpibooru #connect").text(complete_warn).addClass("complete"); }
        if ((dbcheking.thumbnail_url == "") || (dbcheking.thumbnail_url == null)) { $(".derpibooru #thumbnail_url").text(error_warn).addClass("error"); } else { $(".derpibooru #thumbnail_url").text(complete_warn).addClass("complete"); }
        if ((dbcheking.author_url == "") || (dbcheking.author_url == null)) { $(".derpibooru #author_url").text(error_warn).addClass("error"); } else { $(".derpibooru #author_url").text(complete_warn).addClass("complete"); }
        if ((dbcheking.author_name == "") || (dbcheking.author_name == null)) { $(".derpibooru #author_name").text(error_warn).addClass("error"); } else { $(".derpibooru #author_name").text(complete_warn).addClass("complete"); }
        if ((dbcheking.type == "") || (dbcheking.type == null)) { $(".derpibooru #type").text(error_warn).addClass("error"); } else { $(".derpibooru #type").text(complete_warn).addClass("complete"); }
        if ((dbcheking.thumbnail_url == "") || (dbcheking.thumbnail_url == null)) { $(".derpibooru #thumbnail_url").text(error_warn).addClass("error"); } else { $(".derpibooru #thumbnail_url").text(complete_warn).addClass("complete"); }

    }


    // VALIDATOR

    setInterval(function() { checkapi(); }, 100)






}

startcheckpage();