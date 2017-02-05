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
			"QUOI? Pathétique.",
			"Tu ferais mieux de t'entrainer."
		]);
		var image = document.getElementById('sansimage');
			image.src = 'img/charalaugh.gif';
	} else if (game.difficulty == "easy" && game.final_time >= 60) {
		this.queueText([
			"...pas mal. Pas mal du tout.",
			"Ce niveau est trop facile pour toi.",
		]);
		var image = document.getElementById('sansimage');
			image.src = 'img/charawide.png';
	} else if (game.difficulty == "medium" && game.final_time >= 60 &&
			   game.final_time < 180) {
		this.queueText([
			"Tu es plutot bon a ça.",
			"Augmente la difficulté d'un cran."
		]);
	} else if (game.difficulty == "medium" && game.final_time >= 180) {
		this.queueText([
			"Je... Je... ne comprends pas.",
			"Comment je peux être aussi mauvais a viser?"
		]);
		var image = document.getElementById('sansimage');
			image.src = 'img/charawide.png';
	} else if (game.difficulty == "hard" && game.final_time >= 60) {
		this.queueText([
			"Tu...",
			"Tu m'as battu. Tu as gagné, Sans...",
			
		]);
		var image = document.getElementById('sansimage');
			image.src = 'img/charawide.png';
	} else {
		
var r_text = new Array ();
r_text[0] = "Heh, heh.";
r_text[1] = ":)";
r_text[2] = "Personne ne se tient entre les âmes et moi maintenant!";
r_text[3] = "Facile.";
r_text[4] = "Tu pourrais vouloir réesayer.";
r_text[5] = "Bon travail. Pas vraiment.";
r_text[6] = "Regarde comme j'ai gagné!";
r_text[7] = ";D";
r_text[8] = "Je savais que tu n'avais pas une seule chance.";
var i = Math.floor(9*Math.random())
		this.queueText([
			r_text[i],
		]);
		var image = document.getElementById('sansimage');
			image.src = 'img/charalaugh.gif';
	}
};
