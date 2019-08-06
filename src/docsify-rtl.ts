export interface RTLConfig {
    body?: "rtl" | "ltr";
    bdo?: "rtl" | "ltr";
}

export const install = (hook: any, vm: any) => {
    const config: RTLConfig = Object.assign(
        {},
        {
            tag: "rtl"
        },
        vm.config.rtl
    );

    hook.afterEach(function(html: any, next: any) {
        document.getElementsByName("body").forEach(item => {
            item.dir = config.body || "rtl";
        });
        document.getElementsByName("bdo").forEach(item => {
            item.dir = config.bdo || "rtl";
        });

        next(html);
    });
};
