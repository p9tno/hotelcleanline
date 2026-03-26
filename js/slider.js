$(document).ready(function() {


    const firstscreen = new Swiper('.firstscreen_swiper_js', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1500,
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
          delay: 6000,
        },
        simulateTouch: false,

        navigation: {
            nextEl: '.icon_arrow_right_sm',
            prevEl: '.icon_arrow_left_sm',
        },
        pagination: {
            el: '.firstscreen_pagination_js',
            clickable: true,
        },
    });

    let speed = 3000;
    let delay = 5000;

    const media = new Swiper('.media_swiper_js', {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: speed,
        loop: false,
        autoplay: {
            delay: delay,
        },
        
        navigation: {
            nextEl: '.icon_arrow_right_sm',
            prevEl: '.icon_arrow_left_sm',
        },
        pagination: {
            el: '.media_pagination_js',
            clickable: true,
        },
        
        breakpoints: {
            768: {
                spaceBetween: 24,
                slidesPerView: 2,
                simulateTouch: false,
            },

        }
    });

    const partners = new Swiper('.partners_swiper_js', {
        slidesPerView: 2,
        spaceBetween: 6,
        speed: speed,
        loop: false,
        autoplay: {
            delay: delay,
        },
        
        navigation: {
            nextEl: '.icon_arrow_right_sm',
            prevEl: '.icon_arrow_left_sm',
        },

        pagination: {
            el: '.partners_pagination_js',
            clickable: true,
        },
        
        breakpoints: {
            768: {
                spaceBetween: 40,
                slidesPerView: 4,
                simulateTouch: false,
            },

        }
    });

    const hscroll = new Swiper('.hscroll_swiper_js', {
        slidesPerView: 1,
        spaceBetween: 6,
        speed: 40000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            waitForTransition: false,
        },
        allowTouchMove: false,
        simulateTouch: false,
        watchSlidesProgress: true,
        updateOnWindowResize: true,
        observer: true,
        observeParents: true,

        breakpoints: {
            768: {
                spaceBetween: 16,
                slidesPerView: 1,
            },

        },
        
        on: {
            init: function() {
                // console.log('Swiper initialized');
                this.autoplay.start();
            },
            transitionStart: function() {
                // console.log('Transition STARTED');
            },
            transitionEnd: function() {
                // console.log('Transition ENDED - restarting autoplay');
                // КРИТИЧЕСКИ ВАЖНО: принудительно перезапускаем
                this.autoplay.stop();
                this.autoplay.start();
            },
            // autoplayStop: function() {
            //     console.log('Autoplay STOPPED - restarting');
            //     setTimeout(() => {
            //         this.autoplay.start();
            //     }, 100);
            // }
        }
    });

    const certificate = new Swiper('.certificate-swiper-js', {
        slidesPerView: 2,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        // autoplay: {
        //   delay: 5000,
        // },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.certificate__dotted',
            clickable: true,
        },

        breakpoints: {
            768: {
                spaceBetween: 24,
                slidesPerView: 3,
            },

        }
    });

    const ourhouses = new Swiper('.ourhouses-swiper-js', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        // autoplay: {
        //   delay: 5000,
        // },

        navigation: {
            nextEl: '.media__arrow .icon_arrow_right',
            prevEl: '.media__arrow .icon_arrow_left',
        },
        pagination: {
            el: '.ourhouses__dotted',
            clickable: true,
        },
        initialSlide: 0,



        breakpoints: {
            768: {
                spaceBetween: 27,
                slidesPerView: 4,
            },

        }
    });

    const data = new Swiper('.data-swiper-js', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 500,
        // loop: true,
        // autoplay: {
        //   delay: 5000,
        // },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.data__dotted',
        },

        breakpoints: {
            768: {
                spaceBetween: 80,
                slidesPerView: 3,
            },

        }
    });

    const teamImgSlider = new Swiper('.teamImgSlider-swiper-js', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        // autoplay: {
        //   delay: 5000,
        // },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.teamImgSlider__dotted',
        },

        breakpoints: {
            768: {
                spaceBetween: 74,
                slidesPerView: 3,
            },

        }
    });

    const blog = new Swiper('.blog-swiper-js', {
        slidesPerView: 1,
        speed: 500,
        loop: true,
        // autoplay: {
        //   delay: 5000,
        // },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.blog__dotted',
            // clickable: true,
        },

        spaceBetween: 10,

        breakpoints: {
            768: {
                spaceBetween: 42,
                slidesPerView: 2,
            },

        }
    });

    const singleSlider = new Swiper('.single-swiper-js', {
        slidesPerView: 1,
        speed: 500,
        // loop: true,
        // autoplay: {
        //   delay: 5000,
        // },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.singleSlider__dotted',
            clickable: true,
        },

    });

    const largeSlider = new Swiper('.largeSlider-swiper-js', {
        slidesPerView: 1,
        speed: 500,
        // loop: true,
        // autoplay: {
        //   delay: 5000,
        // },
        loop: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.largeSlider__dotted',
            clickable: true,
        },

    });

    // BEGIN TEAM
    const teamSlider = new Swiper('.team-swiper-js', {
        slidesPerView: 2,
        speed: 500,
        loop: true,
        // centeredSlides: true,
        freeMode: true,
        watchSlidesProgress: true,

        breakpoints: {
            768: {
                slidesPerView: 4,
            },
        }
    });


    const teamPreview = new Swiper('.teamPreview-swiper-js', {
        slidesPerView: 1,
        speed: 500,
        loop: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },

        allowTouchMove: false,

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.teamSlider__dotted',
            clickable: true,
        },

        thumbs: {
            swiper: teamSlider,
        },

        slideToClickedSlide: true,
        autoHeight: true,

    });
    teamPreview.on('slideChange', function (e) {
        // console.log('slide changed');
        // console.log(e.activeIndex);
    });

    // END TEAM

    const videoWork = new Swiper('.videoWork-swiper-js', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        // autoplay: {
        //   delay: 5000,
        // },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.videoWork__dotted',
            clickable: true,
        },

        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 56,
            },
        }

    });

    const gifts = new Swiper('.gifts-swiper-js', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        // autoplay: {
        //   delay: 5000,
        // },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.gifts__dotted',
            clickable: true,
        },

        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
        }

    });

    const stages = new Swiper('.stages-swiper-js', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        // autoplay: {
        //   delay: 5000,
        // },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },
        pagination: {
            el: '.stages__dotted',
            clickable: true,
        },

        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 60,
            },
        }

    });

    const logos = new Swiper('.logos-swiper-js', {
        slidesPerView: 3,
        speed: 500,
        autoplay: {
          delay: 5000,
        },

        breakpoints: {
            768: {
                slidesPerView: 8,
            },
        }
    });

    // logos.on('slideChange', function () {
    //     console.log('slide changed');
    //
    //     let leftSlide = logos.activeIndex;
    //     let rightSlide = logos.activeIndex + 2;
    //     leftSlide.add('left_slide');
    //     rightSlide.add('right_slide');
    //
    //     console.log(leftSlide);
    //     console.log(rightSlide);
    //     console.log(logos.activeIndex);
    //     console.log(logos.$el);
    // });

    // let activeSlide = swiper.activeIndex;


    // BEGIN project
    const project_sm = new Swiper(".project-swiper-sm-js", {
        spaceBetween: 6,
        slidesPerView: 2,
        // allowTouchMove: false,
        // clickable: false,
        centeredSlides: true,
        loop: true,


        freeMode: true,
        watchSlidesProgress: true,

        breakpoints: {
            768: {
                slidesPerView: 7,
                spaceBetween: 12,
                centeredSlides: false,
                // allowTouchMove: false,
            },
        }

    });

    const project = new Swiper(".project-swiper-js", {
        slidesPerView: 1,
        // allowTouchMove: false,
        loop: true,

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },

        pagination: {
            el: '.project__dotted',
        },

        thumbs: {
            swiper: project_sm,
        },
    });
    // END project

    const otherProjects = new Swiper(".otherProjects-swiper-js", {
        slidesPerView: 1,
        allowTouchMove: false,
        loop: true,

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },

        pagination: {
            el: '.otherProjects__dotted',
        },


    });


    function addSliders() {

        let projects = $('.projects-swiper-js');

        projects.each(function() {
            let options = $(this).data('options') || {};
            let $parent = $(this).parent();
            let swiperDefaults = {

                loop: true,
                slidesPerView: 1,
                allowTouchMove: false,

                pagination: {
                    el: $parent.find('.projects__dotted')[0],
                },

                navigation: {
                    nextEl: $parent.find('.icon_arrow_right')[0],
                    prevEl: $parent.find('.icon_arrow_left')[0],
                },

                thumbs: {
                    swiper: {
                        el: $parent.closest('.projects__item').find('.projects-swiper-sm-js')[0],
                        loop: true,
                        spaceBetween: 6,
                        slidesPerView: 2,
                        centeredSlides: true,

                        freeMode: true,
                        watchSlidesProgress: true,

                        breakpoints: {
                            768: {
                                spaceBetween: 15,
                                centeredSlides: false,
                            },
                        }
                    }
                },

            };

            let swiperOptions = $.extend(swiperDefaults, options),
            mySwiper = new Swiper(this, swiperOptions);

            // console.log($parent);
            // console.log($parent.find('.projects__dotted')[0]);
            // console.log($parent.closest('.projects__item').find('.projects-swiper-sm-js')[0]);
        });

    }
    addSliders();

    function addSteps() {

        let steps = $('.steps-swiper-js');

        steps.each(function() {
            let options = $(this).data('options') || {};
            let $parent = $(this).parent().parent();
            let swiperDefaults = {

                slidesPerView: 1,
                spaceBetween: 10,
                speed: 500,
                loop: true,

                pagination: {
                    el: $parent.find('.steps__dotted')[0],
                },

                navigation: {
                    nextEl: $parent.find('.icon_arrow_right')[0],
                    prevEl: $parent.find('.icon_arrow_left')[0],
                },

                breakpoints: {
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 36,
                    },
                }


            };

            let swiperOptions = $.extend(swiperDefaults, options),
            mySwiper = new Swiper(this, swiperOptions);

            // console.log($parent);
            // console.log($parent.find('.steps__dotted')[0]);
            // console.log($parent.closest('.projects__item').find('.projects-swiper-sm-js')[0]);
        });

    }
    addSteps();

});
