let rowa = document.querySelector("#rowa");
let cola = document.querySelector("#cola");
let s1 = document.querySelector(".s1");
rowa.addEventListener("input", set1);
cola.addEventListener("input", set1);
function set1() {
  s1.style.cssText = `
display: grid;
grid-template-columns: repeat(${cola.value},1fr);
grid-template-rows: repeat(${rowa.value},1fr);
`;
s1.innerHTML = "";
  for (let i = 1; i <= rowa.value; i++) {
    for (let j = 1; j <= cola.value; j++) {
      let mye = document.createElement("input");
      mye.setAttribute("type", "number");
      mye.id = `a${i}${j}`;
      s1.appendChild(mye);
    }
  }
}
