document.querySelectorAll(".card").forEach(function(card) {
  const mainImg = card.querySelector(".main-img");
  const thumbnails = card.querySelectorAll(".gallery img");
  const prevBtn = card.querySelector(".prev");
  const nextBtn = card.querySelector(".next");

  let currentIndex = 0;

  function showImage(index) {
    if (!mainImg || thumbnails.length === 0) return;

    if (index < 0) {
      currentIndex = thumbnails.length - 1;
    } else if (index >= thumbnails.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    mainImg.src = thumbnails[currentIndex].src;
  }

  thumbnails.forEach(function(img, index) {
    img.addEventListener("click", function() {
      showImage(index);
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", function() {
      showImage(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function() {
      showImage(currentIndex + 1);
    });
  }
});