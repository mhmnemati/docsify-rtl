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
    });
};
//# sourceMappingURL=docsify-rtl.js.map