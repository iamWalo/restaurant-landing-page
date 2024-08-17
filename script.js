window.addEventListener('load', () => {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
});
// vedios animations
const videos = document.querySelectorAll('.myVideo');

// إضافة أحداث لكل فيديو
videos.forEach(video => {
    video.addEventListener('mouseover', () => {
        video.play();
    });

    video.addEventListener('mouseout', () => {
        video.pause();
        video.currentTime = 0; // إعادة الفيديو إلى البداية
    });
});
