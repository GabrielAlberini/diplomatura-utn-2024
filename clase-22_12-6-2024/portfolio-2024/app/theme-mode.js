const $button = document.getElementById("theme-mode");
const $sun = document.getElementById("sun");
const $moon = document.getElementById("moon");
const $body = document.body;

const handleDisplayIcons = () => {
  let displaySun = getComputedStyle($sun).display;
  if (displaySun === "none") {
    $sun.style.display = "block";
  } else {
    $sun.style.display = "none";
  }

  let displayMoon = getComputedStyle($moon).display;
  if (displayMoon === "none") {
    $moon.style.display = "block";
    $button.style.backgroundColor = "rgb(70, 70, 70)";
  } else {
    $moon.style.display = "none";
    $button.style.backgroundColor = "rgb(208, 208, 208)";
  }
};

const handleClassThemeMode = () => {
  // Elimina o agrega la clase dependiendo de que si está o no
  $body.classList.toggle("dark-mode");
  // if ($body.classList.contains("dark-mode")) {
  //   $body.classList.remove("dark-mode");
  // } else {
  //   $body.classList.add("dark-mode");
  // }
};

$button.addEventListener("click", () => {
  handleDisplayIcons();
  handleClassThemeMode();
});
