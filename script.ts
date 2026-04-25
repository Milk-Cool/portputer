// @ts-ignore
const LeaderLine: any = window.LeaderLine;

for(let i = 1; i <= 4; i++)
    new LeaderLine(
        document.querySelector("#card" + i.toString()),
        document.querySelector("#logo"),
        { color: ["blue", "red", "lime"][Math.floor(Math.random() * 3)] }
    );
new LeaderLine(
    document.querySelector("#card5"),
    document.querySelector("#card6"),
    { color: "black" }
);
for(let i = 7; i <= 12; i += 2)
    new LeaderLine(
        document.querySelector("#card" + i.toString()),
        document.querySelector("#card" + (i + 1).toString()),
        { color: ["orangered", "yellowgreen", "blueviolet"][Math.floor(Math.random() * 3)], endSocket: "top" }
    );