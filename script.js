var parentDiv = document.createElement("div");
parentDiv.className = "parent";

var display = document.createElement("div");
display.className = "output";

setTimeout(() => {
  setTimeout(() => {
    display.innerHTML = `Happy Independence Day`;
  }, 11000);
  setTimeout(() => {
    display.innerHTML = "1";
  }, 10000);
  setTimeout(() => {
    display.innerHTML = "2";
  }, 9000);
  setTimeout(() => {
    display.innerHTML = "3";
  }, 8000);
  setTimeout(() => {
    display.innerHTML = "4";
  }, 7000);
  setTimeout(() => {
    display.innerHTML = "5";
  }, 6000);
  setTimeout(() => {
    display.innerHTML = "6";
  }, 5000);
  setTimeout(() => {
    display.innerHTML = "7";
  }, 4000);
  setTimeout(() => {
    display.innerHTML = "8";
  }, 3000);
  setTimeout(() => {
    display.innerHTML = "9";
  }, 2000);
  display.innerHTML = "10";
}, 1000);

/*for (var i = 10; i > 0; i--) {
  setTimeout(() => {
    call(i);
  }, 1000);
}

function call(val) {
  var num = val;
  setTimeout(() => {
    display.innerHTML = `${num}`;
  }, 1000);
}*/
parentDiv.append(display);
document.body.append(parentDiv);
