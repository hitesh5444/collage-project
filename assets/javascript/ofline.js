const myTimeout = setTimeout(myGreeting, 10000);

function myGreeting() {
  document.getElementById("light").classList.add("ofline");
  document.getElementById("lightblink").classList.add("ofline");
}
