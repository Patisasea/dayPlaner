const d = new Date();
var time = d.getHours();
var block = [0, 0, 0, 0, 0, 0, 0, 0, 0];
block[9] = document.getElementsByClassName("9");
block[10] = document.getElementsByClassName("10");
block[11] = document.getElementsByClassName("11");
block[12] = document.getElementsByClassName("12");
block[13] = document.getElementsByClassName("1");
block[14] = document.getElementsByClassName("2");
block[15] = document.getElementsByClassName("3");
block[16] = document.getElementsByClassName("4");
block[17] = document.getElementsByClassName("5");
block[9].innerHTML = localStorage.getItem("block9");
block[10].innerHTML = localStorage.getItem("block10");
block[11].innerHTML = localStorage.getItem("block11");
block[12].innerHTML = localStorage.getItem("block12");
block[13].innerHTML = localStorage.getItem("block13");
block[14].innerHTML = localStorage.getItem("block14");
block[15].innerHTML = localStorage.getItem("block15");
block[16].innerHTML = localStorage.getItem("block16");
block[17].innerHTML = localStorage.getItem("block17");


for (var i = 1; i < 10; i++) {
    $("." + i).click(saveData());
}
function saveData() {
    console.log(block)
    localStorage.setItem("block9", block[9].innerHTML);
}



for (var i = 0; i < time; i++) {
    console.log(i);
    if (i = Math.floor(time)) {
        console.log(Math.floor(time))
        $(block[i]).removeClass("future");
        $(block[i]).addClass("present");
    }
    if (i > 9) {
        $(block[i]).removeClass("future");
        $(block[i]).addClass("past");
    }
}