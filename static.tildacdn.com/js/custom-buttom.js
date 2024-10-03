document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.innerHTML = `
        .circle-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 80px !important; /* Увеличен размер кнопки */
            height: 80px !important; /* Увеличен размер кнопки */
            padding: 20px;
            background-color: #2b6658;
            color: #fff;
            border: none;
            border-radius: 50%;
            font-size: 18px; /* Увеличен размер текста */
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            transition: transform 0.4s ease; /* Сделана анимация немного медленнее */
            z-index: 1000;
        }

        .circle-btn:hover {
            transform: scale(1.15); /* Увеличено масштабирование при наведении */
        }

        .circle-btn::before {
            content: '';
            position: absolute;
            width: 140px; /* Увеличен размер пульсации */
            height: 140px; /* Увеличен размер пульсации */
            border: 2px solid #2b6658;
            border-radius: 50%;
            animation: pulse 2s infinite; /* Увеличена длительность анимации */
        }

        @keyframes pulse {
            0% {
                transform: scale(0.9);
                opacity: 0.7;
            }

            50% {
                transform: scale(1.3); /* Сделана пульсация более заметной */
                opacity: 0.5;
            }

            100% {
                transform: scale(0.9);
                opacity: 0.7;
            }
        }
    `;
    document.head.appendChild(style);

    // Добавляем обработчик события клика
    document.querySelector('.circle-btn').addEventListener('click', function () {
        window.open('https://dikidi.net/1696615', '_blank'); // Открываем ссылку в новой вкладке
    });
});
