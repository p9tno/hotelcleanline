//- <div class="video video_container_js">
//-     <video class="video__teg video_player_js" loop poster="../../../img/video_bg.webp"></video>
//-     <button class="video__btn video_trigger_js" data-video-src="../../../video/test.mp4"></button>
//- </div>


// .video {
//     position: relative;
//     width: 100%;
//     height: 100%;

//     &:before {
//         content: '';
//         display: block;
//         width: 100%;
//         height: 100%;
//         position: absolute;
//         top: 0;
//         left: 0;
//         background: rgba($main_color, 0.25);
//     }

//     .video__teg {
//         display: block;
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//     }

//     .video__btn {
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         width: 9.1875em;
//         height: 9.1875em;
//         border-radius: 100%;
//         background: $color_info;
//         color: $color_white;
//         border: 0;
//         cursor: pointer;
//         text-decoration: none;

//         font-size: 0.53745em;
//         @media (min-width: 768px) {
//             font-size: 1em;
//             transition: 0.8s;

//             &:hover {
//                 background: $color_warning;
//                 &:before,&:after {
//                     border-color: $color_warning;
//                 }
            
//             }
//         }

//         $wave-duration: 5s;
//         &:after,
//         &:before {
//             content: '';
//             position: absolute;
//             display: block;
//             border-radius: 50%;
//             top: 50%;
//             left: 50%;
//             border: 0.09375em solid;
//             transform: translate(-50%, -50%) scale(1);
//             animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
//             will-change: transform, opacity;
//             pointer-events: none;
//             border-color: $color_info;
//             @media (min-width: 768px) {
//                 transition: border-color 0.8s;
//             }
//         }

//         &:before {
//             width: 9.1875em;
//             height: 9.1875em;
//             opacity: 0;
//             animation: smooth-wave $wave-duration infinite;
//         }

//         &:after {
//             width: 9.1875em;
//             height: 9.1875em;
//             opacity: 0;
//             animation: smooth-wave $wave-duration infinite;
//             animation-delay: $wave-duration / 3;
//         }

//         svg {
//             width: 4.5em!important;
//             height: 4.5em!important;
//             @media (min-width: 768px) {
//                 width: 3em!important;
//                 height: 3em!important;
//             }
//         }

     
//     }
// }

// @keyframes smooth-wave {
//     0% {
//         transform: translate(-50%, -50%) scale(1);
//         opacity: 0;
//         border-width: 0.1875em;
//     }

//     10% {
//         opacity: 0.7;
//         border-width: 0.1875em;
//     }

//     20% {
//         opacity: 0.6;
//         border-width: 0.16875em;
//     }

//     30% {
//         opacity: 0.5;
//         border-width: 0.15em;
//     }

//     40% {
//         opacity: 0.4;
//         border-width: 0.13125em;
//     }

//     50% {
//         opacity: 0.3;
//         border-width: 0.1125em; 
//     }

//     60% {
//         opacity: 0.2;
//         border-width: 0.09375em;
//     }

//     70% {
//         opacity: 0.15;
//         border-width: 0.075em; 
//     }

//     80% {
//         opacity: 0.1;
//         border-width: 0.05625em; 
//     }

//     90% {
//         opacity: 0.05;
//         border-width: 0.0375em; 
//     }

//     100% {
//         transform: translate(-50%, -50%) scale(1.3);
//         opacity: 0;
//         border-width: 0.01875em;
//     }
// }


function initVideoPlayers() {
    const config = {
        containerClass: 'video_container_js',
        triggerClass: 'video_trigger_js',
        playerClass: 'video_player_js'
    };
    
    // Расширенные иконки
    const icons = {
        play: `
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
            </svg>
        `,
        pause: `
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
        `,
        replay: `
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
            </svg>
        `,
        loading: `
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/>
            </svg>
        `
    };
    
    let activeVideo = null;
    const hideTimeouts = new Map();

    $(`.${config.triggerClass}`).each(function() {
        const $trigger = $(this);
        const $container = $trigger.closest(`.${config.containerClass}`);
        const $video = $container.find(`.${config.playerClass}`);
        const video = $video[0];

        if (!video) return;

        // Полностью скрываем триггер для autoplay видео
        if (video.hasAttribute('autoplay')) {
            $trigger.hide(); // Сразу скрываем
            $trigger.html(''); // Очищаем содержимое
        } else {
            $trigger.html(icons.play);
            $trigger.show(); // Убедимся, что не-autoplay видео показывается
        }

        initVideoAttributes(video, $trigger, $container);

        // Для autoplay видео не добавляем обработчик клика
        if (!video.hasAttribute('autoplay')) {
            $trigger.on('click', function() {
                handleVideoClick(video, $trigger, $container, config);
            });
        }

        setupHoverEvents($container, $trigger, video);
        setupVideoEvents(video, $trigger, $container);
    });

    function initVideoAttributes(video, $trigger, $container) {
        if (!video.src && $trigger.data('video-src')) {
            video.src = $trigger.data('video-src');
        }

        if (video.hasAttribute('autoplay')) {
            video.play().catch(e => console.log('Autoplay blocked:', e));
            activeVideo = video;
        }
    }

    function handleVideoClick(video, $trigger, $container, config) {
        // Отменяем предыдущее скрытие
        cancelHideTrigger($trigger);

        if (activeVideo === video) {
            if (!video.paused) {
                video.pause();
                $trigger.stop(true, true).fadeIn(200);
            } else {
                video.play();
                // Скрываем кнопку сразу после нажатия play
                $trigger.stop(true, true).fadeOut(200);
            }
            return;
        }

        if (activeVideo) {
            const $prevContainer = $(activeVideo).closest(`.${config.containerClass}`);
            const $prevTrigger = $prevContainer.find(`.${config.triggerClass}`);
            activeVideo.pause();
            
            // Для предыдущего autoplay видео не показываем триггер
            if (!activeVideo.hasAttribute('autoplay')) {
                $prevTrigger.html(icons.play);
                $prevTrigger.stop(true, true).fadeIn(200);
            }
        }

        video.play();
        activeVideo = video;
        
        $trigger.html(icons.pause);
        // Скрываем кнопку сразу после нажатия play
        $trigger.stop(true, true).fadeOut(200);
    }

    function setupVideoEvents(video, $trigger, $container) {
        video.addEventListener('pause', function() {
            cancelHideTrigger($trigger);
            // Для autoplay видео при паузе показываем кнопку
            if (video.hasAttribute('autoplay')) {
                $trigger.html(icons.play).stop(true, true).fadeIn(200);
            } else {
                $trigger.html(icons.play).stop(true, true).fadeIn(200);
            }
        });

        video.addEventListener('play', function() {
            $trigger.html(icons.pause);
            // Для autoplay видео сразу скрываем триггер при воспроизведении
            if (video.hasAttribute('autoplay')) {
                $trigger.stop(true, true).fadeOut(200);
            } else {
                // Для не-autoplay видео скрываем кнопку при начале воспроизведения
                $trigger.stop(true, true).fadeOut(200);
            }
        });

        video.addEventListener('ended', function() {
            if (!video.hasAttribute('loop')) {
                $trigger.html(icons.replay);
                cancelHideTrigger($trigger);
                // Для autoplay видео показываем кнопку replay при окончании
                $trigger.stop(true, true).fadeIn(200);
            }
            if (activeVideo === video && !video.hasAttribute('loop')) {
                activeVideo = null;
            }
        });

        video.addEventListener('loadstart', function() {
            if (!video.hasAttribute('autoplay')) {
                $trigger.html(icons.loading);
                cancelHideTrigger($trigger);
                $trigger.stop(true, true).fadeIn(200);
            }
        });

        video.addEventListener('canplay', function() {
            if (video.paused && !video.hasAttribute('autoplay')) {
                $trigger.html(icons.play);
            }
        });

        // Для autoplay видео не обрабатываем движение мыши
        if (!video.hasAttribute('autoplay')) {
            $container.on('mousemove', function() {
                if (!video.paused) {
                    $trigger.stop(true, true).fadeIn(200);
                    scheduleHideTrigger($trigger, video);
                }
            });
        }
    }

    function setupHoverEvents($container, $trigger, video) {
        // Для autoplay видео не настраиваем hover события
        if (video.hasAttribute('autoplay')) return;

        $container.on('mouseenter', function() {
            cancelHideTrigger($trigger);
            $trigger.stop(true, true).fadeIn(200);
        });

        $container.on('mouseleave', function() {
            if (video && !video.paused) {
                scheduleHideTrigger($trigger, video, 2000);
            }
        });
    }

    function scheduleHideTrigger($trigger, video, delay = 2000) {
        // Для autoplay видео не планируем скрытие
        if (video.hasAttribute('autoplay')) return;
        
        cancelHideTrigger($trigger);
        
        const timeoutId = setTimeout(function() {
            if (video && !video.paused) {
                $trigger.stop(true, true).fadeOut(200);
            }
            hideTimeouts.delete($trigger[0]);
        }, delay);
        
        hideTimeouts.set($trigger[0], timeoutId);
    }

    function cancelHideTrigger($trigger) {
        const timeoutId = hideTimeouts.get($trigger[0]);
        if (timeoutId) {
            clearTimeout(timeoutId);
            hideTimeouts.delete($trigger[0]);
        }
    }
}

$(document).ready(initVideoPlayers);