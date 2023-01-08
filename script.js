function toggleMode() {
    const html = document.documentElement
    const img = document.querySelector("#profile img")

    html.classList.toggle("light")

    if(html.classList.contains("light")) {
        img.setAttribute("src", "./assets/carol_oculos_sol.png")
        img.setAttribute("alt", "Foto de Carol Pascott com cabelo  cacheado e solto ao vento, usando óculos de sol e com uma lagoa ao fundo")

    }
    else {
        img.setAttribute("src", "https://github.com/carolpascott.png")
        img.setAttribute("alt", "Foto de Carol Pascott com cabelo  cacheado e solto, usando óculos e blusa preta")

    }
}