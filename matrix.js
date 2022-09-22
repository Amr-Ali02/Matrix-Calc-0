let mat1 = document.querySelector("mat1");
let rowa = document.querySelector("#rowa");
let cola = document.querySelector("#cola");
rowa.addEventListener("input", () => {
  for (let i = 1; i <= rowa.value; i++) {
    for (let j = 1; j <= cola.value; j++) {
      console.log(i, j);
    }
  }
});
