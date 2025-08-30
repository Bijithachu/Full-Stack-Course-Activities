function validateForm() {
    // Get input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Clear previous error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";

    // Validate name
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        return false;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email format";
        return false;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    return true;
}