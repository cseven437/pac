// PROXY 127.0.0.1:7897; SOCKS5 127.0.0.1:7897; DIRECT

// SOCKS5 127.0.0.1:7897; HTTPS 127.0.0.1:7897; DIRECT

var proxy_domains = {
    "t66y.com": 1,
    "google.com.sg": 1,
    "gstatic.com": 1,
    "doubleclick.net": 1,
    "googlevideo.com": 1,
    "youtube.com": 1,
    "merlinblog.xyz": 1,
    "google.com": 1,
    "googletagmanager.com": 1,
    "google-analytics.com": 1,
    "googleusercontent.com": 1,
    "x.com": 1,
    "twimg.com": 1,
    "mnaspm.com": 1,
    "googlesyndication.com": 1,
    "2mdn.net": 1,
    "labadena.com": 1,
    "stripchatgirls.com": 1,
    "mushroomtrack.com": 1,
    "exosrv.com": 1,
    "ktkjmp.com": 1,
    "jable.tv": 1,
    "ymuuy.com": 1,
    "immersivetranslate.com": 1,
    "polyfill.io": 1,
    "anytype.io": 1,
    "ggpht.com": 1,
    "ytimg.com": 1,
    "jnn-pa.googleapis.com": 1,
    "gitbook.io": 1,
    "wikipedia.org": 1,
    "avatars.githubusercontent.com": 1,
    "raw.githubusercontent.com": 1,
    "github.com": 1,
    "github.dev": 1,
    "v2ex.com": 1,
    "ppsebs.com": 1,
    "nnu3.com": 1,
    "cdnbye.com": 1,
    "wlongimg.com": 1,
}

var direct = 'DIRECT;';
var proxy = 'SOCKS5 127.0.0.1:7897; HTTPS 127.0.0.1:7897; DIRECT';

var hasOwnProperty = Object.hasOwnProperty;

function hostindomains(domains, host) {
    var suffix;
    var pos = host.lastIndexOf('.');
    pos = host.lastIndexOf('.', pos - 1);
    while (1) {
        if (pos == -1) {
            if (hasOwnProperty.call(domains, host)) {
                return true;
            } else {
                return false;
            }
        }
        suffix = host.substring(pos + 1);
        if (hasOwnProperty.call(domains, suffix)) {
            return true;
        }
        pos = host.lastIndexOf('.', pos - 1);
    }
};

function FindProxyForURL(url, host) {
    // if (host == "www.haosou.com") {
    //     return "PROXY 360.itzmx.com:80";
    // }
    if (hostindomains(proxy_domains, host)) {
        alert(host + "   proxy")
        return proxy;
    }
    alert(host + "   direct")
    return direct;
}