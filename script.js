function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
}