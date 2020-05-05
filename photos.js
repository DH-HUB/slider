// Initialisation et exécution du showSlide () pour donner à la boîte un état par défaut

let slideIndex = 1;
showSlide(slideIndex);

/*Fonctionnalité du contenu cliquable de l'aperçus, points, contrôles et le bouton de fermeture */

function openBox() {
  document.getElementById('box').style.display = 'block';
}

function closeBox() {
  document.getElementById('box').style.display = 'none';
};

// Nouvelles valeurs au slidIndex

function changeSlide(n) {
  showSlide(slideIndex += n);
};

function toSlide(n) {
  showSlide(slideIndex = n);
};

//  Mode d'affichage de la diapositive 



function showSlide(n) {
  const slides = document.getElementsByClassName('slide');
  let modalPreviews = document.getElementsByClassName('modal-preview');

  if (n > slides.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides.length;
  };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
    
  };
  setTimeout(function(){
  slides[slideIndex - 1].style.display = 'block';
  modalPreviews[slideIndex - 1].className += ' active'; }, 50);

};