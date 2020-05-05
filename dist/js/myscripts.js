const navbar = document.getElementById("navbar");
let scrolled = false;

// Smooth Scrolling
$("#navbar a, .btn").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 50,
      },
      800
    );
  }
});
