var time = getHours();
var hour9 = 9;
var hour10 = 10;
var hour11 = 11;
var hour12 = 12;
var hour13 = 13;
var hour14 = 14;
var hour15 = 15;
var hour16 = 16;
var hour17 = 17;
var block1 = document.querySelector("#9");
var block2 = document.getElementsByClassName("10");
var block3 = document.getElementsByClassName("11");
var block4 = document.getElementsByClassName("12");
var block5 = document.getElementsByClassName("1");
var block6 = document.getElementsByClassName("2");
var block7 = document.getElementsByClassName("3");
var block8 = document.getElementsByClassName("4");
var block9 = document.getElementsByClassName("5");
block1 = localStorage.getItem('block1');
block2 = localStorage.getItem('block2');
block3 = localStorage.getItem('block3');
block4 = localStorage.getItem('block4');
block5 = localStorage.getItem('block5');
block6 = localStorage.getItem('block6');
block7 = localStorage.getItem('block7');
block8 = localStorage.getItem('block8');
block9 = localStorage.getItem('block9');
var saveBtn = document.getElementsByClassName("saveBtn");

saveBtn.addEventListener("click", saveData());

function saveData(){
    localStorage.setItem('block1', block1);
}