jQuery.noConflict();

jQuery(document).ready($ => {
    /* Mobile detect */
    let desktop_nav;

    let height_line;
    let init_YTPlayer;
    let init_background_image;
    let init_classic_menu;
    let init_classic_menu_resize;
    let init_count_number;
    let init_lightbox;
    let init_map;
    let init_navigation_scroll;
    let init_progress_bar;
    let init_skrollr;
    let init_sliders;
    let init_wow;
    let mobileTest;
    let mobile_nav;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        mobileTest = true;
        $("html").addClass("mobile");
    } else {
        mobileTest = false;
        $("html").addClass("no-mobile");
    }

    /* Page Loader */

    $(window).load(() => {
        $('.page-loader').delay(600).fadeOut('slow');
    });

    /* Adding Background Image */

    init_background_image = () => {
        let pageSection;
        pageSection = $(".bg-img, .parallax");
        pageSection.each(function() {
            if ($(this).attr("data-background")) {
                $(this).css("background-image", `url(${$(this).data("background")})`);
            }
        });
    }
    ;

    init_background_image();

    /* skrollr */

    init_skrollr = () => {
        if (($(window).width() >= 1024) && (mobileTest === false)) {
            skrollr.init({
                forceHeight: false,
                smoothScrolling: false
            });
        }
    }
    ;

    init_skrollr();

    /* Carousel Sliders */

    init_sliders = () => {
        $(".fullwidth-slider").owlCarousel({
            autoPlay: 8000,
            slideSpeed: 350,
            singleItem: true,
            autoHeight: true,
            navigation: true,
            pagination: true,
            addClassActive: true,
            navigationText: ["<span class='angle'></span>", "<span class='angle'></span>"],

            /* Animation on slider */
            afterInit() {
                let animationElements;
                animationElements = $(".owl-item.active .animate-e");
                $(window).load(() => {
                    animationElements.each(function() {
                        let effect;
                        effect = $(this).attr('data-effect');
                        $(this).addClass(`animated ${effect}`);
                    });
                });
            },

            beforeMove() {
                let animationElements;
                animationElements = $(".owl-item.active .animate-e");
                animationElements.each(function() {
                    let effect;
                    effect = $(this).attr('data-effect');
                    $(this).removeClass(`animated ${effect}`);
                });
            },

            afterMove() {
                let animationElements;
                animationElements = $(".owl-item.active .animate-e");
                animationElements.each(function() {
                    let effect;
                    effect = $(this).attr('data-effect');
                    $(this).addClass(`animated ${effect}`);
                });
            }

        });

        $(".fullwidth-testimotal-slider").owlCarousel({
            slideSpeed: 350,
            singleItem: true,
            autoHeight: true,
            navigation: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            pagination: true,
            navigationText: ["<span class='angle'></span>", "<span class='angle'></span>"]
        });

        $(".small-carousel").owlCarousel({
            autoPlay: 2500,
            stopOnHover: true,
            items: 6,
            itemsDesktop: [1199, 4],
            itemsTabletSmall: [768, 3],
            itemsMobile: [480, 2],
            pagination: false,
            navigation: false
        });

        $(".work-full-slider").owlCarousel({
            slideSpeed: 350,
            singleItem: true,
            autoHeight: true,
            navigation: true,
            navigationText: ["<span class='angle'></span>", "<span class='angle'></span>"]
        });

        $(".content-slider").owlCarousel({
            slideSpeed: 350,
            singleItem: true,
            autoHeight: true,
            navigation: true,
            navigationText: ["<span class='angle'></span>", "<span class='angle'></span>"]
        });

        $(".team-slider").owlCarousel({
            autoPlay: false,
            stopOnHover: true,
            slideSpeed: 350,
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 2],
            itemsMobile: [480, 1],
            autoHeight: true,
            navigation: false,
            pagination: true
        });

        $(".about-slider").owlCarousel({
            slideSpeed: 350,
            singleItem: true,
            autoHeight: true,
            navigation: false,
            pagination: true
        });

    }
    ;

    init_sliders();

    /* Progress Bar */

    init_progress_bar = () => {
        $(".progress-bar").appear(function() {
            let addPerstange;
            let count;
            let progressContainer;
            let progressPerstange;
            let step;
            progressContainer = $(this);
            progressPerstange = progressContainer.attr("data-progress");
            step = 5;
            count = 30;
            addPerstange = () => {
                progressContainer.css("width", `${count}%`);
                if (count < progressPerstange) {
                    count += step;
                    setTimeout(addPerstange, 40);
                }
            }
            ;
            addPerstange();
        });
    }
    ;

    if (($(window).width() >= 1024) && (mobileTest === false)) {
        init_progress_bar();
    }

    /* Navigation Panel */

    height_line = (height_object, height_donor) => {
        height_object.height(height_donor.height());
        height_object.css({
            'line-height': `${height_donor.height()}px`
        });
    }
    ;

    mobile_nav = $('.navbar-mobile');

    desktop_nav = $('.navbar-desktop');

    init_classic_menu_resize = () => {
        $('.mobile-on .navbar-desktop > ul').css('max-height', `${$(window).height() - $('.main-nav').height() - 20}px`);
        if ($(window).width() <= 1024) {
            $('.main-nav').addClass('mobile-on');
        } else if ($(window).width() > 1024) {
            $('.main-nav').removeClass('mobile-on');
            desktop_nav.show();
        }
    }
    ;

    init_classic_menu = () => {
        let check_scroll;
        let menuHasSub;
        let menuThisLi;
        check_scroll = () => {
            if ($(window).scrollTop() > 10) {
                $('.js-transparent').removeClass('transparent');
                $('.main-nav, .nav-logo-wrap .logo, .navbar-mobile').addClass('small-height');
            } else {
                $('.js-transparent').addClass('transparent');
                $('.main-nav, .nav-logo-wrap .logo, .navbar-mobile').removeClass('small-height');
            }
        }
        ;
        $('.js-stick').sticky({
            topSpacing: 0
        });
        height_line($('.inner-nav > ul > li > a'), $('.main-nav'));
        height_line(mobile_nav, $('.main-nav'));
        mobile_nav.css({
            'width': `${$('.main-nav').height()}px`
        });
        if ($('.main-nav').hasClass('transparent')) {
            $('.main-nav').addClass('js-transparent');
        }
        check_scroll();
        $(window).scroll(() => {
            check_scroll();
        });
        mobile_nav.on('click', function() {
            if (desktop_nav.hasClass('js-opened')) {
                desktop_nav.slideUp('slow').removeClass('js-opened');
                $(this).removeClass('active');
            } else {
                desktop_nav.slideDown('slow').addClass('js-opened');
                $(this).addClass('active');
            }
        });
        desktop_nav.find('a:not(.menu-has-sub)').on('click', () => {
            if (mobile_nav.hasClass('active')) {
                desktop_nav.slideUp('slow').removeClass('js-opened');
                mobile_nav.removeClass('active');
            }
        });
        menuHasSub = $('.menu-has-sub');
        menuThisLi = void 0;
        $('.mobile-on .menu-has-sub').find('.fa:first').removeClass('fa-angle-right').addClass('fa-angle-down');
        menuHasSub.on('click', function() {
            if ($('.main-nav').hasClass('mobile-on')) {
                menuThisLi = $(this).parent('li:first');
                if (menuThisLi.hasClass('js-opened')) {
                    menuThisLi.find('.menu-sub:first').slideUp(() => {
                        menuThisLi.removeClass('js-opened');
                        menuThisLi.find('.menu-has-sub').find('.fa:first').removeClass('fa-angle-up').addClass('fa-angle-down');
                    });
                } else {
                    $(this).find('.fa:first').removeClass('fa-angle-down').addClass('fa-angle-up');
                    menuThisLi.addClass('js-opened');
                    menuThisLi.find('.menu-sub:first').slideDown();
                }
                return false;
            } else {
            }
        });
        menuThisLi = menuHasSub.parent('li');
        menuThisLi.hover((function() {
            if (!$('.main-nav').hasClass('mobile-on')) {
                $(this).find('.menu-sub:first').stop(true, true).fadeIn('fast');
            }
        }
        ), function() {
            if (!$('.main-nav').hasClass('mobile-on')) {
                $(this).find('.menu-sub:first').stop(true, true).delay(100).fadeOut('fast');
            }
        });
    }
    ;

    init_classic_menu();

    init_classic_menu_resize();

    $(window).resize(() => {
        init_classic_menu_resize();
    });

    /* Navigation On SCroll */

    init_navigation_scroll = () => {
        /* Smooth scroll */
        let menuLinks;

        let sections;
        $('.scroll li a, a.scroll').smoothScroll({
            speed: 1200
        });
        sections = $('body section');
        menuLinks = $('.scroll-nav li a');
        $(window).scroll(() => {
            sections.filter(":in-viewport:first").each(function() {
                let activeLink;
                let activeSection;
                activeSection = $(this);
                activeLink = $(`.scroll-nav li a[href$="#${activeSection.attr("id")}"]`);
                menuLinks.removeClass('active');
                activeLink.addClass('active');
            });
        });
    }
    ;

    init_navigation_scroll();

    /* Google Maps */

    init_map = () => {
        let load_map;
        let mapSection;
        mapSection = $("#map-canvas");
        load_map = () => {
            let centerAddress;
            let markerAddress;
            if (mapSection.length) {
                centerAddress = mapSection.attr('data-address');
                markerAddress = mapSection.attr('data-address');
                mapSection.gmap3({
                    action: "init",
                    marker: {
                        address: markerAddress
                    },
                    map: {
                        options: {
                            zoom: 14,
                            zoomControl: true,
                            mapTypeControl: false,
                            scaleControl: false,
                            scrollwheel: false,
                            streetViewControl: true,
                            draggable: true,
                            styles: [{
                                "featureType": "water",
                                "elementType": "geometry.fill",
                                "stylers": [{
                                    "color": "#d3d3d3"
                                }]
                            }, {
                                "featureType": "transit",
                                "stylers": [{
                                    "color": "#808080"
                                }, {
                                    "visibility": "off"
                                }]
                            }, {
                                "featureType": "road.highway",
                                "elementType": "geometry.stroke",
                                "stylers": [{
                                    "visibility": "on"
                                }, {
                                    "color": "#b3b3b3"
                                }]
                            }, {
                                "featureType": "road.highway",
                                "elementType": "geometry.fill",
                                "stylers": [{
                                    "color": "#ffffff"
                                }]
                            }, {
                                "featureType": "road.local",
                                "elementType": "geometry.fill",
                                "stylers": [{
                                    "visibility": "on"
                                }, {
                                    "color": "#ffffff"
                                }, {
                                    "weight": 1.8
                                }]
                            }, {
                                "featureType": "road.local",
                                "elementType": "geometry.stroke",
                                "stylers": [{
                                    "color": "#d7d7d7"
                                }]
                            }, {
                                "featureType": "poi",
                                "elementType": "geometry.fill",
                                "stylers": [{
                                    "visibility": "on"
                                }, {
                                    "color": "#ebebeb"
                                }]
                            }, {
                                "featureType": "administrative",
                                "elementType": "geometry",
                                "stylers": [{
                                    "color": "#a7a7a7"
                                }]
                            }, {
                                "featureType": "road.arterial",
                                "elementType": "geometry.fill",
                                "stylers": [{
                                    "color": "#ffffff"
                                }]
                            }, {
                                "featureType": "road.arterial",
                                "elementType": "geometry.fill",
                                "stylers": [{
                                    "color": "#ffffff"
                                }]
                            }, {
                                "featureType": "landscape",
                                "elementType": "geometry.fill",
                                "stylers": [{
                                    "visibility": "on"
                                }, {
                                    "color": "#efefef"
                                }]
                            }, {
                                "featureType": "road",
                                "elementType": "labels.text.fill",
                                "stylers": [{
                                    "color": "#696969"
                                }]
                            }, {
                                "featureType": "administrative",
                                "elementType": "labels.text.fill",
                                "stylers": [{
                                    "visibility": "on"
                                }, {
                                    "color": "#737373"
                                }]
                            }, {
                                "featureType": "poi",
                                "elementType": "labels.icon",
                                "stylers": [{
                                    "visibility": "off"
                                }]
                            }, {
                                "featureType": "poi",
                                "elementType": "labels",
                                "stylers": [{
                                    "visibility": "off"
                                }]
                            }, {
                                "featureType": "road.arterial",
                                "elementType": "geometry.stroke",
                                "stylers": [{
                                    "color": "#d6d6d6"
                                }]
                            }, {
                                "featureType": "road",
                                "elementType": "labels.icon",
                                "stylers": [{
                                    "visibility": "off"
                                }]
                            }, {}, {
                                "featureType": "poi",
                                "elementType": "geometry.fill",
                                "stylers": [{
                                    "color": "#dadada"
                                }]
                            }]
                        }
                    }
                });
            }
        }
        ;
        return $('.map-section').on('click', function() {
            $(this).parent().toggleClass('js-active');
            $(this).find('.toggle-open').toggle();
            $(this).find('.toggle-close').toggle();
            load_map();
        });
    }
    ;

    init_map();

    /* Popup, Video, Lightbox, Ajax Portfolio */

    init_lightbox = () => {
        let magnific_ajax;
        magnific_ajax = () => {
            let hash;
            let magnificPopup;
            magnificPopup = $.magnificPopup.instance;
            hash = document.location.hash.split('=');
            if (hash[0] === '#portfolio') {
                $.magnificPopup.open({
                    items: {
                        src: hash[1]
                    },
                    mainClass: 'mfp-move-horizontal',
                    removalDelay: 1000,
                    type: 'ajax',
                    tLoading: '',
                    showCloseBtn: false,
                    callbacks: {
                        open() {
                            let src_url;
                            src_url = $.magnificPopup.instance.currItem.src;
                            history.pushState({}, '', `#portfolio=${src_url}`);
                        },
                        close() {
                            history.pushState({}, '', document.location.pathname);
                        },
                        ajaxContentAdded() {
                            $('#project').addClass('mfp-opacity');
                            $('#bnt-close').on('click', () => {
                                $.magnificPopup.close();
                                return false;
                            });
                            $(".work-full-slider").owlCarousel({
                                slideSpeed: 350,
                                singleItem: true,
                                autoHeight: true,
                                navigation: true,
                                navigationText: ["<span class='angle'></span>", "<span class='angle'></span>"]
                            });
                        }
                    }
                });
            }
        }
        ;
        magnific_ajax();
        $(window).on('hashchange', () => {
            magnific_ajax();
        });
        $('.work-gallery').magnificPopup({
            tLoading: '',
            gallery: {
                enabled: true
            },
            mainClass: "mfp-fade"
        });
        $('.magnific, .lightbox').magnificPopup({
            tLoading: ''
        });
        $('.video, .post-thumbnail').fitVids();
    }
    ;

    init_lightbox();

    /* Count Numbers */

    init_count_number = () => {
        if (($(window).width() >= 1024) && (mobileTest === false)) {
            $('.focus-number').appear(function() {
                let count;
                count = $(this);
                count.countTo({
                    from: 0,
                    to: count.html(),
                    speed: 1300,
                    refreshInterval: 60
                });
            });
        }
    }
    ;

    init_count_number();

    /* WOW Animation */

    init_wow = () => {
        let wow;
        wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        if ($('body').hasClass('appear-animate')) {
            wow.init();
        }
    }
    ;

    init_wow();
});
