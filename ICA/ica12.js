// don't need to put event listener in a diff line, make it one long line
document.querySelector("#js-new-quote").addEventListener('click', getQuote);
document.querySelector("#js-tweet").addEventListener('click', () => displayAnswer(current.answer));

var endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

let current = {
    question: "",
    answer: "",
};

async function getQuote() {
    // console.log('test');
    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();
        // console.log();
        displayQuote(json.question);
        displayAnswer("");

        current.question = json.question;
        current.answer = json.answer;

    } catch (err) {
        console.log(err);
        alert('Fail');
    }
}

// async takes us off the bottom to top JS timeline
function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

function displayAnswer(answer) {
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = answer;
}

getQuote();
