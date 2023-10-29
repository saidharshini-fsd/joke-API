document.addEventListener("DOMContentLoaded", function() {
    const getJokeButton = document.getElementById("get-joke");
    const jokeContainer = document.getElementById("joke");

    getJokeButton.addEventListener("click", () => {
        fetchJoke();
    });

    function fetchJoke() {
        fetch('https://official-joke-api.appspot.com/jokes/programming/random')
            .then(response => response.json())
            .then(data => {
                const jokeData = data[0];
                displayJoke(jokeData);
            })
            .catch(error => {
                console.error('Error fetching joke:', error);
            });
    }

    function displayJoke(jokeData) {
        // Use Bootstrap classes for styling
        jokeContainer.innerHTML = `
            <p class="lead">${jokeData.setup}</p>
            <p class="blockquote-footer">${jokeData.punchline}</p>
        `;
    }
});
