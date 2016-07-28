$(document).ready(function() {
    if ($("html").hasClass("mobile") == true) {
        $.getScript("http://wurfl.io/wurfl.js", function() {
            $("body").append("<p>" + WURFL.form_factor + ": " + WURFL.complete_device_name + "</p>");
        });
    }          
});