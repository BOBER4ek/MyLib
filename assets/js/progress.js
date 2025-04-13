function updateProgressBar() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progressPercent = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width = `${progressPercent}%`;
}

// Обновлять ленту прогресса при каждом скролле
window.onscroll = updateProgressBar;