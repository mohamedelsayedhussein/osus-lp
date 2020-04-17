$(document).ready(function () {

    $(window).scroll(function () {
        let timeline1 = new gsap.timeline(),
            scrollTop = $(this).scrollTop(),
            blackTxt = $('.banner h1 span.blacked > span'),
            outlineTxt = $('.banner h1 span.outlined > span'),
            splashScreen = $('.splash-screen'),
            separtor = $('.banner h1 a.separator'),
            descInner = $('.banner p.desc .desc__inner'),
            formContact = $('header .form-contact'),
            link = $('nav.navigation__menu .links__title');

        timeline1
            .to(splashScreen, { duration: .5, scale: 1 + scrollTop / 250 })
        if (scrollTop > 700) {
            timeline1
                .to(splashScreen, { duration: .5, autoAlpha: 0 })
                .to(formContact, { duration: .5, x: 0, autoAlpha: 1, ease: 'power1.out' }, ('-=.2'))
                .to(separtor, { duration: .5, scaleY: 1, ease: 'expo.out' }, ('-=.5'))
                .to(blackTxt, { duration: .5, x: 0, ease: 'power1.in' })
                .to(outlineTxt, { duration: .5, x: 0, ease: 'power1.in' }, ('-=.2'))
                .to(descInner, { duration: .5, y: 0, ease: 'power1.out' })
                .to(link, { duration: .7, y: 0, autoAlpha: 1, stagger: .1, ease: 'power1.out' }, ('-=.5'))
        } else {
            timeline1
                .to(splashScreen, { duration: .5, autoAlpha: 1 })
                .to(formContact, { duration: .5, x: 100, autoAlpha: 0, ease: 'power1.out' }, ('-=.2'))
                .to(separtor, { duration: .5, scaleY: 0, ease: 'expo.out' }, ('-=.5'))
                .to(blackTxt, { duration: .5, x: '100%', ease: 'power1.in' })
                .to(outlineTxt, { duration: .5, x: '-100%', ease: 'power1.in' }, ('-=.2'))
                .to(descInner, { duration: .2, y: '100%', ease: 'power1.in' })
                .to(link, { duration: .7, y: 100, autoAlpha: 0, stagger: .1, ease: 'power1.in' }, ('-=.5'))
        }
        if (scrollTop > 500) {
            $('.back-to-top').fadeIn()
        } else {
            $('.back-to-top').fadeOut()
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
})
