document.getElementById("spin-button").addEventListener("click", function() {
    let wheel = document.getElementById("wheel");
    let spins = Math.floor(Math.random() * 360); // Random spin degree

    wheel.style.transition = "transform 4s ease-out";
    wheel.style.transform = `rotate(${spins + 3600}deg)`;  // Spin 10 rounds + random

    setTimeout(function() {
        alert("You won!");
        // Update coin count, lucky draw, etc.
    }, 4000);
});
