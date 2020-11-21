var video;
var volume;
var old;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	volume = document.querySelector("#volume");
	console.log("Starting")
	console.log(video.volume)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	console.log(this)
	video.play()
	volume.innerHTML = (video.volume)*100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	console.log(this)
	video.pause()
});


document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	console.log(this)
	video.playbackRate=video.playbackRate*.9;
	console.log(video.playbackRate)
});


document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	console.log(this)
	video.playbackRate = video.playbackRate/.9;
	console.log(video.playbackRate)
});


document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 5;
	if(video.ended){
		video.currentTime = 0;
		vidoe.play();
	}
	console.log("Current location is " + video.currentTime);
});


document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		console.log("Unmuted")
		video.muted = false;
		document.querySelector("#mute").innerHTML="mute";
	}
	else{
		console.log("Muted")
		video.muted= true;
		document.querySelector("#mute").innerHTML="Unmute"
	}
});


document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log("volumeSlider Video");
	console.log(this)
	console.log(this.value)
	volume.innerHTML = this.value + "%"
	video.volume = (this.value)/100
});


document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
	console.log(this)
	video.classList.add("oldTime")
});


document.querySelector("#original").addEventListener("click", function() {
	console.log("Original Video");
	console.log(this)
	video.classList.remove("oldTime")
});
