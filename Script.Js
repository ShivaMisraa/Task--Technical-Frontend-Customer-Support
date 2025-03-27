function selectBundle(id, price) {
    // Update bullet points and selection
    document.querySelectorAll(".bundle-option").forEach((option) => {
      option.classList.remove("selected");
    });
    event.currentTarget.classList.add("selected");

    // Hide all options
    document.querySelectorAll(".size-color-section").forEach((section) => {
      section.classList.add("hidden");
    });

    // Show selected option
    document.getElementById("options-" + id).classList.remove("hidden");

    // Update total price
    document.getElementById("total").textContent =
      "$" + price.toFixed(2) + " USD";
  }

  // Initialize with no selection
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("total").textContent = "$0.00 USD";
    
    // Add to cart button animation
    const addToCartBtn = document.getElementById('addToCartBtn');
    const successMessage = document.getElementById('successMessage');
    
    document.getElementById('addToCartBtn').addEventListener('click', function() {
        const successMessage = document.getElementById('successMessage');
        successMessage.classList.add('show');
        
        setTimeout(() => {
          successMessage.classList.remove('show');
        }, 2000);
      });
  }); 