$(function(){

    $("#btnKinniLogin").on('click', function(){
        $(".warningTxt > span").css('display', 'none');

        if( $("#inputEmail").val() == "" ) {
            $(".warningTxt > span:first-child").css('display', 'inline');
            $("#inputEmail").focus();
            return false;
        } else {
            $(".warningTxt > span:first-child").css('display', 'none');
        }

        if( $("#inputPw").val() == "" ) {
            $(".warningTxt > span:last-child").css('display', 'inline');
            $("#inputPw").focus();
            return false;
        } else {
            $(".warningTxt > span:last-child").css('display', 'none');
        }

        location.href = '키니 메인 위치';
    });

    $("#btnRegJoin").on('click', function(){
        location.href = 'sub/regTos.html';
    });

    $("#pwEye").hide();

    $(document).ready(function() {
        $("#pwEye").on("click", function() {
            if ($("#pwEye").hasClass("fa-eye-slash")) {
                $("#pwEye").removeClass("fa-eye-slash").addClass("fa-eye");
                $("#pwInput").attr("type", "text");
            } else if ($("#pwEye").hasClass("fa-eye")) {
                $("#pwEye").removeClass("fa-eye").addClass("fa-eye-slash");
                $("#pwInput").attr("type", "password");
            } else {
                // by pass
            }
        });
    });

    $("#pwInput").on('focusin', function(){
        $("#pwEye").show();
    });

    $("#pwInput").on('focusout', function(){
        if ($(this).val() == '') {
            $("#pwEye").hide();
        } else {
            $("#pwEye").show();
        }
    });

});