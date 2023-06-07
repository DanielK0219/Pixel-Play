
  document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector(".btn-search");
    const searchInput = document.querySelector("#game-search");

    searchButton.addEventListener("click", function() {
      const gameName = searchInput.value;
        window.location.href = `${gameName}.html`;
    });
  });

    document.getElementById("myButton").addEventListener("click", function() {
  var dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
});


  const buyButton = document.querySelector(".button1");
    buyButton.addEventListener("click", function() {
      const name = prompt("Please enter your name:");
        const message = `${name}, thank you for your order!`;
        alert(message);
    });