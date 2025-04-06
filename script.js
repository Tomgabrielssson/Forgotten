function toggleSettings() {
    if (settingsDiv.style.display === 'none' || settingsDiv.style.display === '') {
        settingsDiv.style.display = 'block';
    } else {
        settingsDiv.style.display = 'none';
    }
}

function setMode(mode) {
    document.body.className = mode;
}
const settingsDiv = document.getElementById('settings');
const audioSample = document.getElementById('audioSample');
const volumeLabel = document.getElementById('volume-label');
const sfxSample = document.getElementById('sfx-sample');
const sfxVolumeLabel = document.getElementById('sfx-volume-label');

function toggleSettings() {
    settingsDiv.style.display = (settingsDiv.style.display === 'none' || settingsDiv.style.display === '') 
        ? 'block' : 'none';
}

function setMode(mode) {
    document.body.className = mode;
}

function toggleplay() {
    if (audioSample.paused) {
        audioSample.play();
    } else {
        audioSample.pause();
    }
}

function adjustVolume(value) {
    audioSample.volume = value / 100;
    volumeLabel.textContent = `${value}%`;
}

function toggleMute() {
    audioSample.muted = !audioSample.muted;
    const buttonText = audioSample.muted ? "Unmute" : "Mute";
    document.querySelector('.sound-buttons button:last-child').textContent = buttonText;
}

function playSFX() {
    if (sfxSample.paused) {
        sfxSample.play();
    } else {
        sfxSample.pause();
    }
}

function adjustSFXVolume(value) {
    sfxSample.volume = value / 100;
    sfxVolumeLabel.textContent = `${value}%`;
}

function toggleSFXMute() {
    const muteButton = document.querySelector('.sfx-buttons button:last-child');
    sfxSample.muted = !sfxSample.muted;
    muteButton.textContent = sfxSample.muted ? "Unmute SFX" : "Mute SFX";
}
