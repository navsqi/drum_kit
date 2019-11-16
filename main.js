var drumButton = document.querySelectorAll("img");

drumButton.forEach(function(el){
    el.addEventListener("click",function(){
        var getClassEl = el.getAttribute("class");

        var tom1 = new Audio("sounds/tom-1.mp3");
        var tom2 = new Audio("sounds/tom-2.mp3");
        var tom3 = new Audio("sounds/tom-3.mp3");
        var tom4 = new Audio("sounds/tom-4.mp3");
        var crash = new Audio("sounds/crash.mp3");
        var kickBass = new Audio("sounds/kick-bass.mp3");
        var snare = new Audio("sounds/snare.mp3");

        buttonAnimation(getClassEl);

        switch (getClassEl) {
            case "w":
                tom1.play();
                break;
            case "a":
                tom2.play();
                break;
            case "s":
                tom3.play();
                break;
            case "d":
                tom4.play();
                break;
            case "j":
                snare.play();
                break;
            case "k":
                crash.play();
                break;
            case "l":
                kickBass.play();
                break;
        }
    });
});


document.addEventListener("keydown",function(e){
    var getKey = e.key;

    var tom1 = new Audio("sounds/tom-1.mp3");
    var tom2 = new Audio("sounds/tom-2.mp3");
    var tom3 = new Audio("sounds/tom-3.mp3");
    var tom4 = new Audio("sounds/tom-4.mp3");
    var crash = new Audio("sounds/crash.mp3");
    var kickBass = new Audio("sounds/kick-bass.mp3");
    var snare = new Audio("sounds/snare.mp3");

    buttonAnimation(getKey);

    switch (getKey) {
        case "w":
            tom1.play();
            break;
        case "a":
            tom2.play();
            break;
        case "s":
            tom3.play();
            break;
        case "d":
            tom4.play();
            break;
        case "j":
            snare.play();
            break;
        case "k":
            crash.play();
            break;
        case "l":
            kickBass.play();
            break;
    }
});


function buttonAnimation (key){
    var getParentEl = document.getElementsByClassName(key)[0].parentElement;

    getParentEl.classList.add("pressed");

    setTimeout(function(){
        getParentEl.classList.remove("pressed");
    },100);
}