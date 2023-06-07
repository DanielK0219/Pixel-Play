
  function submitComment() {
    // Get the name and comment text from the inputs
    var name = document.getElementById("name-input").value;
    var commentText = document.getElementById("comment-input").value;
    
    // Create a new comment element
    var newComment = document.createElement("div");
    newComment.classList.add("comment");
    newComment.textContent = name + ": " + commentText;
    
    // Append the new comment to the comment list
    var commentList = document.getElementById("comment-list");
    commentList.appendChild(newComment);
    
    // Clear the inputs
    document.getElementById("name-input").value = "";
    document.getElementById("comment-input").value = "";
  }
  
    const buyButton = document.querySelector(".button");
    buyButton.addEventListener("click", function() {
      const name = prompt("Please enter your name:");
      if (name) {
        const message = `${name}, thank you for your order!`;
        alert(message);
      }
    });