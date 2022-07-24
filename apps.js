function display(val) {
  document.getElementById("text").value += val;
}

function calculation() {
  let x = document.getElementById("text").value;
  let y = eval(x);
  document.getElementById("text").value = y;
}

function clr() {
  document.getElementById("text").value = "";
}
