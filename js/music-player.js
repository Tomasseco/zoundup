
// Esperar a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    
    const setupAudioControls = (audioId) => {
        const audio = document.querySelector(`audio[data-id="${audioId}"]`);
        const playBtn = document.querySelector(`img[data-id="${audioId}-play"]`);
        const progressBar = document.querySelector(`input[data-id="${audioId}-progress"]`);

        if (playBtn) {
            playBtn.addEventListener('click', () => {
                if (audio.paused) {
                    audio.play();
                    playBtn.src = 'assets/images/btnplay.png';
                } else {
                    audio.pause();
                    playBtn.src = 'assets/images/btnpause.png';
                }
            });
        }

        if (audio) {
            audio.addEventListener('timeupdate', () => {
                const progress = (audio.currentTime / audio.duration) * 100;
                if (progressBar) progressBar.value = progress;
            });
        }

        if (progressBar) {
            progressBar.addEventListener('input', (e) => {
                const newTime = (e.target.value / 100) * audio.duration;
                audio.currentTime = newTime;
            });
        }
    };

    document.querySelectorAll('audio').forEach((audio) => {
        const audioId = audio.getAttribute('data-id');
        setupAudioControls(audioId);
    });
});

