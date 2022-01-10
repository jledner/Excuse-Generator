/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

let generatedExcuses = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  var a = getRandomInt(0, who.length - 1);
  var b = getRandomInt(0, action.length - 1);
  var c = getRandomInt(0, what.length - 1);
  var d = getRandomInt(0, when.length - 1);
  return who[a] + " " + action[b] + " " + what[c] + " " + when[d];
};

window.onload = function() {
  //write your code here
  document.querySelector(
    "#excuse"
  ).innerHTML = `<h1>${generatedExcuses()}</h1>`;
};
