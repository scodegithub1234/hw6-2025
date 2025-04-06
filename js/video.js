var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
    //load the window
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;

});

//play the video update volume information
document.querySelector("#play").addEventListener("click", function() {
    video.play();
    video.textContent = video.volume * 100 + "%";
    console.log("Play Video");
});

//pause the video
document.querySelector("#pause").addEventListener("click", function() {
    video.pause();
    console.log("Pause Video");
});

//slow the speed to 0.9 and log the new speed to the console
	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate *= 0.9;
		console.log("New speed = " + video.playbackRate);
	});

//increase to the same amount so 1.1 and log the speed to the console 
document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate *= 1.1;
    console.log("New speed = " + video.playbackRate);
});

//skip the video ahead by 10 seconds go back to the beginning if the length is above/equal the video length and log the time
document.querySelector("#skip").addEventListener("click", function() {
    video.currentTime = video.currentTime + 10;
    if (video.duration <= video.currentTime) {
        video.currentTime = 0;
    }
    console.log("Current time = " + video.currentTime);
});

//mute the video 
document.querySelector("#mute").addEventListener("click", function() {
    video.muted = !video.muted;
    if(video.muted){
        this.textContent = "Unmute"
        console.log("Muted Video");
    }
    else{
        this.textContent = "Mute"
        console.log("Unmute Video");
    }
});

//change the volume to match the slider (in percentage) and update the volume information
document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100;
    video.textContent = video.volume * 100 + "%";
});

//use oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

//remove oldSchool class from the video element
document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});