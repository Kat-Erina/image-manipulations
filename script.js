let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");
let div4 = document.querySelector(".div4");
let div5 = document.querySelector(".div5");
let div6 = document.querySelector(".div6");

let arr = [div1, div2, div3, div4, div5, div6];
arr.forEach((el, index) => {
  el.addEventListener("mouseover", () => {
    el.textContent = `${index + 1} flat`;
    console.log(el.id);
  });
  el.addEventListener("mouseleave", () => {
    el.textContent = ``;
    console.log(el.id);
  });
});
