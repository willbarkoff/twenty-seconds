const times = [
	"twenty",
	"nineteen",
	"eighteen",
	"seventeen",
	"sixteen",
	"fifteen",
	"fourteen",
	"thirteen",
	"twelve",
	"eleven",
	"ten",
	"nine",
	"eight",
	"seven",
	"six",
	"five",
	"four",
	"three",
	"two",
	"one",
	"zero"
]

let eventTimer;

const $start = document.querySelector("#start")
const $timeRemaining = document.querySelector("#time-remaining")
const $intro = document.querySelector("#intro")
const $timer = document.querySelector("#timer")
const $done = document.querySelector("#done")
const $startOver = document.querySelector("#start-over")

const originalTitle = document.title;

let currentTime = 0;

const incrementTime = function () {
	currentTime++;
	setTimeRemainingText();
	if (currentTime == 21) {
		clearInterval(eventTimer)
		$timer.classList.add("hidden")
		$done.classList.remove("hidden")
		document.title = originalTitle;
	}
}

const setTimeRemainingText = function () {
	$timeRemaining.textContent = times[currentTime];
	document.title = times[currentTime];
}

$start.addEventListener('click', function () {
	$intro.classList.add("hidden")
	$timer.classList.remove("hidden")
	setTimeRemainingText();
	eventTimer = setInterval(incrementTime, 1000)
})

$startOver.addEventListener('click', function () {
	currentTime = 0;
	$done.classList.add("hidden")
	$intro.classList.remove("hidden")
})