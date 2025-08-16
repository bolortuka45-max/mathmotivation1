// Оноо хадгалах функц
window.saveScore = function(studentCode, score) {
  let scoresData = JSON.parse(localStorage.getItem("scoresData")) || {};
  scoresData[studentCode] = score;
  localStorage.setItem("scoresData", JSON.stringify(scoresData));
};
