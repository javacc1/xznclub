/*
 一件排版功能添加
 */
function processFormatText(textContext, action) {
    var text = DBC2SBC(textContext);
    var prefix = "　　";
    var tmps = text.split("\n");
    var html = "";
    var add_number = 1;

    for (i = 0; i < tmps.length; i++) {
        var tmp = tmps[i].trim();
        if (tmp.length > 0) {
            if (ifurl.checked) {
                tmp = tmp.replace(/([a-zA-Z]{0,5}(\.|：))?[\w\.\/？\%\&\=]*\.[a-zA-Z]{2,4}/ig, "");
            }
            if (action == 'add') {
                if (tmp.indexOf("FormatTitleID") > 0) {
                    add_number = 1;
                } else if (!(tmp.indexOf("FormatImgID") > 0 || tmp.indexOf("FormatTableID") > 0)) {
                    tmp = tmp.replace(/^[0-9]{0,3}(\.|、)/g, "");
                    tmp = tmp.trim();
                    tmp = add_number + '. ' + tmp;
                    add_number++;
                }
            }
            if (action == 're') {
                tmp = tmp.replace(/^[0-9]{0,3}(\.|、)/g, "");
                tmp = tmp.trim();
            }
            if (ifblank.checked) {
                if (tmp.indexOf("FormatImgID") > 0 || tmp.indexOf("FormatTableID") > 0 || tmp.indexOf("FormatTitleID") > 0) {
                    if (ifcenter.checked && tmp.indexOf("FormatTitleID") < 0) {
                        html += tmp + "<p style=" + "text-align:center" + ">\n";
                        var wcenter = true;
                    } else {
                        html += tmp + "\n";
                    }
                } else {
                    if (ifcenter.checked) {
                        if (wcenter) {
                            html += tmp + "</p>\n";
                            wcenter = false;
                        } else {
                            html += "<p>　　" + tmp + "</p>\n";
                        }
                    } else {
                        html += "<p>　　" + tmp + "</p>\n";
                    }
                }
            } else {
                if (tmp.indexOf("FormatImgID") > 0 || tmp.indexOf("FormatTableID") > 0 || tmp.indexOf("FormatTitleID") > 0) {
                    if (ifcenter.checked && tmp.indexOf("FormatTitleID") < 0) {
                        html += tmp + "<p style=" + "text-align:center" + ">\n";
                        var wcenter = true;
                    } else {
                        html += tmp + "\n";
                    }
                } else {
                    if (ifcenter.checked) {
                        if (wcenter) {
                            html += tmp + "</p>\n";
                            wcenter = false;
                        } else {
                            html += "<p>" + tmp + "</p>\n";
                        }
                    } else {
                        html += "<p>" + tmp + "</p>\n";
                    }
                }
            }
        }
    }

    return html;
}
/*
 添加工具栏按钮
 */
function establish() {
    var edui2 = document.getElementsByClassName('edui-toolbar');
    console.log(edui2)
    var descBut = document.createElement('div');
    var input_btn = ['<a class="format-btn" onclick="FormatText()" data-toggle="tooltip" title="" data-original-title="格式化文章,点击右边小箭头设置需要的格式">一键排版</a>',
        '        <div class="list-btn"> </div>',
        '        <div class="list">',
        '            <div class="form-check">',
        '                <div class="main-checkbox">',
        '                    <input type="checkbox" value="None" id="ifblank" name="check" checked="checked">',
        '                    <label for="ifblank">',
        '                        <span class="text">段前空格</span>',
        '                    </label>',
        '                </div>',
        '            </div>',
        '            <div class="form-check">',
        '                <div class="main-checkbox">',
        '                    <input type="checkbox" value="None" id="ifurl" name="check" checked="checked">',
        '                    <label for="ifurl">',
        '                        <span class="text">过滤网址</span>',
        '                    </label>',
        '                </div>',
        '            </div>',
        '            <div class="form-check">',
        '                <div class="main-checkbox">',
        '                    <input type="checkbox" value="None" id="ifstrong" name="check">',
        '                    <label for="ifstrong">',
        '                        <span class="text">保留粗体</span>',
        '                    </label>',
        '                </div>',
        '            </div>',
        '            <div class="form-check">',
        '                <div class="main-checkbox">',
        '                    <input type="checkbox" value="None" id="ifa" name="check">',
        '                    <label for="ifa">',
        '                        <span class="text">保留链接</span>',
        '                    </label>',
        '                </div>',
        '            </div>',
        '            <div class="form-check">',
        '                <div class="main-checkbox">',
        '                    <input type="checkbox" value="None" id="iftable" name="check" checked="checked">',
        '                    <label for="iftable">',
        '                        <span class="text">保留表格</span>',
        '                    </label>',
        '                </div>',
        '            </div>',
        '            <div class="form-check">',
        '                <div class="main-checkbox">',
        '                    <input type="checkbox" value="None" id="iftitle" name="check">',
        '                    <label for="iftitle">',
        '                        <span class="text">保留标题</span>',
        '                    </label>',
        '                </div>',
        '            </div>',
        '            <div class="form-check w100-check">',
        '                <div class="main-checkbox">',
        '                    <input type="checkbox" value="None" id="ifcenter" name="check">',
        '                    <label for="ifcenter">',
        '                        <span class="text">图片下的文字与图片居中</span>',
        '                    </label>',
        '                </div>',
        '            </div>',
        '            <div class="form-check w100-check">',
        '                <div class="main-checkbox">',
        '                    <input type="checkbox" value="None" id="ifimgblank" name="check">',
        '                    <label for="ifimgblank">',
        '                        <span class="text">图片与图片下的文字空一行</span>',
        '                    </label>',
        '                </div>',
        '            </div>',
        '            <a class="check-btn" onclick="FormatText(\'add\')" data-toggle="tooltip" title="" data-original-title="为每一个段落前添加序号，标题之后新的排序">添加序号</a>',
        '            <a class="check-btn" onclick="FormatText(\'re\')" data-toggle="tooltip" title="" data-original-title="清除标题前的数字序号（中文序号无效）">清除序号</a>',
        '        </div>'].join("");
    descBut.innerHTML = input_btn;
    descBut.className = "tg-btn";
    edui2.appendChild(descBut);
}


function FormatText(action) {
    var myeditor = document.getElementById('ueditor_0');
    var Format = "Normal";
    if (Format == "Normal") {
        var temps = new Array();
        var tb_tmps = new Array();
        var a_tmps = new Array();
        var st_tmps = new Array();
        var tit_tmps = new Array();
        var isPart = false; //暂时无法实现局部格式化
        if (!isPart) {
            var iframeDoc = myeditor.contentDocument;
            var imgs = iframeDoc.getElementsByTagName('img');
            if (imgs != null && imgs.length > 0) {
                for (j = 0; j < imgs.length; j++) {
                    var t = document.createElement("img");
                    t.alt = imgs[j].alt;
                    t.src = imgs[j].src;
                    t.width = imgs[j].width;
                    t.height = imgs[j].height;
                    t.align = imgs[j].align;
                    temps[temps.length] = t;
                }
                var formatImgCount = 0;
                for (j = 0; j < imgs.length;) {
                    imgs[j].outerHTML = "#FormatImgID_" + formatImgCount + "#";
                    formatImgCount++;
                }
            }
            if (iftable.checked) {
                var tables = iframeDoc.body.getElementsByTagName('table');
                if (tables != null && tables.length > 0) {
                    var formatTableCount = 0;
                    for (var k = 0; k < tables.length;) {
                        tb_tmps[tb_tmps.length] = tables[k].outerHTML;
                        tables[k].outerHTML = "\n#FormatTableID_" + formatTableCount + "#\n";
                        formatTableCount++;
                    }
                }
            }
            var html = processFormatText(iframeDoc.body.innerText, action);
            if (ifa.checked) {
                var as = iframeDoc.getElementsByTagName("a");
                if (as != null && as.length > 0) {
                    var formatACount = 0;
                    for (var k = 0; k < as.length;) {
                        a_tmps[a_tmps.length] = as[k].outerHTML;
                        as[k].outerHTML = "#FormatAID_" + formatACount + "#";
                        formatACount++;
                    }
                }
            }

            var html = processFormatText(iframeDoc.body.innerText, action);
            if (ifstrong.checked) {
                var strongs = iframeDoc.getElementsByTagName("strong");
                if (strongs != null && strongs.length > 0) {
                    var formatStrongCount = 0;
                    for (var k = 0; k < strongs.length;) {
                        st_tmps[st_tmps.length] = strongs[k].outerHTML;
                        strongs[k].outerHTML = "#FormatStrongID_" + formatStrongCount + "#";
                        formatStrongCount++;
                    }
                }
            }
            var html = processFormatText(iframeDoc.body.innerText, action);
            if (iftitle.checked) {
                var titles = iframeDoc.getElementsByTagName("h2");
                if (titles != null && titles.length > 0) {
                    var formatTitleCount = 0;
                    for (var k = 0; k < titles.length;) {
                        tit_tmps[tit_tmps.length] = titles[k].outerHTML;
                        titles[k].outerHTML = "#FormatTitleID_" + formatTitleCount + "#";
                        formatTitleCount++;
                    }
                }
            }
            var html = processFormatText(iframeDoc.body.innerText, action);
            var border = "";
            if (temps != null && temps.length > 0) {
                for (j = 0; j < temps.length; j++) {
                    {
                        if (ifimgblank.checked)
                            var imghtml = "<p style=" + "text-align:center" + "><img src=\"" + temps[j].src + "\" alt=\"" + temps[j].alt + "\" width=\"" + temps[j].width + "\" height=\"" + temps[j].height + "\" align=\"" + temps[j].align + "\" " + border + "></p>&nbsp;";
                        else
                            var imghtml = "<p style=" + "text-align:center" + "><img src=\"" + temps[j].src + "\" alt=\"" + temps[j].alt + "\" width=\"" + temps[j].width + "\" height=\"" + temps[j].height + "\" align=\"" + temps[j].align + "\" " + border + "></p>";
                    }
                    html = html.replace("#FormatImgID_" + j + "#", imghtml);
                }
            }
            if (iftable.checked) {
                if (tb_tmps != null && tb_tmps.length > 0) {
                    for (k = 0; k < tb_tmps.length; k++) {
                        tb_tmps[k] = tb_tmps[k].replace(/^\<table.*?\>/g, '<table border="1" cellspacing="0" cellpadding="0" align="center" style="border-collapse: collapse;">');
                        html = html.replace("#FormatTableID_" + k + "#", tb_tmps[k]);
                    }
                }
            }
            if (ifa.checked) {
                if (a_tmps != null && a_tmps.length > 0) {
                    for (k = 0; k < a_tmps.length; k++) {
                        html = html.replace("#FormatAID_" + k + "#", a_tmps[k]);
                    }
                }
            }
            if (ifstrong.checked) {
                if (st_tmps != null && st_tmps.length > 0) {
                    for (k = 0; k < st_tmps.length; k++) {
                        html = html.replace("#FormatStrongID_" + k + "#", st_tmps[k]);
                    }
                }
            }
            if (iftitle.checked) {
                if (tit_tmps != null && tit_tmps.length > 0) {
                    for (k = 0; k < tit_tmps.length; k++) {
                        html = html.replace("#FormatTitleID_" + k + "#", tit_tmps[k]);
                    }
                }
            }
            iframeDoc.body.innerHTML = html;
        } else {
            var html = processFormatText(tmpText);
            html = html.toUpperCase();
            html = html.replace(/<P>　　<\/P>/g, "");
            html = html.replace(/<P><\/P>/g, "");
            sec.pasteHTML(html);
        }
    }
    // tgEditor.fireEvent('contentchange');
}
/*
 半角字符转全角
 */
function DBC2SBC(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        code = str.charCodeAt(i) + 65248;
        // “65281”是“！”，“65373”是“｝”，“65292”是“，”。不转换"，"

        if (code == 65292 || code == 65306 || code == 65307 || code == 65289 || code == 65288 || code == 65306 || code == 65307 || code == 65311 || code == 65281 || code == 65282 || code == 65287) {
            //  “65248”是转换码距
            result += String.fromCharCode(str.charCodeAt(i) + 65248);
        } else {
            result += str.charAt(i);
        }
        // (65281-65248 <= code&&code <= 65294-65248) || (65306-65248 <= code&& code <= 65311-65248)
    }

    return result;
}
/*
 一件排版末尾
 */