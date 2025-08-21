document.addEventListener('DOMContentLoaded', () => {
    const teamName = "YOUR_TEAM_NAME_HERE";

    const header = document.getElementById('welcome-header');
    if (header) {
        header.textContent = `Welcome, ${teamName}!`;
    }

    console.log("Congrats, you’re closer to the password! 🚀");
});