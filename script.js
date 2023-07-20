function updateCardLayout() {
  const container = document.getElementById("cardContainer");
  const cards = container.getElementsByClassName("card");
  
  const availableWidth = container.clientWidth;
  const cardWidth = 220; // Including margin
  const cardsPerRow = Math.floor(availableWidth / cardWidth);
  
  const newCardCount = Math.min(cardsPerRow, 5); // Set the maximum cards per row to 5
  
  for (let i = 0; i < cards.length; i++) {
    if (i < newCardCount) {
      cards[i].classList.remove("hidden");
    } else {
      cards[i].classList.add("hidden");
    }
  }
}

// Call the function on page load and on window resize
window.addEventListener("resize", updateCardLayout);
window.addEventListener("load", updateCardLayout);
