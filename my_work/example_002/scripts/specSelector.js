$(document).ready(function () {
    //handler for specialties clicking
    $(".specialtiesButton").click(function () {
        $(".specialtiesButton.active").removeClass("active");
        $(this).addClass("active");
        //ineerHTML for header with current specialty
        var buttonDets = $(this).text();
        $("#specialtyTitles").html(buttonDets);
        $("#specialtyTitles").css("color", $(this).css("background-color"));
        var cur = $(".active").attr("id");
        //cycle for each cource in scope
        $(".courses").each(function () {
            if ($(this).hasClass(cur)) {
                $(this).css("display", "block");
            }
            else {
                $(this).css("display", "none");
            }
        });
        ////counter for total days for specialty
        //var totalDays = 0;
        //$(".courses:visible").find(".courseDuration").each(function () {
        //    totalDays += parseFloat($(this).text());
        //})
        //$("#courseDurationFooterDays").html(totalDays);

        ////correctnes of day's q-ty descriprion
        //var dayDescriptor = parseFloat($("#courseDurationFooterDays").text().slice(-1));
        //if (dayDescriptor > 4 && dayDescriptor < 21) {
        //    $("#daysDescriptor").html("дней")
        //}
        //else if (dayDescriptor == 1) {
        //    $("#daysDescriptor").html("день")
        //}
        //else if (dayDescriptor == 2 || dayDescriptor == 3 || dayDescriptor == 4) {
        //    $("#daysDescriptor").html("дня")
        //}
        //else {
        //    $("#daysDescriptor").html("дней")
        //};

        //counter for hours for specialty
        var totalHours = 0;
        $(".courses:visible").find(".courseDuration").each(function () {
            totalHours += parseFloat($(this).text());
        })
        $("#courseDurationFooterHours").html(totalHours);

        //correctnes of hour's q-ty descriprion
        var hourDescriptor = parseFloat($("#courseDurationFooterHours").text().slice(-1));
        if (hourDescriptor > 4 && hourDescriptor < 21) {
            $("#hoursDescriptor").html("часов")
        }
        else if (hourDescriptor == 1) {
            $("#hoursDescriptor").html("час")
        }
        else if (hourDescriptor == 2 || hourDescriptor == 3 || hourDescriptor == 4) {
            $("#hoursDescriptor").html("часа")
        }
        else {
            $("#hoursDescriptor").html("часов")
        };
        //counter for hours days for Price
        var totalPrice = 0;
        $(".courses:visible").find(".coursePrice").each(function () {
            totalPrice += parseFloat($(this).text());
        })
        $("#courseDurationFooterPrice").html(totalPrice);
        //discount 5%       
        $("#courseDurationFooterPriceDiscount").html(totalPrice * 0.95);



    });
    //calling click for first button
    $("#javaDeveloper").trigger("click");

});
