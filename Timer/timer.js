const INTERVAL = 1000;
/*
var timeSpan = new Timer(parseInt(document.getElementById("timer").getAttribute("hours")),
 													parseInt(document.getElementById("timer").getAttribute("minutes")),
														parseInt(document.getElementById("timer").getAttribute("seconds")));
														*/
/*
if(Timer.h !== 0 || Timer.m !== 0 || Timer.s !== 0 )
	setInterval(printTime,INTERVAL);
	*/

function Timer(hours, minutes, seconds){
		h = hours;
		m = minutes;
		s = seconds;

		getHours = function(){
			return this.h;
		};


		getMinutes = function(){
			return this.m;
		};


		getSeconds = function(){
			return this.s;
		};

		setSeconds = function(){

			if(this.s === 0)
				this.s = 59;
			else
				this.s -= 1;
		};

		setMinutes = function(){

			if( this.h !== 0 || this.m !== 0){
				if(this.m === 0)
					this.m = 59;
				else
					this.m -= 1;
			}
		};

		setHours = function(){
			if(this.h !== 0)
				this.h -= 1;
		};

		updateTime = function(){
			// Update seconds, then minutes, and then hours
			if(this.minutes !== 0 || this.h !== 0 || this.s !== 0){
				// Seconds are always updated except when minutes, seconds, and hour are all zero
				this.setSeconds();

				// minutes are update is timer has 59 seconds
				if(this.s == 59){
					this.setMinutes();
				}

				// hour is update when minutes = 59 and seconds = 59
				if(this.m == 59 & this.s == 59){
					this.setHours();
				}

			}
		};

		printTime = function(){
			document.getElementById("time").innerHTML = this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds();
			this.updateTime();
		};

		setInterval(printTime,INTERVAL);
	}

	/*var timeSpan = new Timer(parseInt(document.getElementById("timer").getAttribute("h")),
														parseInt(document.getElementById("timer").getAttribute("m")),
															parseInt(document.getElementById("timer").getAttribute("s"));
															*/
