$(function(){

    $("#pwEye").hide();
    $("#checkPwEye").hide();
    $(".warningTxt").find("span").hide();

    $("#btnJoinCancel").on('click', function(){
        location.href = '../loginMain.html';
    });

    // `비밀번호`를 보는 눈
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

    // `비밀번호 확인`을 보는 눈
    $(document).ready(function() {
        $("#checkPwEye").on("click", function() {
            if ($("#checkPwEye").hasClass("fa-eye-slash")) {
                $("#checkPwEye").removeClass("fa-eye-slash").addClass("fa-eye");
                $("#checkPwInput").attr("type", "text");
            } else if ($("#checkPwEye").hasClass("fa-eye")) {
                $("#checkPwEye").removeClass("fa-eye").addClass("fa-eye-slash");
                $("#checkPwInput").attr("type", "password");
            } else {
                // by pass
            }
        });
    });

    // `비밀번호` 포커스인/아웃 때 눈 보이게/안보이게
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

    // `비밀번호 확인` 포커스인/아웃 때 눈 보이게/안보이게
    $("#checkPwInput").on('focusin', function(){
        $("#checkPwEye").show();
    });

    $("#checkPwInput").on('focusout', function(){
        if ($(this).val() == '') {
            $("#checkPwEye").hide();
        } else {
            $("#checkPwEye").show();
        }
    });

    var regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/i;
    var regPw = /^[a-z0-9]{1,8}$/;
    var regNick = /^[가-힣a-zA-Z0-9]{1,8}$/;

    $("#btnJoinConfirm").on('click', function(){
        if( $("#inputEmail").val() == "" ) {
            alert("패스워드를 입력해주세요.");
            $("#user_pw").focus();
            return false;
        } else if( !regPw.test( $("#user_pw").val() ) ) {
            alert("패스워드를 올바르게 입력해주세요.");
            $("#user_pw").focus();
            return false;
        }
    });

});

// span을 두개 넣고, first-child(공란 경고)와 last-child(문자/서식 제한 경고)로 나눠서 띄우기
// 비밀번호 확인의 경우에만 공란 경고 없이, last-child("비밀번호가 일치하지 않습니다.")만 띄우기