document.addEventListener('DOMContentLoaded', () => {
    const teamName = "MLSC. Behold our website and awesomeness.";

    const header = document.getElementById('welcome-header');
    if (header) {
        header.textContent = `Welcome, ${teamName}!`;
    }

    console.log("Congrats, you’re closer to the password! 🚀");
});