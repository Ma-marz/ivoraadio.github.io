let lastPlayedSongs = [];
let lastPlayedAdds = [];
let audioFiles = []; // Array to store audio file names
let songAudioFiles = [];
let addAudioFiles = [];
let addFrequencyMax = 5
let counterToAddBreak = Math.floor(Math.random() * addFrequencyMax);

// Function to fetch and process JSON data
async function fetchAudioList() {
    try {
        const response = await fetch('audioFiles.json'); // Path to your JSON file
        if (!response.ok) {
            throw new Error('Failed to fetch audio files');
        }
        audioFiles = await response.json();

        for (let a in audioFiles) {
            let audio = audioFiles[a]
            if (audio.startsWith("audio_adds")) {
                addAudioFiles.push(audio)
            } else {
                songAudioFiles.push(audio)
            }
        }

        playRandomAudio();
    } catch (error) {
        console.error('Error fetching audio files:', error);
    }
}

// Function to play random audio
function playRandomAudio() {
    const audioPlayerMain = document.getElementById('audioPlayerMain');
    const audioTitleMain = document.getElementById('currentSongMain');
    const audioPlayerRight = document.getElementById('audioPlayerRight');
    const audioTitleRight = document.getElementById('currentSongRight');

    //
    let newIndex = -1;
    let nextAudio = "";

    counterToAddBreak--;
    if (counterToAddBreak <= 0) {
        counterToAddBreak = Math.floor(Math.random() * addFrequencyMax);

        while (newIndex === -1 || addAudioFiles[newIndex] in lastPlayedAdds) {
            newIndex = Math.floor(Math.random() * addAudioFiles.length);
        }
        nextAudio = addAudioFiles[newIndex];
        lastPlayedAdds.push(nextAudio);
        if (lastPlayedAdds.length > addAudioFiles.length * 0.7) {
            lastPlayedAdds.shift();
        }
    } else {
        while (newIndex === -1 || songAudioFiles[newIndex] in lastPlayedSongs) {
            newIndex = Math.floor(Math.random() * songAudioFiles.length);
        }
        nextAudio = songAudioFiles[newIndex];
        lastPlayedSongs.push(nextAudio);
        if (lastPlayedSongs.length > songAudioFiles.length * 0.7) {
            lastPlayedSongs.shift();
        }
    }

    let audio_src = `audio/${nextAudio}`;
    let audio_name = nextAudio.split('.')[0];
    if (audio_name.startsWith("audio_adds")) {
        audio_name = "reklaamipaus"
    }

    // Set source of the audio player
    audioPlayerMain.src = audio_src;
    audioPlayerMain.type = 'audio/mpeg'; // Adjust type as needed
    audioTitleMain.textContent = audio_name;

    audioPlayerRight.src = audio_src;
    audioPlayerRight.type = 'audio/mpeg'; // Adjust type as needed
    audioTitleRight.textContent = audio_name;

    // Event listener for ended event to play the next random audio
    audioPlayerMain.onended = playRandomAudioMain;
    audioPlayerRight.onended = playRandomAudioRight;

}

function playRandomAudioMain() {
    const audioPlayerMain = document.getElementById('audioPlayerMain');

    playRandomAudio()

    audioPlayerMain.load();
    audioPlayerMain.play();
}

function playRandomAudioRight() {
    const audioPlayerRight = document.getElementById('audioPlayerRight');

    playRandomAudio()

    audioPlayerRight.load();
    audioPlayerRight.play();
}

// Fetch audio list and start playing
document.addEventListener('DOMContentLoaded', fetchAudioList);
