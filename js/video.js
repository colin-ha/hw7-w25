var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	document.getElementById("play").addEventListener("click", function(){
		let video = document.getElementById("player1");
		video.play();

		// also update volume WHEN I click play [sic]
		document.getElementById("volume").innerText = video.volume * 100 + "%";
	})

	document.getElementById("pause").addEventListener("click", function(){
		let video = document.getElementById("player1");
		video.pause();
	})

	document.getElementById("slower").addEventListener("click", function(){
		let video = document.getElementById("player1");
		video.playbackRate *= 0.9;
		console.log("New speed: " + video.playbackRate);
	})

	document.getElementById("faster").addEventListener("click", function(){
		let video = document.getElementById("player1");
		video.playbackRate *= (1 + (1/9));
		console.log("New speed: " + video.playbackRate);
	})

	document.getElementById("skip").addEventListener("click", function(){
		let video = document.getElementById("player1");
		video.currentTime += 10;
		if (video.currentTime >= video.duration) {
			video.currentTime = 0;
		}
	})

	document.getElementById("mute").addEventListener("click", function(){
		let video = document.getElementById("player1");
		if (video.muted) {
			video.muted = false;
			this.innerText = "Mute";
		} else {
			video.muted = true;
			this.innerText = "Unmute";
		}
	})

	//on start, make it still show the volume

	document.getElementById("slider").addEventListener("input", function(){
		let video = document.getElementById("player1");
		video.volume = this.value / 100;
		document.getElementById("volume").innerText = video.volume * 100 + "%";
	})

	document.getElementById("vintage").addEventListener("click", function(){
		let video = document.getElementById("player1");
		video.className = "oldSchool video";
	})

	document.getElementById("orig").addEventListener("click", function(){
		let video = document.getElementById("player1");
		video.className = "video";
	})

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

