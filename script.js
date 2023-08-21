// Add event listeners to the radio inputs
document.addEventListener('DOMContentLoaded', function() {
    const ratingInputs = document.querySelectorAll('input[type="radio"]');
    const notification = document.querySelector('#notification');
    const form = document.querySelector('form');
    const firstCard = document.querySelector('#first-card');
    const secondCard = document.querySelector('#second-card');
    const urlParams = new URLSearchParams(window.location.search);
    const rating = urlParams.get('rating');
    
    
    if(rating) {
        notification.innerHTML = "You selected " + rating + " out of 5";
    }
    ratingInputs.forEach(input => {
        input.addEventListener('change', function() {
            // Remove the "checked" class from all labels
            document.querySelectorAll('.rating-label').forEach(label => {
                label.classList.remove('checked');
            });
            
            // Add the "checked" class to the parent label
            const label = input.parentElement;
            label.classList.add('checked');
        });
    });
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            let selectedValue = null;

            ratingInputs.forEach(ratingInput => {
                if (ratingInput.checked) {
                    selectedValue = ratingInput.value;
                }
            });

            if(selectedValue !== null) {
                window.location.href = "thank-you.html?rating=" + selectedValue;
            } else {
                alert("Please select a rating value!");
            }

        });
    }

});
