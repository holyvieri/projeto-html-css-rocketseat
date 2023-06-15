function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, adcionar a img light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se n tiver no light, manter a img padrao
    img.setAttribute("src", "./assets/avatar.png")
  }
}
