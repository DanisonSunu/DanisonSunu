// =====================================
// ELEMENTS
// =====================================

const startButton = document.getElementById("startButton");
const status = document.getElementById("status");
const message = document.getElementById("message");
const distanceDisplay = document.getElementById("distance");
const zoneLabel = document.getElementById("zoneLabel");
const radarDot = document.getElementById("radarDot");
const audio = document.getElementById("dialogueAudio");
const screen = document.querySelector(".screen");
const clock = document.getElementById("clock");


// =====================================
// SERVER
// =====================================

const SERVER_URL = "http://10.70.155.63:5000/status";


// =====================================
// SYSTEM STATE
// =====================================

let systemStarted = false;
let lastZone = "away";

let audioPlaying = false;
let queuedAudio = null;


// =====================================
// AUDIO FILES
// =====================================

const farAudio = [
    "audio/Araaa ath.wav",
    "audio/Araa ath 2.wav"
];


const closerAudio = [
    "audio/ivan etha.wav",
    "audio/entha mone.wav",
    "audio/pichakaran.wav"
];


const nearAudio = [
    "audio/kaun hai.wav",
    "audio/pichakaran.wav",
    "audio/vazhi mareda.wav"
];


const tooCloseAudio = [
    "audio/ammayum 1.wav",
    "audio/ammayum 2.wav",
    "audio/ammayum 3.wav",
    "audio/shamless creature.wav"
];


const goingAwayAudio = [
    "audio/iyaaal poyoo.wav",
    "audio/oh god u again_.wav"
];


// =====================================
// RANDOM AUDIO
// =====================================

function getRandomAudio(list) {

    return list[
        Math.floor(Math.random() * list.length)
    ];

}


// =====================================
// PLAY AUDIO
// =====================================

function playDialogue(list) {

    if (!systemStarted) return;


    // Don't interrupt current dialogue

    if (audioPlaying) {

        queuedAudio = list;

        return;

    }


    const selectedAudio = getRandomAudio(list);

    console.log("Playing:", selectedAudio);


    audioPlaying = true;

    audio.src = selectedAudio;
    audio.currentTime = 0;


    audio.play()

        .catch(error => {

            console.log("Audio error:", error);

            audioPlaying = false;

        });

}


// =====================================
// AUDIO FINISHED
// =====================================

audio.addEventListener("ended", () => {

    audioPlaying = false;


    if (queuedAudio !== null) {

        const nextAudio = queuedAudio;

        queuedAudio = null;

        playDialogue(nextAudio);

    }

});


audio.addEventListener("error", () => {

    console.log("Audio file error:", audio.src);

    audioPlaying = false;

});


// =====================================
// START SYSTEM
// =====================================

startButton.addEventListener("click", () => {

    systemStarted = true;


    startButton.textContent = "● SYSTEM ACTIVE";

    startButton.classList.add("active");


    status.textContent =
        "👀 നിരീക്ഷണം ആരംഭിച്ചു...";


    message.textContent =
        "SYSTEM WATCHING...";


    zoneLabel.textContent =
        "SYSTEM ARMED";

});


// =====================================
// CLOCK
// =====================================

function updateClock() {

    const now = new Date();


    const time = now.toLocaleTimeString(

        [],

        {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }

    );


    clock.textContent = "LIVE " + time;

}


updateClock();

setInterval(updateClock, 1000);


// =====================================
// DETERMINE DISTANCE ZONE
// =====================================

function getZone(distance) {

    if (distance > 150) {

        return "away";

    }


    if (distance > 100) {

        return "far";

    }


    if (distance > 70) {

        return "closer";

    }


    if (distance > 40) {

        return "near";

    }


    return "tooClose";

}


// =====================================
// UPDATE RADAR
// =====================================

function updateRadar(zone) {

    // Completely reset radar dot

    radarDot.className = "";

    radarDot.style.display = "";
    radarDot.style.opacity = "";
    radarDot.style.top = "";


    // Remove danger mode

    screen.classList.remove("alert");


    // =================================
    // NOBODY
    // =================================

    if (zone === "away") {

        radarDot.style.display = "none";

        return;

    }


    // =================================
    // MAKE DOT VISIBLE
    // =================================

    radarDot.style.display = "block";

    radarDot.classList.add("visible");


    // =================================
    // FAR
    // 100–150 cm
    // =================================

    if (zone === "far") {

        radarDot.classList.add("far");

        radarDot.style.top = "15%";

    }


    // =================================
    // CLOSER
    // 70–100 cm
    // =================================

    else if (zone === "closer") {

        radarDot.classList.add("closer");

        radarDot.style.top = "30%";

    }


    // =================================
    // MORE CLOSER
    // 40–70 cm
    // =================================

    else if (zone === "near") {

        radarDot.classList.add("near");

        radarDot.style.top = "43%";

    }


    // =================================
    // TOO CLOSE
    // BELOW 40 cm 🔴
    // =================================

    else if (zone === "tooClose") {

        radarDot.classList.add("tooClose");

        // EXACT CENTRE OF RADAR

        radarDot.style.top = "50%";

        // FORCE VISIBILITY

        radarDot.style.display = "block";

        radarDot.style.opacity = "1";


        // DANGER SCREEN

        screen.classList.add("alert");

    }

}


// =====================================
// UPDATE SYSTEM
// =====================================

function updateSystem(distance) {

    // Ignore invalid distance

    if (

        !Number.isFinite(distance) ||

        distance <= 0

    ) {

        return;

    }


    // Display distance

    distanceDisplay.textContent =
        distance.toFixed(1);


    // Get current zone

    const zone =
        getZone(distance);


    // Always update radar

    updateRadar(zone);


    // Website visuals work before start,
    // but audio only after START SYSTEM

    if (!systemStarted) {

        return;

    }


    // Don't repeat dialogue
    // while remaining in same zone

    if (zone === lastZone) {

        return;

    }


    console.log(

        "ZONE:",

        lastZone,

        "→",

        zone,

        "|",

        distance

    );


    // =================================
    // AWAY
    // =================================

    if (zone === "away") {

        status.textContent =
            "👀 ആരെങ്കിലും വരുന്നുണ്ടോ...";


        message.textContent =
            "AREA CLEAR";


        zoneLabel.textContent =
            "NO PRESENCE DETECTED";


        // Only play leaving dialogue
        // when person was previously detected

        if (lastZone !== "away") {

            playDialogue(
                goingAwayAudio
            );

        }

    }


    // =================================
    // FAR
    // 100–150 cm
    // =================================

    else if (zone === "far") {

        status.textContent =
            "👀 ആരാ അത്...";


        message.textContent =
            "SOMETHING IS APPROACHING";


        zoneLabel.textContent =
            "DISTANT PRESENCE DETECTED";


        playDialogue(
            farAudio
        );

    }


    // =================================
    // CLOSER
    // 70–100 cm
    // =================================

    else if (zone === "closer") {

        status.textContent =
            "🤨 ഇവൻ ഏതാ?";


        message.textContent =
            "SUBJECT IS GETTING CLOSER";


        zoneLabel.textContent =
            "PROXIMITY INCREASING";


        playDialogue(
            closerAudio
        );

    }


    // =================================
    // MORE CLOSER
    // 40–70 cm
    // =================================

    else if (zone === "near") {

        status.textContent =
            "😐 ഏയ്... അടുത്തേക്ക് വരണ്ട!";


        message.textContent =
            "PERSONAL SPACE WARNING";


        zoneLabel.textContent =
            "⚠ SUBJECT TOO NEAR";


        playDialogue(
            nearAudio
        );

    }


    // =================================
    // TOO CLOSE
    // BELOW 40 cm 🔴
    // =================================

    else if (zone === "tooClose") {

        status.textContent =
            "🚨 എടാ... എന്താടാ ഇത്?!";


        message.textContent =
            "BACK OFF!!!";


        zoneLabel.textContent =
            "🚨 EXTREME PROXIMITY";


        playDialogue(
            tooCloseAudio
        );

    }


    // Save current zone

    lastZone = zone;

}


// =====================================
// GET SENSOR DATA
// =====================================

async function getSensorData() {

    try {

        const response =
            await fetch(SERVER_URL);


        const data =
            await response.json();


        const distance =
            Number(data.distance);


        updateSystem(distance);

    }


    catch (error) {

        console.log(
            "Waiting for server..."
        );

    }

}


// =====================================
// START SENSOR POLLING
// =====================================

getSensorData();

setInterval(
    getSensorData,
    500
);