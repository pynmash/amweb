const joke = document.querySelector("#joke")
const jokeBtn = document.querySelector("#joke-btn")


const getJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (error) {
        return "NO JOKES AVAILABLE! SORRY :("
    }

}

const addJoke = async () => {
    const text = await getJoke();
    joke.textContent = text;
}

jokeBtn.addEventListener("click", async () => {
    joke.textContent = "LOADING..."
    addJoke()
});


addJoke();