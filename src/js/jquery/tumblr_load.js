/**

 * https://github.com/JasminDreasond/Super-FavBook-Plus
 * Version : 1.0
 * By Jasmin Dreasond
 * License : MIT

 * Tumblr jQuery
 * Dependencies: Bootstrap 3 | jQuery 3.2.0
 * Alpha Version
 * Primeiras Páginas Bugadas
 
 
 
 Example:
 
WARNING: WORK ONLY WITH ID!
 
$("#example").tumblr(
{

'id': 'jasmindreasond', // Blog Username
'page': 0, // Page (0 = Page 1)
'type': 'tags', // Enable Tag Search
'tag': 'jackie' // Search this tag

},{

'window_mode': false, // Window Mode

'title_blog': true, // Blog Title
'description_blog': true, // Blog Description

'custom_title_blog': '', // Custom Blog Title
'custom_description_blog': '', // Custom Blog Description

'disable_tag': true, // Enable Remove Tag
'force_disable_tag': false, // Force Remove Tag

'info': true, // Post Info
'like': true, // Post Like
'reblog': true, // Post Reblog
'date': true, // Post Date
'tags': true, // Post Tags

'music': true, // Disable Music Content
'photo': true, // Disable Photo Content
'link': true, // Disable Link Content
'video': true, // Disable Video Content

'limit': 0, // Post Limit per page (Max: 20)
'next': true, // Post Next and Previous
'next_top': 0, // Append in || 0 - Bottom Page || 1 - Top and Bottom Page || 2 - Top Page
'pagination': 4, // Number of pagination (Max: 4)

'scroll': true, // Enable Auto Scroll
'scroll_item': 'auto_tumblr', // Auto Scroll Target (Default: Tumblr Page)
'scroll_item_vel': 'fast', // Scroll Velocity

'scroll_page': true, // Auto Scroll Tumblr Page
'scroll_page_vel': 'fast', // Scroll Tumblr Page Velocity

'disable_photo': false, // Disable Photo Post
'disable_video': false, // Disable Video Post
'disable_link': false, // Disable link Post
'disable_audio': false, // Disable Audio Post
'disable_regular': false, // Disable Regular Post
'disable_quote': false,  // Disable Quote Post
'disable_conversation': false // Disable Conversation Post

});





 Example 2:

$("#example").tumblr({'id': 'jasmindreasond'});
$("#example").tumblr({'id': 'jasmindreasond'}, {'scroll': false});






 */

// Vars
var tumblr_show;
var limit_tumblr_load;


// Start
function systemgentumblrpek(data, thishere, data2, data3, data4, antiscroll, newtagst) {

    // Config

    data2.items = 20;
    var tagselectedtumblr = '';
    if ((data.type == "tags") || (newtagst != null)) {
        var systemtumblrused = "&tagged=";
        if (newtagst != null) { var tagselectedtumblr = newtagst; } else {
            var tagselectedtumblr = data.tag;
            newtagst = data.tag;
        }
    } else { systemtumblrused = ''; }

    if (data4 != null) { data.page = data4; }

    if (data.page == null) { data.page = 0; }
    if (data.page > 0) {
        if (data2.limit > 0) { var load_tumblr_lm = data2.limit; } else if ((data2.limit > 20) || (data2.limit == null) || (data2.limit == 0) || (data2.limit == undefined) || (isNaN(data2.limit) == true)) { var load_tumblr_lm = 20; }
        if (data2.items > load_tumblr_lm) { tumblr_page = load_tumblr_lm * data.page; } else { tumblr_page = data2.items * data.page; }
    } else { tumblr_page = 0; }
    var tumblr_page_s = '&start=';


    var blogselected = data.id;


    // Load
    $.ajax({ cache: false, dataType: "json", url: "https://" + blogselected + ".tumblr.com/api/read/json?callback=?" + systemtumblrused + tagselectedtumblr + tumblr_page_s + tumblr_page })
        .done(function(tumblr) {
            if (($(this).attr("id") != null) || ($(this).attr("id") != undefined) || ($(this).attr("id") != '')) {

                // No Post
                var tumblr_no_post = false;

                // Load Page Disable Click

                var load_tumblr_disable_click = function() {
                    $('#' + $(thishere).attr('id') + ' [class*="tumblr_next_sts"], #' + $(thishere).attr('id') + ' .tumblr_tags, #' + $(thishere).attr('id') + ' .tumblr_remove_tag').addClass('tumblr_load_pagination');
                }

                // Base
                if (data2.window_mode == true) { var enable_window_tumblr_st = 'tumblr_window_mode'; } else { var enable_window_tumblr_st = ''; }
                $(thishere).empty().addClass("tumblr_base").append($("<div>", { class: "tumblr_head_page" }), $("<div>", { class: "tumblr_top_next_page" }),
                    $("<div>", { class: enable_window_tumblr_st }).append($("<div>", { class: "tumblr_posts" })));

                //Blog Title
                if (data2.title_blog == true) {
                    if (data2.custom_title_blog == '') { data2.custom_title_blog = tumblr.tumblelog.title + " - " + chrome.i18n.getMessage("tumblr"); }
                    $('#' + $(thishere).attr('id') + " .tumblr_head_page").append($("<h1>", { class: "tumblr_title_page" }).append($("<a>", { href: "https://" + tumblr.tumblelog.name + ".tumblr.com/", target: "_blank" }).text(data2.custom_title_blog)));
                }

                // Blog Description
                if (data2.description_blog == true) {
                    if (data2.custom_description_blog == '') { data2.custom_description_blog = tumblr.tumblelog.description; }
                    $('#' + $(thishere).attr('id') + " .tumblr_head_page").append($("<h3>", { class: "tumblr_description_page" }).text(data2.custom_description_blog));
                }

                // Disable Tag
                if (data2.disable_tag == true) {
                    if ((newtagst != null) && (newtagst != undefined) && (newtagst != '')) {

                        if ((data.type != "tags") || (data2.force_disable_tag == true)) {
                            $('#' + $(thishere).attr('id') + " .tumblr_head_page").append($("<h3>", { class: "tumblr_remove_tag" }).append(
                                $("<button>", { type: "button", class: "btn btn-default" }).text(chrome.i18n.getMessage("tumblr_removetag") + ": ").append($("<strong>").text(decodeURIComponent(newtagst))).click(function() {
                                    load_tumblr_disable_click();
                                    $(thishere).tumblr(data, data2, true, 0, antiscroll, '')
                                })
                            ));
                        }

                    }
                }

                // Blog Clear
                if ((data2.title_blog == false) && (data2.description_blog == false)) { $('#' + $(thishere).attr('id') + " .tumblr_head_page").addClass('hide'); }

                // Load Posts
                if (tumblr.posts.length > 0) {
                    if (data2.limit <= 0) { limit_tumblr_load = tumblr.posts.length; } else { limit_tumblr_load = data2.limit; }
                    for (numberpost = 0; numberpost < limit_tumblr_load; numberpost++) {
                        if (tumblr.posts[numberpost] != undefined) {

                            // Disable Posts
                            if (data2.info == false) {
                                tumblr.posts[numberpost]["photo-caption"] = '';
                                tumblr.posts[numberpost]["video-caption"] = '';
                                tumblr.posts[numberpost]["audio-caption"] = '';
                                tumblr.posts[numberpost]["regular-body"] = '';
                                tumblr.posts[numberpost]["link-description"] = '';
                                tumblr.posts[numberpost]["quote-source"] = '';
                                tumblr.posts[numberpost]["conversation"] = {};
                                antiinfotmb = 'hide';
                            } else {
                                tumblr.posts[numberpost]["quote-source"] = "— " + tumblr.posts[numberpost]["quote-source"];
                                antiinfotmb = '';
                            }
                            if (data2.like == false) {
                                tumblr.posts[numberpost]["like-button"] = '';
                                antliketmb = 'hide';
                            } else { antliketmb = ''; }
                            if (data2.reblog == false) {
                                tumblr.posts[numberpost]["reblog-button"] = '';
                                antreblogtmb = 'hide';
                            } else { antreblogtmb = ''; }
                            if ((data2.like == false) && (data2.reblog == false)) { antsharetmb = 'hide'; } else { antsharetmb = ''; }
                            if (data2.date == false) {
                                tumblr.posts[numberpost].date = '';
                                antdatetmb = 'hide';
                            } else { antdatetmb = ''; }
                            if (data2.music == false) {
                                tumblr.posts[numberpost]["audio-player"] = '';
                                antmusictmb = 'hide';
                            } else { antmusictmb = ''; }
                            if (data2.photo == false) {
                                tumblr.posts[numberpost]["photo-url-1280"] = '';
                                antiimgtmb = 'hide';
                            } else { antiimgtmb = ''; }
                            if (data2.link == false) {
                                tumblr.posts[numberpost]["link-url"] = '';
                                antilinktmb = 'hide';
                            } else { antilinktmb = ''; }
                            if (data2.video == false) {
                                tumblr.posts[numberpost]["video-player"] = '';
                                antivideotmb = 'hide';
                            } else { antivideotmb = ''; }
                            if (data2.tags == false) {
                                tagtumblr = '';
                                anttagstmb = 'hide';
                            } else {
                                // Load Tags
                                anttagstmb = '';
                                var tagtumblr = [];

                                if ((data.type == "tags") && (data2.force_disable_tag == false)) { var tumblr_click_tagspk = function(thisclick) { window.open($(thisclick).attr('the_href'), '_blank'); } } else {
                                    var tumblr_click_tagspk = function(thisclick) {
                                        load_tumblr_disable_click();
                                        $(thishere).tumblr(data, data2, true, 0, antiscroll, $(thisclick).attr('tumblr_tag'));
                                    }
                                }

                                if (tumblr.posts[numberpost].tags != undefined) {
                                    for (tagnumber = 0; tagnumber < tumblr.posts[numberpost].tags.length; tagnumber++) {
                                        tagtumblr.push($("<a>", { 'the_href': "https://" + tumblr.tumblelog.name + ".tumblr.com/tagged/" + encodeURI(tumblr.posts[numberpost].tags[tagnumber]), target: "_blank", 'tumblr_tag': encodeURI(tumblr.posts[numberpost].tags[tagnumber]) }).text("#" + tumblr.posts[numberpost].tags[tagnumber])
                                            .click(function() { tumblr_click_tagspk(this); })
                                            .contextmenu(function() { window.open($(this).attr('the_href'), '_blank'); })
                                        );
                                    }
                                }
                            }

                            // Disable all
                            if ((data2.info == false) && (data2.like == false) && (data2.reblog == false) && (data2.like == false) && (data2.date == false) && (data2.music == false) && (data2.photo == false) && (data2.link == false) && (data2.video == false) && (data2.tags == false)) { newtitlecss = 'tumblr_hideall_config'; } else { newtitlecss = ''; }

                            // Photo
                            if (tumblr.posts[numberpost].type == "photo") {
                                if (data2.disable_photo != true) {
                                    $('#' + $(thishere).attr('id') + " .tumblr_posts").append(
                                        $("<div>", { class: "tumblr_post" }).append(

                                            $("<div>", { class: "tumblr_url_title" }).append($("<a>", { href: tumblr.posts[numberpost].url, target: "_blank" }).text(chrome.i18n.getMessage("tumblr_postdefaultname"))),
                                            $("<div>", { class: "tumblr_url_title_url " + newtitlecss }).append($("<a>", { href: tumblr.posts[numberpost].url, target: "_blank" }).text(tumblr.posts[numberpost].url)),

                                            $("<div>", { class: "tumblr_img " + antiimgtmb }).append($("<a>", { href: "https://" + tumblr.tumblelog.name + ".tumblr.com/image/" + tumblr.posts[numberpost].id, target: "_blank" }).append($("<img>", { alt: "img_tumblr", src: tumblr.posts[numberpost]["photo-url-1280"] }))),
                                            $("<div>", { class: "tumblr_info " + antiinfotmb }).html(tumblr.posts[numberpost]["photo-caption"]),

                                            $("<div>", { class: "tumblr_share " + antsharetmb }).append($("<div>", { class: antliketmb }).append(tumblr.posts[numberpost]["like-button"])).append($("<div>", { class: antreblogtmb }).append(tumblr.posts[numberpost]["reblog-button"])),

                                            $("<div>", { class: "tumblr_tags " + antdatetmb }).html(tagtumblr),
                                            $("<div>", { class: "tumblr_time " + antdatetmb }).html(tumblr.posts[numberpost].date)

                                        ));
                                }
                            }

                            // Video
                            else if (tumblr.posts[numberpost].type == "video") {
                                if (data2.disable_video != true) {
                                    $('#' + $(thishere).attr('id') + " .tumblr_posts").append(
                                        $("<div>", { class: "tumblr_post" }).append(

                                            $("<div>", { class: "tumblr_url_title" }).append($("<a>", { href: tumblr.posts[numberpost].url, target: "_blank" }).text(chrome.i18n.getMessage("tumblr_postdefaultname"))),
                                            $("<div>", { class: "tumblr_url_title_url " + newtitlecss }).append($("<a>", { href: tumblr.posts[numberpost].url, target: "_blank" }).text(tumblr.posts[numberpost].url)),

                                            $("<div>", { class: "tumblr_video " + antivideotmb }).html(tumblr.posts[numberpost]["video-player"]),
                                            $("<div>", { class: "tumblr_info " + antiinfotmb }).html(tumblr.posts[numberpost]["video-caption"]),

                                            $("<div>", { class: "tumblr_share " + antsharetmb }).append($("<div>", { class: antliketmb }).append(tumblr.posts[numberpost]["like-button"])).append($("<div>", { class: antreblogtmb }).append(tumblr.posts[numberpost]["reblog-button"])),

                                            $("<div>", { class: "tumblr_tags " + antdatetmb }).html(tagtumblr),
                                            $("<div>", { class: "tumblr_time " + antdatetmb }).html(tumblr.posts[numberpost].date)

                                        ));
                                }
                            }

                            // Audio
                            else if (tumblr.posts[numberpost].type == "audio") {
                                if (data2.disable_audio != true) {
                                    $('#' + $(thishere).attr('id') + " .tumblr_posts").append(
                                        $("<div>", { class: "tumblr_post" }).append(

                                            $("<div>", { class: "tumblr_url_title" }).append($("<a>", { href: tumblr.posts[numberpost].url, target: "_blank" }).text(chrome.i18n.getMessage("tumblr_postdefaultname"))),
                                            $("<div>", { class: "tumblr_url_title_url " + newtitlecss }).append($("<a>", { href: tumblr.posts[numberpost].url, target: "_blank" }).text(tumblr.posts[numberpost].url)),

                                            $("<div>", { class: "tumblr_audio " + antmusictmb }).html(tumblr.posts[numberpost]["audio-player"]),
                                            $("<div>", { class: "tumblr_info " + antiinfotmb }).html(tumblr.posts[numberpost]["audio-caption"]),

                                            $("<div>", { class: "tumblr_share " + antsharetmb }).append($("<div>", { class: antliketmb }).append(tumblr.posts[numberpost]["like-button"])).append($("<div>", { class: antreblogtmb }).append(tumblr.posts[numberpost]["reblog-button"])),

                                            $("<div>", { class: "tumblr_tags " + antdatetmb }).html(tagtumblr),
                                            $("<div>", { class: "tumblr_time " + antdatetmb }).html(tumblr.posts[numberpost].date)

                                        ));
                                }
                            }

                            // Regular
                            else if (tumblr.posts[numberpost].type == "regular") {
                                if (data2.disable_regular != true) {
                                    if (tumblr.posts[numberpost]["regular-title"] == "") { var titlest = chrome.i18n.getMessage("tumblr_postdefaultname"); } else { var titlest = tumblr.posts[numberpost]["regular-title"]; }
                                    $('#' + $(thishere).attr('id') + " .tumblr_posts").append(
                                        $("<div>", { class: "tumblr_post" }).append(

                                            $("<div>", { class: "tumblr_url_title" }).append($("<a>", { href: tumblr.posts[numberpost].url, target: "_blank" }).text(titlest)),
                                            $("<div>", { class: "tumblr_url_title_url " + newtitlecss }).append($("<a>", { href: tumblr.posts[numberpost].url, target: "_blank" }).text(tumblr.posts[numberpost].url)),

                                            $("<div>", { class: "tumblr_info " + antiinfotmb }).html(tumblr.posts[numberpost]["regular-body"]),

                                            $("<div>", { class: "tumblr_share " + antsharetmb }).append($("<div>", { class: antliketmb }).append(tumblr.posts[numberpost]["like-button"])).append($("<div>", { class: antreblogtmb }).append(tumblr.posts[numberpost]["reblog-button"])),

                                            $("<div>", { class: "tumblr_tags " + antdatetmb }).html(tagtumblr),
                                            $("<div>", { class: "tumblr_time " + antdatetmb }).html(tumblr.posts[numberpost].date)

                                        ));
                                }
                            }

                            // Link
                            else if (tumblr.posts[numberpost].type == "link") {
                                if (data2.disable_link != true) {
                                    if (tumblr.posts[numberpost]["link-text"] == "") { var titlest = chrome.i18n.getMessage("tumblr_postdefaultname"); } else { var titlest = tumblr.posts[numberpost]["link-text"] + " >"; }
                                    $('#' + $(thishere).attr('id') + " .tumblr_posts").append(
                                        $("<div>", { class: "tumblr_post" }).append(

                                            $("<div>", { class: "tumblr_url_title" }).append($("<a>", { href: tumblr.posts[numberpost].url, target: "_blank" }).text(titlest)),
                                            $("<div>", { class: "tumblr_url_title_url " + newtitlecss }).append($("<a>", { href: tumblr.posts[numberpost].url, target: "_blank" }).text(tumblr.posts[numberpost].url)),

                                            $("<div>", { class: "tumblr_url " + antilinktmb }).append($("<a>", { href: tumblr.posts[numberpost]["link-url"], target: "_blank" }).text(tumblr.posts[numberpost]["link-url"])),
                                            $("<div>", { class: "tumblr_info " + antiinfotmb }).append(tumblr.posts[numberpost]["link-description"]),

                                            $("<div>", { class: "tumblr_share " + antsharetmb }).append($("<div>", { class: antliketmb }).append(tumblr.posts[numberpost]["like-button"])).append($("<div>", { class: antreblogtmb }).append(tumblr.posts[numberpost]["reblog-button"])),

                                            $("<div>", { class: "tumblr_tags " + antdatetmb }).html(tagtumblr),
                                            $("<div>", { class: "tumblr_time " + antdatetmb }).html(tumblr.posts[numberpost].date)

                                        ));
                                }
                            }

                            // Quote
                            else if (tumblr.posts[numberpost].type == "quote") {
                                if (data2.disable_quote != true) {
                                    if (tumblr.posts[numberpost]["quote-text"] == "") { var titlest = chrome.i18n.getMessage("tumblr_postdefaultname"); } else { var titlest = tumblr.posts[numberpost]["quote-text"]; }
                                    $('#' + $(thishere).attr('id') + " .tumblr_posts").append(
                                        $("<div>", { class: "tumblr_post" }).append(

                                            $("<div>", { class: "tumblr_url_title " + newtitlecss }).append($("<a>", { href: tumblr.posts[numberpost].url, target: "_blank" }).text('"' + titlest + '"')),

                                            $("<div>", { class: "tumblr_info " + antiinfotmb }).text(tumblr.posts[numberpost]["quote-source"]),

                                            $("<div>", { class: "tumblr_share " + antsharetmb }).append($("<div>", { class: antliketmb }).append(tumblr.posts[numberpost]["like-button"])).append($("<div>", { class: antreblogtmb }).append(tumblr.posts[numberpost]["reblog-button"])),

                                            $("<div>", { class: "tumblr_tags " + antdatetmb }).html(tagtumblr),
                                            $("<div>", { class: "tumblr_time " + antdatetmb }).html(tumblr.posts[numberpost].date)

                                        ));
                                }
                            }

                            // Conversation
                            else if (tumblr.posts[numberpost].type == "conversation") {
                                if (data2.disable_conversation != true) {
                                    if (tumblr.posts[numberpost]["conversation-title"] == "") { var titlest = chrome.i18n.getMessage("tumblr_postdefaultname"); } else { var titlest = tumblr.posts[numberpost]["conversation-title"]; }

                                    var conversationcontent = [];
                                    for (conversationnb = 0; conversationnb < tumblr.posts[numberpost]["conversation"].length; conversationnb++) {

                                        conversationcontent.push(
                                            $("<tr>").append($("<td>", { class: "tumblr_c_t" }).text(tumblr.posts[numberpost]["conversation"][conversationnb].label), $("<td>", { class: "tumblr_c_r" }).text(tumblr.posts[numberpost]["conversation"][conversationnb].phrase))
                                        );

                                    }

                                    $('#' + $(thishere).attr('id') + " .tumblr_posts").append(
                                        $("<div>", { class: "tumblr_post" }).append(

                                            $("<div>", { class: "tumblr_url_title" }).append($("<a>", { href: tumblr.posts[numberpost].url, target: "_blank" }).text(titlest)),
                                            $("<div>", { class: "tumblr_url_title_url " + newtitlecss }).append($("<a>", { href: tumblr.posts[numberpost].url, target: "_blank" }).text(tumblr.posts[numberpost].url)),

                                            $("<table>", { class: "tumblr_conversation" }).html(conversationcontent),

                                            $("<div>", { class: "tumblr_share " + antsharetmb }).append($("<div>", { class: antliketmb }).append(tumblr.posts[numberpost]["like-button"])).append($("<div>", { class: antreblogtmb }).append(tumblr.posts[numberpost]["reblog-button"])),

                                            $("<div>", { class: "tumblr_tags " + antdatetmb }).html(tagtumblr),
                                            $("<div>", { class: "tumblr_time " + antdatetmb }).html(tumblr.posts[numberpost].date)

                                        ));
                                }
                            }





                        }
                    }
                }

                // 0 Posts
                else {
                    $('#' + $(thishere).attr('id') + " .tumblr_posts").append($("<div>", { class: "tumblr_not_result" }).append($("<strong>").text(chrome.i18n.getMessage("tumblr_noneposts"))));
                    var tumblr_no_post = true;
                }



                if (data2.limit > 0) { var load_tumblr_lm = data2.limit; } else if ((data2.limit > 20) || (data2.limit == null) || (data2.limit == 0) || (data2.limit == undefined) || (isNaN(data2.limit) == true)) { var load_tumblr_lm = 20; }

                // Numbers Page
                if (tumblr["posts-total"] > load_tumblr_lm) { tumblr_pages_count_br = Math.ceil(tumblr["posts-total"] / load_tumblr_lm); } else { tumblr_pages_count_br = 1; }

                // Click Next
                var tumblr_next_page = function(antiscroll, numberpagepk) {
                    load_tumblr_disable_click();
                    $(thishere).tumblr(data, data2, true, numberpagepk, antiscroll, newtagst);
                }



                // Pages System
                if ((data2.next == true) && (tumblr_no_post == false)) {

                    var tumblr_next_st = [];


                    // Previous

                    if (data.page > 0) { var anti_tumblr_prev = ''; } else { var anti_tumblr_prev = 'tumblr_anti_pagination'; }
                    tumblr_next_st.push(
                        $("<li>", { class: "tumblr_previous " + anti_tumblr_prev }).append($("<a>", { type: "button", "aria-label": "Previous" }).append($("<span>", { "aria-hidden": true }).text('«')).click(function() { tumblr_next_page(false, data.page - 1); }).contextmenu(function() { tumblr_next_page(true, data.page - 1); return false; }))
                    );


                    // Numbers Page

                    var number_tumblr_page_st = function(number_next_t, type_aenx) {

                        if (type_aenx == "next") {
                            tumblr_next_st.push($("<li>", { class: "tumblr_pagination", number_next: number_next_t, type_np: type_aenx }).append($("<a>").text(data.page + 1 + number_next_t)).click(function() { tumblr_next_page(false, data.page + number_next_t); }).contextmenu(function() { tumblr_next_page(true, data.page + number_next_t); return false; }));
                        } else if (type_aenx == "previous") {
                            tumblr_next_st.push($("<li>", { class: "tumblr_pagination", number_next: number_next_t, type_np: type_aenx }).append($("<a>").text(data.page + 1 - number_next_t)).click(function() { tumblr_next_page(false, data.page - number_next_t); }).contextmenu(function() { tumblr_next_page(true, data.page - number_next_t); return false; }));
                        }

                    }


                    var numbert_tumblr_page_px = function(number_next_t, type_aenx, specialnumber1, specialnumber2) {
                        if (data2.pagination == specialnumber1) {
                            if (data.page + 1 < specialnumber2 - data2.pagination) {
                                number_tumblr_page_st(number_next_t, type_aenx);
                            }
                        } else { number_tumblr_page_st(number_next_t, type_aenx); }
                    }



                    //////////////////////////////////////////////////////

                    if (data.page + 1 > data2.pagination + 1) { tumblr_next_st.push($("<li>", { class: "tumblr_pagination", special_next: "previous" }).append($("<a>").text(1)).click(function() { tumblr_next_page(false, 0); }).contextmenu(function() { tumblr_next_page(true, 0); return false; })); }

                    //////////////////////////////////////////////////////


                    if ((data2.pagination >= 4) && (tumblr_pages_count_br <= data.page + 4) && (data.page + 1 - 4 > 4)) {
                        if ((data2.pagination == 4) && (data.page + 1 == tumblr_pages_count_br)) { number_tumblr_page_st(11 - data2.pagination, "previous"); } else if ((data2.pagination == 4) && (data.page + 2 == tumblr_pages_count_br)) { number_tumblr_page_st(10 - data2.pagination, "previous"); } else if ((data2.pagination == 4) && (data.page + 3 == tumblr_pages_count_br)) { number_tumblr_page_st(9 - data2.pagination, "previous"); } else if ((data2.pagination == 4) && (data.page + 4 == tumblr_pages_count_br)) { number_tumblr_page_st(8 - data2.pagination, "previous"); } else { number_tumblr_page_st(8 - data2.pagination, "previous"); }
                    }





                    if ((data2.pagination >= 3) && (tumblr_pages_count_br <= data.page + 3) && (data.page + 1 - 3 > 3)) {
                        if ((data2.pagination == 3) && (data.page + 1 == tumblr_pages_count_br)) { number_tumblr_page_st(8 - data2.pagination, "previous"); } else if ((data2.pagination == 3) && (data.page + 2 == tumblr_pages_count_br)) { number_tumblr_page_st(7 - data2.pagination, "previous"); } else if ((data2.pagination == 3) && (data.page + 3 == tumblr_pages_count_br)) { number_tumblr_page_st(6 - data2.pagination, "previous"); } else if ((data2.pagination == 4) && (data.page + 1 == tumblr_pages_count_br)) { number_tumblr_page_st(10 - data2.pagination, "previous"); } else if ((data2.pagination == 4) && (data.page + 2 == tumblr_pages_count_br)) { number_tumblr_page_st(9 - data2.pagination, "previous"); } else if ((data2.pagination == 4) && (data.page + 3 == tumblr_pages_count_br)) { number_tumblr_page_st(8 - data2.pagination, "previous"); } else { number_tumblr_page_st(7 - data2.pagination, "previous"); }
                    }




                    if ((data2.pagination >= 2) && (tumblr_pages_count_br <= data.page + 2) && (data.page + 1 - 2 > 2)) {
                        if ((data2.pagination == 2) && (data.page + 1 == tumblr_pages_count_br)) { number_tumblr_page_st(5 - data2.pagination, "previous"); } else if ((data2.pagination == 2) && (data.page + 2 == tumblr_pages_count_br)) { number_tumblr_page_st(4 - data2.pagination, "previous"); } else if ((data2.pagination == 3) && (data.page + 1 == tumblr_pages_count_br)) { number_tumblr_page_st(7 - data2.pagination, "previous"); } else if ((data2.pagination == 4) && (data.page + 1 == tumblr_pages_count_br)) { number_tumblr_page_st(9 - data2.pagination, "previous"); } else if ((data2.pagination == 4) && (data.page + 2 == tumblr_pages_count_br)) { number_tumblr_page_st(8 - data2.pagination, "previous"); } else { number_tumblr_page_st(6 - data2.pagination, "previous"); }
                    }




                    if ((data2.pagination >= 1) && (tumblr_pages_count_br <= data.page + 1) && (data.page + 1 - 1 > 1)) {
                        if ((data2.pagination == 1) && (data.page + 1 == tumblr_pages_count_br)) { number_tumblr_page_st(2 - data2.pagination, "previous"); } else if ((data2.pagination == 2) && (data.page + 1 == tumblr_pages_count_br)) { number_tumblr_page_st(4 - data2.pagination, "previous"); } else if ((data2.pagination == 3) && (data.page + 1 == tumblr_pages_count_br)) { number_tumblr_page_st(6 - data2.pagination, "previous"); } else if ((data2.pagination == 4) && (data.page + 1 == tumblr_pages_count_br)) { number_tumblr_page_st(8 - data2.pagination, "previous"); } else { number_tumblr_page_st(5 - data2.pagination, "previous"); }
                    }


                    //////////////////////////////////////////////////////

                    if ((data2.pagination >= 4) && (data.page + 1 - 4 > 0)) { numbert_tumblr_page_px(4, "previous", 4, 10); }
                    if ((data2.pagination >= 3) && (data.page + 1 - 3 > 0)) { numbert_tumblr_page_px(3, "previous", 3, 8); }
                    if ((data2.pagination >= 2) && (data.page + 1 - 2 > 0)) { numbert_tumblr_page_px(2, "previous", 2, 6); }
                    if ((data2.pagination >= 1) && (data.page + 1 - 1 > 0)) { numbert_tumblr_page_px(1, "previous", 1, 4); }

                    //////////////////////////////////////////////////////

                    tumblr_next_st.push($("<li>", { class: "tumblr_pagination active" }).append($("<a>").text(data.page + 1)));

                    //////////////////////////////////////////////////////

                    if ((data2.pagination >= 1) &&
                        (tumblr_pages_count_br >= 2) && (data.page + 1 + 1 < tumblr_pages_count_br)) { numbert_tumblr_page_px(1, "next", 1, 3); }

                    if ((data2.pagination >= 2) &&
                        (tumblr_pages_count_br >= 3) && (data.page + 1 + 2 < tumblr_pages_count_br)) { numbert_tumblr_page_px(2, "next", 2, 5); }

                    if ((data2.pagination >= 3) &&
                        (tumblr_pages_count_br >= 4) && (data.page + 1 + 3 < tumblr_pages_count_br)) { numbert_tumblr_page_px(3, "next", 3, 7); }

                    if ((data2.pagination >= 4) &&
                        (tumblr_pages_count_br >= 5) &&
                        (data.page + 1 + 4 < tumblr_pages_count_br)) { numbert_tumblr_page_px(4, "next", 4, 9); }

                    //////////////////////////////////////////////////////

                    if ((data2.pagination >= 4) && (tumblr_pages_count_br >= 6) && (data.page + 1 - 4 < 0)) { number_tumblr_page_st(5, "next"); }
                    if ((data2.pagination >= 3) && (tumblr_pages_count_br >= 7) && (data.page + 1 - 3 < 0)) { number_tumblr_page_st(6, "next"); }
                    if ((data2.pagination >= 2) && (tumblr_pages_count_br >= 8) && (data.page + 1 - 2 < 0)) {
                        if (data2.pagination >= 2) { number_tumblr_page_st(3, "next"); } else { number_tumblr_page_st(7, "next"); }
                    }
                    if ((data2.pagination >= 1) && (tumblr_pages_count_br >= 9) && (data.page + 1 - 0 == 0)) { number_tumblr_page_st(8, "next"); }

                    //////////////////////////////////////////////////////

                    if ((data.page + 1 < tumblr_pages_count_br) || (data.page + 1 < tumblr_pages_count_br - data2.pagination)) { tumblr_next_st.push($("<li>", { class: "tumblr_pagination", special_next: "next" }).append($("<a>").text(tumblr_pages_count_br)).click(function() { tumblr_next_page(false, tumblr_pages_count_br - 1); }).contextmenu(function() { tumblr_next_page(true, tumblr_pages_count_br - 1); return false; })); }

                    //////////////////////////////////////////////////////





                    // Next
                    if (data.page < tumblr_pages_count_br - 1) { var anti_tumblr_next = ''; } else { var anti_tumblr_next = 'tumblr_anti_pagination'; }
                    tumblr_next_st.push(
                        $("<li>", { class: "tumblr_next " + anti_tumblr_next }).append($("<a>", { type: "button", "aria-label": "Next" }).append($("<span>", { "aria-hidden": true }).text('»')).click(function() { tumblr_next_page(false, data.page + 1); }).contextmenu(function() { tumblr_next_page(true, data.page + 1); return false; }))
                    );






                    // New Page
                    if (data2.next_top == 2) { $("#" + $(thishere).attr('id') + ' .tumblr_top_next_page').append($("<ul>", { class: "pagination tumblr_next_sts" }).append(tumblr_next_st)) } else if (data2.next_top >= 0) {
                        $(thishere).append($("<ul>", { class: "pagination tumblr_next_sts" }).append(tumblr_next_st));
                        if (data2.next_top == 1) { $("#" + $(thishere).attr('id') + ' .tumblr_next_sts').clone(true).appendTo("#" + $(thishere).attr('id') + ' .tumblr_top_next_page'); }
                    }

                }

                // New Load
                if (data3 == true) {

                    // Scroll
                    if (data2.scroll == true) {
                        if (antiscroll != true) {
                            if (data2.scroll_item == 'auto_tumblr') { var auto_scroll_target_tumblr = thishere; } else { var auto_scroll_target_tumblr = data2.scroll_item; }
                            $('html,body').animate({ scrollTop: $(auto_scroll_target_tumblr).offset().top }, data2.scroll_item_vel);
                        }
                    } else { return false; }

                    if ((data2.scroll_page == true) && (data2.window_mode == true)) { if (antiscroll != true) { $(thishere).animate({ scrollTop: 0 }, scroll_page_vel).affix({ offset: { top: 575 } }); } }

                } else { return false; }


            }
        });
}


// jQuery
jQuery.fn.tumblr = function(data, data2, data3, data4, antiscroll, newtagst) {

    tumblr_show = {
        'window_mode': false,

        'title_blog': true,
        'description_blog': true,

        'custom_title_blog': '',
        'custom_description_blog': '',

        'disable_tag': true,
        'force_disable_tag': false,

        'info': true,
        'like': true,
        'reblog': true,
        'date': true,
        'tags': true,

        'music': true,
        'photo': true,
        'link': true,
        'video': true,

        'limit': 0,
        'next': true,
        'next_top': 0,
        'pagination': 4,

        'scroll': true,
        'scroll_item': 'auto_tumblr',
        'scroll_item_vel': 'fast',

        'scroll_page': true,
        'scroll_page_vel': 'fast',

        'disable_photo': false,
        'disable_video': false,
        'disable_link': false,
        'disable_audio': false,
        'disable_regular': false,
        'disable_quote': false,
        'disable_conversation': false
    }

    if (data2 != undefined) { for (var prop in data2) { if (data2.hasOwnProperty(prop)) { tumblr_show[prop] = data2[prop]; } } }
    systemgentumblrpek(data, this, tumblr_show, data3, data4, antiscroll, newtagst);
};