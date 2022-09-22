let rowa = document.querySelector("#rowa");
let cola = document.querySelector("#cola");
let rowb = document.querySelector("#rowb");
let colb = document.querySelector("#colb");
let opt = document.querySelector("#opt");
let ans = document.querySelector(".ans");
let s1 = document.querySelector(".s1");
let s2 = document.querySelector(".s2");
rowa.addEventListener("input", set1);
cola.addEventListener("input", set1);
rowb.addEventListener("input", set2);
colb.addEventListener("input", set2);
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
function set2() {
  s2.style.cssText = `
display: grid;
grid-template-columns: repeat(${colb.value},1fr);
grid-template-rows: repeat(${rowb.value},1fr);
`;
  s2.innerHTML = "";
  for (let i = 1; i <= rowb.value; i++) {
    for (let j = 1; j <= colb.value; j++) {
      let mye = document.createElement("input");
      mye.setAttribute("type", "number");
      mye.id = `b${i}${j}`;
      s2.appendChild(mye);
    }
  }
}
opt.addEventListener("change", option);
function option() {
  if (opt.value === "+" || opt.value === "-") {
    if ((rowa.value === rowb.value) & (cola.value === colb.value)) {
      ans.innerHTML = "";
      ans.style.cssText = `
    display: grid;
    grid-template-columns: repeat(${cola.value},1fr);
    grid-template-rows: repeat(${rowa.value},1fr);
    `;
      for (let i = 1; i <= rowa.value; i++) {
        for (let j = 1; j <= cola.value; j++) {
          let ma = document.getElementById(`a${i}${j}`);
          let mb = document.getElementById(`b${i}${j}`);
          let span = document.createElement("span");
          ma.addEventListener("input", option);
          mb.addEventListener("input", option);
          if (opt.value === "+") span.textContent = +ma.value + +mb.value;
          if (opt.value === "-") span.textContent = +ma.value - +mb.value;
          ans.appendChild(span);
        }
      }
    }
  } else if (opt.value === "*") {
    if (cola.value === rowb.value) {
      ans.innerHTML = "";
      ans.style.cssText = `
    display: grid;
    grid-template-columns: repeat(${colb.value},1fr);
    grid-template-rows: repeat(${rowa.value},1fr);
    `;
    for (let i = 1; i <= rowa.value; i++) {
      for (let j = 1; j <= cola.value; j++) {
        let ma = document.getElementById(`a${i}${j}`);
        let mb = document.getElementById(`b${j}${i}`);
        let span = document.createElement("span");
        ma.addEventListener("input", option);
        mb.addEventListener("input", option);
        span.textContent = +ma.value - +mb.value;
        ans.appendChild(span);
      }
    }
    }
  }
}
