let mesElem = document.querySelectorAll("#imgMin>img")

for(let i=0; i<mesElem.length; i++) {
  mesElem[i].addEventListener('click', () => {
    document.getElementById('balImgPrinc').src=mesElem[i].src
  })
}