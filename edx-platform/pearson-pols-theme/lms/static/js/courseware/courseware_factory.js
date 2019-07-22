(function(define) {
    'use strict';

    define([
        'jquery',
        'logger'
    ],
        function($, Logger) {
            return function() {
                // This function performs all actions common to all courseware.
                // 1. adding an event to all link clicks.
                $('a:not([href^="#"])').click(function(event) {
                    Logger.log(
                        'edx.ui.lms.link_clicked',
                        {
                            current_url: window.location.href,
                            target_url: event.currentTarget.href
                        });
                });
            };
        }
    );
}).call(this, define || RequireJS.define);

$(document).ready(function () {

    var currentPosition = $("#sequence-list li button.active").attr("data-index");

    $("#sequence-list li button").each(function (index) {
        var buttonPosition = index;

        if (buttonPosition < currentPosition) {
            $(this).addClass("past");
        } else if (buttonPosition > currentPosition) {
            $(this).addClass("future");
        }
    })

})

$(document).on("click", "#sequence-list li button" , function () {

    var currentPosition = $("#sequence-list li button.active").attr("data-index");

    $("#sequence-list li button").each(function (index) {
        var buttonPosition = index;

        console.log(buttonPosition > currentPosition)

        if (buttonPosition < currentPosition) {
            $(this).removeClass("future");
            $(this).addClass("past");
        } else if (buttonPosition > currentPosition) {
            console.log("Hello");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })

})

$(document).on("click", ".button-next" , function () {

    var currentPosition = $("#sequence-list li button.active").attr("data-index");

    $("#sequence-list li button").each(function (index) {
        var buttonPosition = index;

        if (buttonPosition < currentPosition) {
            $(this).removeClass("future");
            $(this).addClass("past");
        } else if (buttonPosition > currentPosition) {
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })

})

$(document).on("click", ".button-previous" , function () {

    var currentPosition = $("#sequence-list li button.active").attr("data-index");

    $("#sequence-list li button").each(function (index) {
        var buttonPosition = index;

        if (buttonPosition < currentPosition) {
            $(this).removeClass("future");
            $(this).addClass("past");
        } else if (buttonPosition > currentPosition) {
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })

})
