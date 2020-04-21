$(document).ready(function () {
    var link = $('nav.navigation__menu .links__title');

    $(window).scroll(function () {
        let timeline1 = new gsap.timeline(),
            scrollTop = $(this).scrollTop(),
            splashScreen = $('.splash-screen'),
            formContact = $('header .form-contact'),
            headline = $('header .banner h1.title span.headline'),
            headlineChars = $('.banner h1.title span.headline .char');
        descInner = $('.banner h3.subtitle span.desc__inner'),
            descInnerWords = $('.banner h3.subtitle span.desc__inner .word'),
            mask = $('header.header .fancy-mask');

        timeline1
            .to(splashScreen, { duration: 0, backgroundSize: 700 + scrollTop * 4 + 'px', ease: 'power1.inOut' })
        if (scrollTop > 500) {
            timeline1
                .to(splashScreen, { duration: .5, scale: 1.5, autoAlpha: 0, ease: 'power1.inOut' })
                .to('.animated-shape', { duration: .3, autoAlpha: 0, ease: 'power1.inOut' })
                .to(formContact, { duration: .5, y: 0, opacity: 1, ease: 'power1.out' }, ('-=.2'))
                .to(headline, { duration: .5, y: 0, ease: 'power1.inOut' }, ('-=.2'))
                .to(headlineChars, { duration: 0, opacity: 1, x: 0, scale: 1, ease: 'none' })
                .to(descInner, { duration: .5, y: 0, ease: 'power1.inOut' })
                .set(descInnerWords, {
                    onComplete: function () {
                        this.targets().forEach(elem => elem.classList.add("active"))
                    }
                })
                .set(mask, {
                    onComplete: function () {
                        this.targets().forEach(elem => elem.classList.add("show"))
                    }
                })
                .to(link, { duration: .7, y: 0, autoAlpha: 1, stagger: .1, ease: 'power1.out' })
        } else {
            timeline1
                .to(splashScreen, { duration: .5, scale: 1, autoAlpha: 1, ease: 'power1.inOut' })
                .to('.animated-shape', { duration: .3, autoAlpha: 1, ease: 'power1.inOut' })
                .to(formContact, { duration: .5, y: 30, opacity: 0, ease: 'power1.in' }, ('-=.2'))
                .to(headline, { duration: .5, y: 50, ease: 'power1.inOut' }, ('-=.2'))
                .to(headlineChars, { duration: 0, opacity: 0, x: 50, scale: 0.5, ease: 'none' })
                .to(descInner, { duration: .5, y: 150, ease: 'power1.inOut' })
                .set(descInnerWords, {
                    onComplete: function () {
                        this.targets().forEach(elem => elem.classList.remove("active"))
                    }
                })
                .set(mask, {
                    onComplete: function () {
                        this.targets().forEach(elem => elem.classList.remove("show"))
                    }
                })
                .to(link, { duration: .7, y: 100, autoAlpha: 0, stagger: .1, ease: 'power1.in' })
        }
        if (scrollTop > 500) {
            $('.back-to-top').fadeIn()
            $('.scroll-down').fadeOut()
        } else {
            $('.back-to-top').fadeOut()
            $('.scroll-down').fadeIn()
        }
        if (scrollTop > 1000) {
            $('.floated-main-logo').fadeOut()
        } else {
            $('.floated-main-logo').fadeIn()
        }
    });
    // BACK TO TOP BUTTON
    $('.back-to-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    // CUSTOM CURSOR
    (function ($) {
        "use strict";
        document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
            t.style.left = n.clientX + "px",
                t.style.top = n.clientY + "px",
                e.style.left = n.clientX + "px",
                e.style.top = n.clientY + "px",
                i.style.left = n.clientX + "px",
                i.style.top = n.clientY + "px"
        });
        var t = document.getElementById("cursor"),
            e = document.getElementById("cursor2"),
            i = document.getElementById("cursor3");
        function n(t) {
            e.classList.add("hover"), i.classList.add("hover")
        }
        function s(t) {
            e.classList.remove("hover"), i.classList.remove("hover")
        }
        s();
        for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
            o(r[a])
        }
        function o(t) {
            t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
        }

        //Scroll indicator

        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);

    })(jQuery);

    //  SMOOTH SCROLL TO OFFSET SECTION
    $(link).on('click', function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1000);
    });




});