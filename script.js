document.querySelectorAll(".card").forEach(function(card) {
  const mainImg = card.querySelector(".main-img");
  const thumbnails = card.querySelectorAll(".gallery img");
  const prevBtn = card.querySelector(".prev");
  const nextBtn = card.querySelector(".next");
  const slider = card.querySelector(".slider");

  let currentIndex = 0;
  let startX = 0;

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

  if (slider) {
    slider.addEventListener("touchstart", function(e) {
      startX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", function(e) {
      let endX = e.changedTouches[0].clientX;
      let difference = startX - endX;

      if (difference > 50) {
        showImage(currentIndex + 1);
      }

      if (difference < -50) {
        showImage(currentIndex - 1);
      }
    });
  }
});