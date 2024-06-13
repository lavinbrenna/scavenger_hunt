const RIDDLES = [
    {'title': 'little_house', 'hint': 'This is a house', 'answer': '1234'},
    {'title': 'bart_simpson', 'hint': 'This is a house', 'answer': '1234'},
    {'title': 'our_relationship', 'hint': 'This is a house', 'answer': '1234'},
    {'title': 'one_dollar', 'hint': 'This is a house', 'answer': '1234'},
    {'title': 'demo', 'hint': 'This is a house', 'answer': 1054},
];

function createRiddleUrls(list){
    if (window.location.href === "http://127.0.0.1:5500/riddles/master.html"){
        let body = document.getElementsByTagName("body")[0];
        for (let i = 0; i < list.length; i++){
            let riddleUrl = "<a href='/riddles/" + list[i]['title'] + ".html'>" + list[i]['title'] + "</a></br>";
            body.innerHTML += riddleUrl;
            console.log(body);
            console.log(riddleUrl);
        }
    }
}

document.addEventListener("DOMContentLoaded", function(){
    createRiddleUrls(RIDDLES);
});

function getPageRiddle(list){
    let url = new URL(window.location.href);
    let riddleTitle = url.pathname.split('/').pop().split('.').shift();
    console.log(riddleTitle);
    return list.find(item => item.title === riddleTitle) || null;
}

let hintDiv = document.getElementById('hint');

function checkAnswer(){
    let answerDiv = document.getElementById('answer');
    let sorryTryAgainDiv = document.getElementById('tryAgain');
    let riddle = getPageRiddle(RIDDLES);
    console.log(riddle);
    let guess = parseInt(document.getElementById('guess').value);
    console.log(guess);
    if (guess === riddle.answer){
        answerDiv.classList.remove('hidden');
        sorryTryAgainDiv.classList.add('hidden');
    } else {
        sorryTryAgainDiv.classList.remove('hidden');
        document.getElementById('user_guess').innerHTML = guess;
        answerDiv.classList.add('hidden');
    }
}

function confirmHint() {
    if (confirm('Are you sure you want to see a hint?')) {
        document.getElementById('hint').classList.remove('hidden');
        document.getElementById('hintButton').classList.add('hidden');
    }
}
function showExtraHint(){
    let extraHintDiv = document.getElementById('extraHint');
    let extraHintButton = document.getElementById('extraHintButton');
    extraHintDiv.classList.remove('hidden');
    extraHintButton.classList.add('hidden');
}
