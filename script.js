gsap.to("#box1", {rotation:360, x: 480, duration: 3, repeat: -1, yoyo: true});

gsap.to("#box2", {rotation:360, x: 480, duration: 3,repeat: -1, yoyo: true, runBackwards: true});

gsap.to("#box3", {rotation:360, x: 390, duration: 3,repeat: -1, yoyo: true, ease: "back.out(1.7)",});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = form.elements.username.value;
        const password = form.elements.password.value;

        // Check if username and password are correct
        if (username === "sandarbh" && password === "singhal") {
            window.location.href = "home.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});