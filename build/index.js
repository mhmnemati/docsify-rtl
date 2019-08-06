"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var docsify_rtl_1 = require("./docsify-rtl");
if (!window.$docsify) {
    window.$docsify = {};
}
window.$docsify.plugins = (window.$docsify.plugins || []).concat(docsify_rtl_1.install);
__export(require("./docsify-rtl"));
//# sourceMappingURL=index.js.map