import { install } from "./docsify-rtl";

if (!(window as any).$docsify) {
    (window as any).$docsify = {};
}

(window as any).$docsify.plugins = (
    (window as any).$docsify.plugins || []
).concat(install);

export * from "./docsify-rtl";
