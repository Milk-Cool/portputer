// @ts-ignore
const LeaderLine: any = window.LeaderLine;

for(let i = 1; i <= 4; i++)
    new LeaderLine(
        document.querySelector("#card" + i.toString()),
        document.querySelector("#logo"),
        { color: ["blue", "red", "green"][Math.floor(Math.random() * 3)] }
    );
new LeaderLine(
    document.querySelector("#card5"),
    document.querySelector("#card6"),
    { color: "black" }
);