const showcase = document.getElementById("showcase");
let scrolled = false;

// Smooth Scrolling
$("#showcase a, .btn").on("click", function (e) {
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
