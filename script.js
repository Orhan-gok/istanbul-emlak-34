document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      console.log("WhatsApp butonuna tıklandı");
    });
  });

  const cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  });

  const galleryImages = document.querySelectorAll(".gallery img");

  galleryImages.forEach(function (img) {
    img.addEventListener("click", function () {
      const card = this.closest(".card");
      const mainImage = card.querySelector(".main-img");

      mainImage.src = this.src;
    });
  });
});