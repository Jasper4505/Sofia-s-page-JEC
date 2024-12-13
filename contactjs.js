document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const dateInput = document.getElementById("start");
    const largeInput = document.getElementById("largeInput");

    form.addEventListener("submit", function (event) {
        let isValid = true;
        let errorMessage = "";

        
        const firstName = document.getElementById("fname").value.trim();
        if (firstName === "") {
            errorMessage += "First name is required.\n";
            isValid = false;
        }

        
        const lastName = document.getElementById("lname").value.trim();
        if (lastName === "") {
            errorMessage += "Last name is required.\n";
            isValid = false;
        }

      
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMessage += "Invalid email format.\n";
            isValid = false;
        }

       
        const phone = phoneInput.value.trim();
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
        if (!phoneRegex.test(phone)) {
            errorMessage += "Phone number must match the format 123-456-7890.\n";
            isValid = false;
        }

      
        const reservationDate = new Date(dateInput.value);
        const minDate = new Date(dateInput.min);
        const maxDate = new Date(dateInput.max);
        if (reservationDate < minDate || reservationDate > maxDate) {
            errorMessage += `Reservation date must be between ${minDate.toLocaleDateString()} and ${maxDate.toLocaleDateString()}.\n`;
            isValid = false;
        }

       
        if (largeInput.value.trim().length > 100) {
            errorMessage += "Further enquiries input should not exceed 100 characters.\n";
            isValid = false;
        }

       
        if (!isValid) {
            alert(errorMessage);
            event.preventDefault(); 
        }
    });
});