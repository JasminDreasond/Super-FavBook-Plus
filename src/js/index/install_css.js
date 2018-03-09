/**

 * Super FavBook Plus
 * https://github.com/JasminDreasond/Super-FavBook-Plus
 * By Jasmin Dreasond
 * License : MIT
 
**/

function startdownloadst() {
    chrome.storage.local.get({ download_code_css: "", loadsync: "local" }, function(download_st) {
        if (download_st.download_code_css != "") {

            // Base
            var windowbns = 16;
            var windowbns2 = 39;

            // Size
            var widthwn = 700 + windowbns;
            var heightwn = 560 + windowbns2;
            window.resizeTo(widthwn, heightwn);








            // System

            function checklinesetk(cssitem) {

                if ((cssitem.startsWith('Author:') == false) && (cssitem.startsWith('URL:') == false) && (cssitem.startsWith('Page:') == false) && (cssitem.startsWith('Name:') == false) && (cssitem.startsWith('Notype:') == false) && (cssitem.startsWith('Type:') == false)) {
                    if ((cssitem.indexOf('http://') > -1) || (cssitem.indexOf('https://') > -1) || (cssitem.indexOf('ftp://') > -1) || (cssitem.indexOf('file://') > -1)) {

                        if (cssitem.indexOf('file://') > -1) { var warntypecss = 'file'; } else if (cssitem.indexOf('ftp://') > -1) { var warntypecss = 'ftp'; } else if (cssitem.indexOf('http://') > -1) { var warntypecss = 'http'; } else if (cssitem.indexOf('https://') > -1) { var warntypecss = 'https'; }
                        if (cssitem.indexOf('@import ') > -1) { var warntypecss = warntypecss + ' import'; }


                        $("#csswarns").append($("<div>", { class: "warn_here " + warntypecss }).text(cssitem));

                    }
                } else {
                    if ((cssitem != undefined) && (cssitem != null) && (cssitem != '')) {

                        if (cssitem.startsWith('Author:')) {

                            var datauserpek = cssitem.replace('Author: ', '').replace('Author:', '');
                            $("#authorlist_css").text(datauserpek).contextPopup({
                                title: chrome.i18n.getMessage("author"),
                                items: [

                                    { label: chrome.i18n.getMessage("profile"), icon: '', action: function() {}, href: $("#authorlist_css").attr('url'), target: '_blank' },
                                    { label: chrome.i18n.getMessage("page"), icon: '', action: function() {}, href: $("#authorlist_css").attr('page'), target: '_blank' }

                                ]
                            }, 'click').click(function() { $(this).addClass("selectedplusthumbpx"); });

                        } else if (cssitem.startsWith('URL:')) {

                            var datauserpek = cssitem.replace('URL: ', '').replace('URL:', '');
                            $("#authorlist_css").attr('url', datauserpek);

                        } else if (cssitem.startsWith('Page:')) {

                            var datauserpek = cssitem.replace('Page: ', '').replace('Page:', '');
                            $("#authorlist_css").attr('page', datauserpek);

                        } else if (cssitem.startsWith('Name:')) {

                            var datauserpek = cssitem.replace('Name: ', '').replace('Name:', '');
                            document.title = datauserpek;

                        } else if (cssitem.startsWith('Notype:')) {

                            var datauserpek = cssitem.replace('Notype: ', '').replace('NoType:', '').replace(/ /g, '').replace("\r", "").split(",");
                            $("#installselect option:selected").prop('selected', false);

                            $("#installselect option[value='all']").remove();
                            if ((datauserpek[0] != null) || (datauserpek[0] != undefined)) { $("#installselect option[value='" + datauserpek[0] + "']").remove(); }
                            if ((datauserpek[1] != null) || (datauserpek[2] != undefined)) { $("#installselect option[value='" + datauserpek[1] + "']").remove(); }
                            if ((datauserpek[3] != null) || (datauserpek[3] != undefined)) { $("#installselect option[value='" + datauserpek[2] + "']").remove(); }

                        } else if (cssitem.startsWith('Type:')) {

                            var datauserpek = cssitem.replace('Type: ', '').replace('Type:', '').replace(/ /g, '');
                            $("#installselect option:selected").prop('selected', false);
                            $("#installselect option[value='" + datauserpek + "']").prop('selected', true);

                        }

                    }
                }

            }



            var enteredText = download_st.download_code_css;
            var numberOfLineBreaks = (enteredText.match(/\n/g) || []).length;
            var characterCount = enteredText.length + numberOfLineBreaks;
            checklinesetk(download_st.download_code_css.split('\n')[0]);
            for (i = 0; i < numberOfLineBreaks; i++) { checklinesetk(download_st.download_code_css.split('\n')[i + 1]); }

            $("#csstext").text(download_st.download_code_css);
            $("#loadcscsstype").val(download_st.loadsync);
            $("#close").click(function() { window.close(); });





            // Save CSS

            $("#savecustomcss").click(function() {

                function installedsucess(appopen) {
                    if (appopen == "all") { window.open(chrome.extension.getURL('index.html'), "_blank"); } else if (appopen == "appdevianplus") { chrome.windows.create({ url: "apps/devianplus.html", type: "popup", state: "maximized" }); } else if (appopen == "appsoundbookplus") { chrome.windows.create({ url: "apps/soundbookplus.html", type: "popup", state: "maximized" }); } else if (appopen == "appfanficbookinplus") { chrome.windows.create({ url: "apps/fanficbookinplus.html", type: "popup", state: "maximized" }); }
                    window.close();
                }


                if ($("#loadcscsstype").val() == 'sync') {
                    if ($("#installselect").val() == "all") { chrome.storage.sync.set({ dp_css: download_st.download_code_css, sb_css: download_st.download_code_css, ffb_css: download_st.download_code_css }, function() { window.close(); }) } else if ($("#installselect").val() == "appdevianplus") { chrome.storage.sync.set({ dp_css: download_st.download_code_css }, function() { installedsucess($("#installselect").val()); }) } else if ($("#installselect").val() == "appsoundbookplus") { chrome.storage.sync.set({ sb_css: download_st.download_code_css }, function() { installedsucess($("#installselect").val()); }) } else if ($("#installselect").val() == "appfanficbookinplus") { chrome.storage.sync.set({ ffb_css: download_st.download_code_css }, function() { installedsucess($("#installselect").val()); }) }
                } else {
                    if ($("#installselect").val() == "all") { chrome.storage.local.set({ dp_css: download_st.download_code_css, sb_css: download_st.download_code_css, ffb_css: download_st.download_code_css }, function() { installedsucess($("#installselect").val()); }) } else if ($("#installselect").val() == "appdevianplus") { chrome.storage.local.set({ dp_css: download_st.download_code_css }, function() { installedsucess($("#installselect").val()); }) } else if ($("#installselect").val() == "appsoundbookplus") { chrome.storage.local.set({ sb_css: download_st.download_code_css }, function() { installedsucess($("#installselect").val()); }) } else if ($("#installselect").val() == "appfanficbookinplus") { chrome.storage.local.set({ ffb_css: download_st.download_code_css }, function() { installedsucess($("#installselect").val()); }) }
                }


            });






            chrome.storage.local.set({ download_code_css: "" });
        } else { window.close(); }
    });
}
startdownloadst();