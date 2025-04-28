function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)"; // Use lowercase 'style'
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)"; 
}

// typewritter effect

const texts =[
    "Devloper",
    "Youtuber",
    "Designer"
]

let speed = 100;
const textElements = document.querySelector(".typewritter-text");

let textindex =0;
let characterindex =0;

function typewritter()
{
    if(characterindex<texts[textindex].length)
    {
        textElements.innerHTML+=texts[textindex].charAt(characterindex);
        characterindex++;
        setTimeout(typewritter,speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length>0){
        textElements.innerHTML= textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText,50)
    }
    else{
        textindex = (textindex+1)%texts.length;
        characterindex =0;
        setTimeout(typewritter,500)
    }
}

window.onload = typewritter