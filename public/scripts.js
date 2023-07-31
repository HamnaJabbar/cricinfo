// scripts.js

const cardContainer = document.querySelector('.card-container');

function scrollCards(direction) {
  const cardWidth = cardContainer.children[0].offsetWidth;
  cardContainer.scrollLeft += cardWidth * direction;
}
