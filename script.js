document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", function () {
    let mainImage = this.closest(".card").querySelector(".main-img");
    mainImage.src = this.src;
  });
});