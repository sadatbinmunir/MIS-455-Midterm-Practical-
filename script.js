function welcomeMessage() {
    alert('Welcome to My Store!');
}

function openImage(imageSrc) {
    window.open(imageSrc, '_blank');
}

function sendMessage() {
    var name = document.getElementById("name").value;
    var id = document.getElementById("id").value;
    var message = document.getElementById("message").value;
    
    if (name && id && message) {
        alert("Your message has been sent, " + name + "!");
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill all the fields before sending.");
    }
}
function openImage(imageSrc) {
    window.open(imageSrc, '_blank');
}

function addToCart() {
    alert("Added to Cart");
}
