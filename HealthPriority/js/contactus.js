$(document).ready(function () {

    $("input").focus(function () {
        $(this).css("background-color", " #F0F0F0");
        $(this).css("color", "#000");
    });

    $("input").blur(function () {
        $(this).css("background-color", "#ffffff");
        $(this).css("color", " #4f4f4f");
    });

    $("#message").focus(function () {
        $(this).css("background-color", "#F0F0F0");
        $(this).css("color", "#000");
    });
    $("#message").blur(function () {
        $(this).css("background-color", "#ffffff");
        $(this).css("color", " #4f4f4f");
    });
    $("#send").click(function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        if (name == '' || email == '' || message == '') {

            $('input[type="text"]').css("border", "2px solid red");
            $('input[type="text"]').css("box-shadow", "0 0 3px red");

            $('#message').css("border", "2px solid red");
            $('#message').css("box-shadow", "0 0 3px red");

            alert("You cannot leave any field empty.");
        }
        else if (!/^[\w.+-]+@[\w-]+\.[\w-.]+$/.test($("#email").val())) {
            alert("Your email format is not valid.");
        }
        else if ($("#message").val().replace(/\s/g, "").length < 30) {
            alert("Message is too short. Minimum 30 characters required");
        }
        else {


            alert('Message submitted');
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        }
    });
});
