// vedios animations

const videos = document.querySelectorAll('.myVideo');

videos.forEach(video => {
    video.addEventListener('mouseover', () => {
        video.play();
    });

    video.addEventListener('mouseout', () => {
        video.pause();
    });
});