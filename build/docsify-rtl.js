"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.install = function (hook, vm) {
    var config = Object.assign({}, {
        body: "rtl",
        side: "rtl",
        bdo: "rtl"
    }, vm.config.rtl);
    hook.ready(function () {
        for (var _i = 0, _a = document.getElementsByTagName("body"); _i < _a.length; _i++) {
            var item = _a[_i];
            item.dir = config.body;
        }
        for (var _b = 0, _c = document.getElementsByClassName("sidebar"); _b < _c.length; _b++) {
            var item = _c[_b];
            item.dir = config.side;
        }
        for (var _d = 0, _e = document.getElementsByTagName("bdo"); _d < _e.length; _d++) {
            var item = _e[_d];
            item.dir = config.bdo;
        }
        for (var _f = 0, _g = document.getElementsByTagName("pre"); _f < _g.length; _f++) {
            var item = _g[_f];
            item.dir = "ltr";
        }
        for (var _h = 0, _j = document.getElementsByTagName("code"); _h < _j.length; _h++) {
            var item = _j[_h];
            item.dir = "ltr";
        }
    });
};
//# sourceMappingURL=docsify-rtl.js.map