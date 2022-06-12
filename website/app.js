let ctx;
let timer = 0;
let canvas;
let question;
let input;
let answer;
let main;

function onStart() {
  document.querySelector(".main").remove();

  canvas = document.createElement("canvas");
  question = document.createElement("h1");
  input = document.createElement("input");

  canvas.id = "canvas";
  canvas.width = window.innerWidth - 15;
  canvas.height = 20;

  setQuestion();
  question.id = "question";

  input.type = "text";
  input.id = "input";
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (input.value === answer) {
        next(true);
      } else {
        next();
      }
    }
  });

  const body = document.getElementsByTagName("body")[0];
  body.appendChild(canvas);
  body.appendChild(question);
  body.appendChild(input);

  ctx = canvas.getContext("2d");

  update();
}

let animation;

function update() {
  animation = requestAnimationFrame(update);
  input.focus();
  if (timer < 700) {
    ctx.fillStyle = "rgb(0, 168, 107)";
    ctx.fillRect(0, 0, Math.round((canvas.width / 700) * timer), 20);
    timer++;
  } else {
    next();
  }
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth - 15;
});

function next(succ = false) {
  cancelAnimationFrame(animation);
  if (succ) {
    ctx.fillStyle = "rgb(0, 168, 107)";
    ctx.fillRect(0, 0, Math.round((canvas.width / 700) * timer), 20);
    question.style.color = "rgb(0, 168, 107)";
    question.innerHTML = "정답: " + answer + "<br>ㅤ<br/><br>Correct!<br/>";
  } else {
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, Math.round((canvas.width / 700) * timer), 20);
    question.style.color = "red";
    if (timer >= 700) {
      question.innerHTML = "정답: " + answer + "<br>ㅤ<br/><br>Time Out!</br>";
    } else {
      question.innerHTML =
        "정답: " +
        answer +
        "<br>입력한 답: " +
        input.value +
        "<br/>" +
        "<br>ㅤ<br/><br>Incorrect!<br/>";
    }
  }
  input.value = "";
  input.style.display = "none";
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setQuestion();
    timer = 0;
    input.style.display = "inline";
    question.style.color = "black";
    update();
  }, 3000);
}

function getRandomElement(array, count = 0) {
  const copy = array.slice();
  if (count === 0) {
    return copy[Math.floor(Math.random() * copy.length)];
  }
  const resurt = [];
  for (let i = 0; i < count; i++) {
    const pick = Math.floor(Math.random() * copy.length);
    resurt.push(copy[pick]);
    copy.splice(pick, pick + 1);
  }
  return resurt;
}

function setQuestion() {
  main = getRandomElement(getRandomElement(mainTypes));
  if (main instanceof King) {
    answer = main.name;
    question.innerHTML =
      "다음 업적을 이룬 " +
      main.country.name +
      "의 왕은?<br>ㅤ<br/><br>" +
      getRandomElement(main.ach, Math.ceil(Math.random() * 3)).join("<br/><br>") +
      "<br/>";
  } else if (main instanceof Country) {
    answer = main.name;
    question.innerHTML =
      "다음 설명에 해당하는 나라의 이름은?<br>ㅤ<br/><br>" +
      getRandomElement(main.info, 1).join("<br/><br>") +
      "<br/>";
  }
}
