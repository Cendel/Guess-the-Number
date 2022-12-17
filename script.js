const entry = document.getElementById("entry");
const guess = document.getElementById("guess");
const start = document.getElementById("start");
const result = document.getElementById("result");
let ranNum = 0;
let attempt = 0;

start.addEventListener("click", () => {
  attempt = 0;
  guess.removeAttribute("disabled");
  entry.value = "";
  ranNum = ranNumGenerator(1, 100);
  entry.removeAttribute("disabled");
  guess.style.display = "inline";
  start.innerHTML = "Reset";
  result.innerHTML = "Enter a number.";
  entry.focus();
});

entry.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) guess.click();
});

guess.addEventListener("click", () => {
  let num = Number(entry.value);
  attempt++;

  switch (true) {
    case num === ranNum:
      result.innerHTML = `You have found the number in ${attempt} attempts! Please reset to play again.`;
      guess.setAttribute("disabled", "true");

      break;
    case num > ranNum:
      result.innerHTML = `Your guess is greater than the number. ${checkAttempt()}`;
      break;
    case num < ranNum:
      result.innerHTML = `Your guess is less than the number. ${checkAttempt()}`;
      break;
  }
});

const reset = () => {
  entry.setAttribute("disabled", "true");
  start();
};
entry.addEventListener("input", () => {
  result.innerHTML = "";
});

const ranNumGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkAttempt = () => {
  if (attempt === 7) guess.setAttribute("disabled", "true");
  return attempt === 7
    ? `You are out of attempts. Please reset to play again.`
    : `You have ${7 - attempt} left.`;
};
