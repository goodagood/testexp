// HTML Escape helper utility
var util = (function () {
    // Thanks to Andrea Giammarchi
    var
    reEscape = /[&<>'"]/g,
    reUnescape = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,
    oEscape = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    },
    oUnescape = {
        '&amp;': '&',
        '&#38;': '&',
        '&lt;': '<',
        '&#60;': '<',
        '&gt;': '>',
        '&#62;': '>',
        '&apos;': "'",
        '&#39;': "'",
        '&quot;': '"',
        '&#34;': '"'
    },
    fnEscape = function (m) {
        return oEscape[m];
    },
    fnUnescape = function (m) {
        return oUnescape[m];
    },
    replace = String.prototype.replace;


    return (Object.freeze || Object)({
        escape: function escape(s) {
                return replace.call(s, reEscape, fnEscape);
            },
        unescape: function unescape(s) {
                return replace.call(s, reUnescape, fnUnescape);
            }
    });
}());

// Tagged template function
function html(pieces) {
    var result = pieces[0];
    var substitutions = [].slice.call(arguments, 1);
    for (var i = 0; i < substitutions.length; ++i) {
        result += util.escape(substitutions[i]) + pieces[i + 1];
    }

    return result;
}

var username = "Domenic Denicola";
var tag = "& is a fun tag";
console.log(html`<b>${username} says</b>: "${tag}"`);
//=> <b>Domenic Denicola says</b>: "&amp; is a fun tag"


//// Contextual auto-escaping
//qsa`.${className}`;
//safehtml`<a href="${url}?q=${query}" onclick="alert('${message}')" style="color: ${color}">${message}</a>`;
//
//// Localization and formatting
//l10n`Hello ${name}; you are visitor number ${visitor}:n! You have ${money}:c in your account!`
//
//// Embedded HTML/XML
//jsx`<a href="${url}">${text}</a>` // becomes React.DOM.a({ href: url }, text)
//
//// DSLs for code execution
//var childProcess = sh`ps ax | grep ${pid}`;
