const select = document.querySelector(".input");
const input = document.querySelector("input");
const block = document.querySelector(".block");
const img = document.querySelector(".image");
let flag = false;

select.addEventListener("click", function () {
  if (!flag) {
    block.style = "visability: visible";
    img.style = "background-image: url(./curs.svg)";

    flag = true;
  } else {
    img.style = "background-image: url(./cursup.svg)";
    block.style = "visibility: hidden";
    flag = false;
  }
});

block.addEventListener("click", function (event) {
  input.value = event.target.textContent;
  block.style = "visibility: hidden";
  img.style = "background-image: url(./cursup.svg)";
  flag = false;
});

select.addEventListener("dblclick", function (event) {
  input.disabled = false;
  block.style = "visability: visible";
  input.value = "";

});

input.addEventListener('keydown', (event)=>{
    if(event.key != 'Enter') return
    else{
        const p = document.createElement('p')
        p.textContent = input.value
        block.appendChild(p)
        input.value = ''

    }
})