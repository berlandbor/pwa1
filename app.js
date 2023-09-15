if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function() {
        console.log("Service Worker зарегистрирован!");
    });
}

// Добавленный код для интерактивности
document.getElementById('changeTextBtn').addEventListener('click', function() {
    const textElement = document.getElementById('changeableText');
    textElement.textContent = "Текст был изменен с помощью кнопки!";
});
