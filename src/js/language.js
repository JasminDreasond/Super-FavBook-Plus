/**

 * Super FavBook Plus
 * https://github.com/JasminDreasond/Super-FavBook-Plus
 * By Jasmin Dreasond
 * License : MIT
 
**/

// Setar Idioma

function localizeHtmlPage() {
    $("[langchrome]").each(function() {
        var setlangchrome = $(this).attr("langchrome")
        var setlangchrome2 = $(this).attr("langchrome2")

        // Input
        if ($(this).is('input')) {

            if ($(this).attr("tsplaceholder") == "true") { $(this).attr("placeholder", chrome.i18n.getMessage(setlangchrome2)) }
            $(this).val(chrome.i18n.getMessage(setlangchrome))

        }


        // Title
        else if ($(this).is('title')) {
            var titlepst = $(this).text()

            if ($(this).attr("titlepst") == "left") { document.title = titlepst + chrome.i18n.getMessage(setlangchrome) } else if ($(this).attr("titlepst") == "right") {
                var titlepst = $(this).text()
                document.title = chrome.i18n.getMessage(setlangchrome) + titlepst
            } else if ($(this).attr("titlepst") == "leftEX") { document.title = chrome.i18n.getMessage("appName") + " - " + chrome.i18n.getMessage(setlangchrome) } else if ($(this).attr("titlepst") == "rightEX") { document.title = chrome.i18n.getMessage(setlangchrome) + " - " + chrome.i18n.getMessage("appName") } else { document.title = chrome.i18n.getMessage(setlangchrome) }

        }

        // Change Title
        else if ($(this).attr("newtitle_lang") == "true") {
            if ($(this).attr("newtitle_lang_text") == "true") { $(this).text(chrome.i18n.getMessage(setlangchrome)) }
            $(this).attr("title", chrome.i18n.getMessage(setlangchrome2))
        }

        // Normal
        else { $(this).text(chrome.i18n.getMessage(setlangchrome)) }



        // Complete
        $(this).removeAttr("langchvalue").removeAttr("langchrome").removeAttr("langchrome2").removeAttr("tsplaceholder").removeAttr("newtitle_lang").removeAttr("newtitle_lang_text")
    })
}

// Start
$("html").ready(function() { localizeHtmlPage(); })