// let icon = document.getElementById("moon");
// icon.onclick = function() {
//     document.body.classList.toggle("dark-theme");
// };
// let icon2 = document.getElementById("moon2");
// icon2.onclick = function() {
//     document.body.classList.toggle("dark-theme");
// };

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0px";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
};

(function($) {
    $(function() {
        $(window).on("scroll", function() {
            fnOnScroll();
        });

        $(window).on("resize", function() {
            fnOnResize();
        });

        var agTimeline = $(".js-timeline"),
            agTimelineLine = $(".js-timeline_line"),
            agTimelineLineProgress = $(".js-timeline_line-progress"),
            agTimelinePoint = $(".js-timeline-card_point-box"),
            agTimelineItem = $(".js-timeline_item"),
            agOuterHeight = $(window).outerHeight(),
            agHeight = $(window).height(),
            f = -1,
            agFlag = false;

        function fnOnScroll() {
            agPosY = $(window).scrollTop();

            fnUpdateFrame();
        }

        function fnOnResize() {
            agPosY = $(window).scrollTop();
            agHeight = $(window).height();

            fnUpdateFrame();
        }

        function fnUpdateWindow() {
            agFlag = false;

            agTimelineLine.css({
                top: agTimelineItem.first().find(agTimelinePoint).offset().top -
                    agTimelineItem.first().offset().top,
                bottom: agTimeline.offset().top +
                    agTimeline.outerHeight() -
                    agTimelineItem.last().find(agTimelinePoint).offset().top,
            });

            f !== agPosY && ((f = agPosY), agHeight, fnUpdateProgress());
        }

        function fnUpdateProgress() {
            var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;

            i = agTop + agPosY - $(window).scrollTop();
            a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
            n = agPosY - a + agOuterHeight / 2;
            i <= agPosY + agOuterHeight / 2 && (n = i - a);
            agTimelineLineProgress.css({ height: n + "px" });

            agTimelineItem.each(function() {
                var agTop = $(this).find(agTimelinePoint).offset().top;

                agTop + agPosY - $(window).scrollTop() < agPosY + 0.5 * agOuterHeight ?
                    $(this).addClass("js-ag-active") :
                    $(this).removeClass("js-ag-active");
            });
        }

        function fnUpdateFrame() {
            agFlag || requestAnimationFrame(fnUpdateWindow);
            agFlag = true;
        }
    });
})(jQuery);

$.get("/assets/html/inder.html", function(data) {
    $("#loading").replaceWith(data);
});

$(window).on("load", function() {
    setTimeout(removeLoader, 3000); //wait for page load PLUS 4 seconds.
});

function removeLoader() {
    $(".preloader-wrapper").fadeOut(400, function() {
        // fadeOut complete. Remove the loading div
        $(".preloader-wrapper").remove(); //makes page more lightweight
    });
}