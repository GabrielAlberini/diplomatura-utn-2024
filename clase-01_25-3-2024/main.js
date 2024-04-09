const $button = document.getElementById("button");
const $body = document.getElementById("body");

$button.addEventListener("click", () => {
  if ($body.classList.contains("dark-mood")) {
    $body.classList.remove("dark-mood");
  } else {
    $body.classList.add("dark-mood");
  }
});
