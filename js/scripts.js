/*!
 * Start Bootstrap - Grayscale v6.0.2 (https://startbootstrap.com/themes/grayscale)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 70,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 100,
  });

  $(window).on("activate.bs.scrollspy", function (e, obj) {
    if (obj.relatedTarget === "#skills") {
      var ctx = document.getElementById("myChart");
      var myChart = new Chart(ctx, {
        type: "horizontalBar",
        data: {
          labels: [
            "CakePHP",
            "ReactJS",
            "Express",
            "GraphQL",
            "Typescript",
            "Storybook",
            "Jest",
            "Project Management",
          ],
          datasets: [
            {
              data: [95, 90, 30, 30, 40, 30, 30, 50],
              backgroundColor: [
                "#d33c44",
                "#61dafb",
                "rgba(0, 0, 0, 0.1)",
                "#D64292",
                "#3178c6",
                "rgb(255, 71, 133)",
                "green"
              ],
              borderColor: [
                "#d33c44",
                "#61dafb",
                "rgba(0, 0, 0, 0.1)",
                "#D64292",
                "#3178c6",
                "rgb(255, 71, 133)",
                "green"
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          legend: {
            display: false,
          },
          scales: {
            xAxes: [
              {
                stacked: true,
              },
            ],
            yAxes: [
              {
                stacked: true,
              },
            ],
          },
        },
      });
    }
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled

  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
