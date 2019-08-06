export interface RTLConfig {
    body?: "rtl" | "ltr";
    side?: "rtl" | "ltr";
    bdo?: "rtl" | "ltr";
}

export const install = (hook: any, vm: any) => {
    const config = Object.assign(
        {},
        {
            body: "rtl",
            side: "rtl",
            bdo: "rtl"
        },
        vm.config.rtl
    );

    hook.ready(function() {
        for (let item of document.getElementsByTagName("body") as any) {
            item.dir = config.body;
        }
        for (let item of document.getElementsByClassName("sidebar") as any) {
            item.dir = config.side;
        }
        for (let item of document.getElementsByTagName("bdo") as any) {
            item.dir = config.bdo;
        }
    });
};
