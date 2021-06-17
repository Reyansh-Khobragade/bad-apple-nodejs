let t = require("fs").readFileSync("./frames.txt", { encoding: "utf-8" });
let e = t.split(/^\n$/gm);
let o = Date.now(),
    l = 0;
const c = (t) => {
    let a = t.split(/\d$/gm),
        p = ++l * (1 / 30) * 1000,
        d = Date.now() - o;
    console.log(a[2]),
        (s = Date.now()),
        setTimeout(() => {
            console.clear();
            e.length > 0 ? c(e.shift()) : console.log("ENDED");
        }, p - d);
};
c(e.shift());
