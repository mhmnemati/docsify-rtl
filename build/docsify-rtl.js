"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.install = function (hook, vm) {
    var config = Object.assign({}, {
        tag: "rtl"
    }, vm.config.rtl);
    hook.afterEach(function (html, next) {
        document.getElementsByName("body").forEach(function (item) {
            item.dir = config.body || "rtl";
        });
        document.getElementsByName("bdo").forEach(function (item) {
            item.dir = config.bdo || "rtl";
        });
        next(html);
    });
};
//# sourceMappingURL=docsify-rtl.js.map