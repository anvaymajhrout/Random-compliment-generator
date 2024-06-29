document.addEventListener("DOMContentLoaded", () => {
    const compliments = [
        "You're so funny, even the grumpy cat cracked a smile!",
        "If sarcasm was an Olympic sport, you'd win gold every time!",
        "You're the reason why aliens won't visit us - they're afraid you'll outshine their technology!",
        "You're like a walking, talking meme factory. Everything you say is internet gold!",
        "You're so cool, even ice cubes are jealous!",
        "You're the reason why the phrase 'too much of a good thing' doesn't apply!",
        "If they made an award for being awesome, you'd be a perpetual trophy holder!",
        "You're like a human fireworks display – full of surprises and always lighting up the moment!",
        "You bring more positivity to the room than a double rainbow!",
        "You're strong.",
        "You are a html document with meta tag"
    ];

    const button = document.getElementById('generate-button');
    const complimentDisplay = document.getElementById('compliment');

    button.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * compliments.length);
        complimentDisplay.textContent = compliments[randomIndex];
    });
});
