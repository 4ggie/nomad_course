const clock = document.querySelector("h2#clock");

function sayHello() {
  const date = new Date();
  const hour = String(date.getHours());
  const min = String(date.getMinutes());
  const sec = String(date.getSeconds());

  clock.innerText = `${hour.padStart(2,"0")}:${min.padStart(2,"0")}:${sec.padStart(2,"0")}`;
}
sayHello();
setInterval(sayHello, 1000);