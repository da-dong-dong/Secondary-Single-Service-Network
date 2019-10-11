(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            var clientHeight = docEl.clientHeight;
            if (!clientWidth) return;
            if (clientWidth / clientHeight > 1) {
                docEl.style.fontSize = '70px';
                doc.getElementById('container').style.background = '#f4f4f4';
                if (doc.getElementById('foot')) {
                    doc.getElementById('foot').classList.add('bags');
                }

            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
