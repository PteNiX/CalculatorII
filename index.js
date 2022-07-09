let a = "";
let b = "";

let operator = "";
let finish = false;

let digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
let action = ["+", "-", "x", "/"];

let screen = document.querySelector(".screen");

//чысцім экран
const clearAll = () => {
  a = "";
  b = "";

  operator = "";
  finish = false;
  document.querySelector(".screen").innerHTML = 0;
};

let AC = document.querySelector(".ac");

AC.addEventListener("click", clearAll);

//

document.querySelector(".buttons").onclick = (e) => {
  const key = e.target.innerHTML;

  if (digit.includes(key)) {
    if (b === "" && operator === "") {
      a += key;

      screen.innerHTML = a;
    } else if (a != "" && b != "" && finish) {
      b = key;
      finish = false;
      screen.innerHTML = b;
    } else {
      b += key;
      screen.innerHTML = b;
    }
  }

  if (action.includes(key)) {
    operator = key;
    screen.innerHTML = operator;
  }

  //equal
  if (key == "=") {
    if (b == "") b = a;
    switch (operator) {
      case "+":
        a = +a + +b;
        break;

      case "-":
        a = +a - +b;
        break;

      case "x":
        a = +a * +b;
        break;

      case "/":
        if (b == 0) {
          document.querySelector(".screen").innerHTML = "памылка";
          const audio = new Audio();
          audio.preload = "auto";
          audio.src = "./assets/error.mp3";
          audio.currentTime = 0;
          audio.play();

          a = "";
          b = "";
          operator = "";
          return;
        }
        a = +a / +b;
        break;
    }
    finish = true;
    screen.innerHTML = a;
    if (a > 999999999999999999) {
      document.querySelector(".screen").innerHTML = "вельмі вялікая лічба";
    }

    let finalSound = Array.from(
      `${document.querySelector(".screen").innerHTML}`
    );

    let arraySong = [];

    //дадаю ў масіў трэкі

    for (let i = 0; i < finalSound.length; i++) {
      if (finalSound[i] == ".") {
        arraySong.push(`./assets/dot.mp3`);
      } else {
        arraySong.push(`./assets/${finalSound[i]}.mp3`);
      }
    }

    //ствараю пераменную
    let audio = new Audio(arraySong);

    audio.song = 0;
    audio.src = arraySong[audio.song];

    console.log(arraySong);

    audio.onended = function (e) {
      if (this.song == arraySong.length - 1) {
        return;
      } else {
        this.song++;
      }
      this.src = arraySong[this.song];
      this.play();
    };

    audio.play();
  }

  //гукі

  const audio = new Audio();
  audio.preload = "auto";

  if (key == "0") {
    audio.src = "./assets/0.mp3";
  }

  if (key == "1") {
    audio.src = "./assets/1.mp3";
  }

  if (key == "2") {
    audio.src = "./assets/2.mp3";
  }

  if (key == "3") {
    audio.src = "./assets/3.mp3";
  }

  if (key == "4") {
    audio.src = "./assets/4.mp3";
  }

  if (key == "5") {
    audio.src = "./assets/5.mp3";
  }

  if (key == "6") {
    audio.src = "./assets/6.mp3";
  }

  if (key == "7") {
    audio.src = "./assets/7.mp3";
  }

  if (key == "8") {
    audio.src = "./assets/8.mp3";
  }

  if (key == "9") {
    audio.src = "./assets/9.mp3";
  }

  if (key == ".") {
    audio.src = "./assets/dot.mp3";
  }

  if (key == "-") {
    audio.src = "./assets/-.mp3";
  }

  if (key == "+") {
    audio.src = "./assets/+.mp3";
  }

  audio.currentTime = 0;
  audio.play();
};
