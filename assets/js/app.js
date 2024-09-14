const imgPerfil = document.querySelector('img');

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("light");
  const thema = document.body.classList.value;
  if (thema == "light") {
    imgPerfil.src = "assets/img/avatar-light.png";
  } else {
    imgPerfil.src = "assets/img/avatar.png";
  }
})

