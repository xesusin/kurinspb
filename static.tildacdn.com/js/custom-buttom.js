const style = document.createElement('style');
style.innerHTML = `
            .circle-btn {
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 100px !important;
                height: 100px !important;
                background-color: #2b6658;
                color: #fff;
                border: none;
                border-radius: 50%;
                font-size: 18px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                transition: transform 0.4s ease;
                z-index: 1000;
            }

            .circle-btn:hover {
                transform: scale(1.15);
            }

            .circle-btn::before {
                content: '';
                position: absolute;
                width: 140px;
                height: 140px;
                border: 2px solid #2b6658;
                border-radius: 50%;
                animation: pulse 2s infinite;
            }

            @keyframes pulse {
                0% {
                    transform: scale(0.9);
                    opacity: 0.7;
                }

                50% {
                    transform: scale(1.3);
                    opacity: 0.5;
                }

                100% {
                    transform: scale(0.9);
                    opacity: 0.7;
                }
            }

            /* Адаптация для мобильных устройств */
            @media (max-width: 768px) {
                .circle-btn {
                    width: 80px !important;
                    height: 80px !important;
                    font-size: 16px;
                }

                .circle-btn::before {
                    width: 100px;
                    height: 100px;
                }
            }

            @media (max-width: 480px) {
                .circle-btn {
                    width: 60px !important;
                    height: 60px !important;
                    font-size: 14px;
                }

                .circle-btn::before {
                    width: 80px;
                    height: 80px;
                }
            }

            /* Специальные настройки для iPhone */
            @media (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
                .circle-btn {
                    width: 60px !important;
                    height: 60px !important;
                    font-size: 14px;
                }

                .circle-btn::before {
                    width: 80px;
                    height: 80px;
                }
            }
        `;
document.head.appendChild(style);

// Добавляем обработчик события клика
document.querySelector('.circle-btn').addEventListener('click', function () {
    window.open('https://dikidi.net/1696615', '_blank');
});
