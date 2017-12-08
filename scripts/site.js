// Main JS should go here!
// Include scripts using Browserify by doing:
// var $ = require("jquery");


// FAQs
$(document).ready(function() {
    $(".la-faqs__item").attr("data-collapsed", "true").find(".la-faqs__answer").hide();

    $(".la-faqs").on("click", "[data-collapsed='true'] .la-faqs__question", function () {
        $(this).parent().attr("data-collapsed", "false").find(".la-faqs__answer").slideDown();
    });

    $(".la-faqs").on("click", "[data-collapsed='false'] .la-faqs__question", function () {
        $(this).parent().attr("data-collapsed", "true").find(".la-faqs__answer").slideUp();
    });
});