document.addEventListener('DOMContentLoaded', () => {
    const teamName = "Tombraider";

    const header = document.getElementById('welcome-header');
    if (header) {
        header.textContent = `Welcome, ${teamName}!`;
    }

    console.log("Congrats, you’re closer to the password! 🚀");
});