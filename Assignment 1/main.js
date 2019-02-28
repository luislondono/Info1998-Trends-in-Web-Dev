document.addEventListener("DOMContentLoaded", main);

function main(){
    promptUser(showIceCream)
}

function promptUser(callback){
    delay = window.prompt("Prompt:");
    callback(delay)

}

function showIceCream(time){
    setTimeout(function () {
        document.getElementById('fav-icecream').innerHTML = 'Rocky Road!';},
        time * 1000);
}