function Sans() {

	this.text_queue = [];
	this.current_text = "";
	this.text_chars = 0;
	this.prev_text_chars = 0;

	this.text_state = "none";

	this.cps = 25;

}

Sans.prototype.queueText = function(queue) {
	this.showSpeechBubble();
	this.text_queue = this.text_queue.concat(queue);
	this.text_state = "showing_textbox";
	setTimeout(function(self){
		return function(){
			self.text_state = "none";
			self.current_text = self.text_queue.shift();
		}
	}(this), 500);
};

Sans.prototype.advanceTextA = function() {
	if (this.text_state != "showing_textbox" && this.text_chars >= this.current_text.length) {
		this.text_chars = 0;
		if (this.text_queue.length > 0) {
			this.current_text = this.text_queue.shift();
		} else {
			document.getElementById("speech_bubble").innerHTML = "";
			this.current_text = "";
			this.hideSpeechBubble();
			if (maruju.rootScene.play_state == "intro"){
				maruju.rootScene.play_state = "select-menu";
	 			document.getElementById("select_difficulty").className = "";
			} else if (maruju.rootScene.play_state == "preplaying"){
				maruju.rootScene.play_state = "playing";
			} else if (maruju.rootScene.play_state == "gameover" ||
					   maruju.rootScene.play_state == "not-playing"){
		   		maruju.rootScene.play_state = "select-menu";
				document.getElementById("select_difficulty").className = "";
				document.getElementById("gameplay_area").className = "closed";
			}
		}
	}
};

Sans.prototype.advanceTextB = function() {
	this.text_chars = this.current_text.length;
	document.getElementById("speech_bubble").innerHTML = this.current_text;
};

Sans.prototype.showSpeechBubble = function() {
	document.getElementById("speech_bubble").className = "";
};

Sans.prototype.hideSpeechBubble = function() {
	document.getElementById("speech_bubble").className = "closed";
};

Sans.prototype.update = function(delta) {
	if (this.text_chars == this.current_text.length) {}
	else {
		this.text_chars = Math.min(this.current_text.length, this.text_chars + this.cps * delta);
		document.getElementById("speech_bubble").innerHTML =
			this.current_text.substr(0, Math.floor(this.text_chars));

		if (Math.floor(this.text_chars / 2) > Math.floor(this.prev_text_chars / 2)) {
			document.getElementById("se_sans").currentTime = 0;
			document.getElementById("se_sans").play();
		}
		this.prev_text_chars = this.text_chars;
	}
};

var sans = new Sans();



Sans.prototype.sendGameOverMessage = function() {
	var game = maruju.rootScene;
	if (game.difficulty == "easy" && game.final_time < 15) {
		this.queueText([
			"WHAT?! Pathetic!",
			"You'd better practice."
		]);
		var image = document.getElementById('sansimage');
			image.src = 'img/charalaugh.gif';
	} else if (game.difficulty == "easy" && game.final_time >= 60) {
		this.queueText([
			"...not bad. Not bad at all.",
			"This difficulty is too easy for you.",
		]);
		var image = document.getElementById('sansimage');
			image.src = 'img/charawide.png';
	} else if (game.difficulty == "medium" && game.final_time >= 60 &&
			   game.final_time < 180) {
		this.queueText([
			"Ugh, you're pretty go- OK at this.",
			"Kick the difficulty up a notch."
		]);
	} else if (game.difficulty == "medium" && game.final_time >= 180) {
		this.queueText([
			"I... I... don't understand.",
			"How can I be so bad at aiming?"
		]);
		var image = document.getElementById('sansimage');
			image.src = 'img/charawide.png';
	} else if (game.difficulty == "hard" && game.final_time >= 60) {
		this.queueText([
			"You...",
			"You have bested me. You win, Sans.",
			
		]);
		var image = document.getElementById('sansimage');
			image.src = 'img/charawide.png';
	} else {
		
var r_text = new Array ();
r_text[0] = "Heh, heh.";
r_text[1] = ":)";
r_text[2] = "No one is standing between me and the souls now.";
r_text[3] = "Easy.";
r_text[4] = "You might want to retry that.";
r_text[5] = "Good job. Not really.";
r_text[6] = "Looks like I win.";
r_text[7] = ";D";
r_text[8] = "I knew you wouldn't stand a chance.";
var i = Math.floor(9*Math.random())
		this.queueText([
			r_text[i],
		]);
		var image = document.getElementById('sansimage');
			image.src = 'img/charalaugh.gif';
	}
};
