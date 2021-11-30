function close(){
    let closePopUp = document.getElementById("videoPopUp");
    closePopUp.style.display = "none";
    video.muted = true;
}
document.getElementById("close").addEventListener("click", close)

function show(){
    let showPopUp = document.getElementById("videoPopUp");
    showPopUp.style.display = "inline-block";
    video.muted = false;
}
document.getElementById("previewBtn").addEventListener("click", show);

let video = document.getElementById("video1")

function play(){
    video.play();
}
document.getElementById("play").addEventListener("click", play);


function pause(){
    video.pause();
}
document.getElementById("pause").addEventListener("click", pause);


function volume(){
    video.muted = false;
    }
document.getElementById("volume").addEventListener("click", volume);