const riddles = [
    {'title': 'little_house', 'hint': 'This is a house', 'answer': '1234'},
    {'title': 'bart_simpson', 'hint': 'This is a house', 'answer': '1234'},
    {'title': 'our_relationship', 'hint': 'This is a house', 'answer': '1234'},
];
function createRiddleUrls(list){
    let body = document.getElementsByTagName("body")[0];
    for (let i = 0; i < list.length; i++){
        let riddleUrl = "<a href='/riddles/" + list[i]['title'] + ".html'>" + list[i]['title'] + "</a></br>";
        body.innerHTML += riddleUrl;
        console.log(body);
        console.log(riddleUrl);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    createRiddleUrls(riddles);
});