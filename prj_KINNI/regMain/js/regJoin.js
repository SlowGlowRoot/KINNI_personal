$(function(){

    $("#pwEye").hide();
    $("#checkPwEye").hide();
    // $(".warningTxt").find("span").hide();

    $("#btnJoinCancel").on('click', function(){
        location.href = '../loginMain.html';
    });

    // `비밀번호`를 보는 눈
    $(document).ready(function() {
        $("#pwEye").on("click", function() {
            if ($("#pwEye").hasClass("fa-eye-slash")) {
                $("#pwEye").removeClass("fa-eye-slash").addClass("fa-eye");
                $("#inputPw").attr("type", "text");
            } else if ($("#pwEye").hasClass("fa-eye")) {
                $("#pwEye").removeClass("fa-eye").addClass("fa-eye-slash");
                $("#inputPw").attr("type", "password");
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
                $("#inputCheckPw").attr("type", "text");
            } else if ($("#checkPwEye").hasClass("fa-eye")) {
                $("#checkPwEye").removeClass("fa-eye").addClass("fa-eye-slash");
                $("#inputCheckPw").attr("type", "password");
            } else {
                // by pass
            }
        });
    });

    // `비밀번호` 포커스인/아웃 때 눈 보이게/안보이게
    $("#inputPw").on('focusin', function(){
        $("#pwEye").show();
    });

    $("#inputPw").on('focusout', function(){
        if ($(this).val() == '') {
            $("#pwEye").hide();
        } else {
            $("#pwEye").show();
        }
    });

    // `비밀번호 확인` 포커스인/아웃 때 눈 보이게/안보이게
    $("#inputCheckPw").on('focusin', function(){
        $("#checkPwEye").show();
    });

    $("#inputCheckPw").on('focusout', function(){
        if ($(this).val() == '') {
            $("#checkPwEye").hide();
        } else {
            $("#checkPwEye").show();
        }
    });

    // 정식 실행 시 비활성화
        $("#inputEmail").val("kinni@kinni.com")
        $("#inputPw").val("k1nn1")
        $("#inputCheckPw").val("k1nn1")
        $("#inputNick").val("지존키니")

    // 이메일·비밀번호·닉네임 정규식
    var regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/i;
    var regPw = /^(?=.*[a-zA-Z])(?=.*[0-9]).{1,8}$/;
    var regNick = /^[가-힣a-zA-Z0-9]{1,8}$/;

    $("#btnJoinConfirm").on('click', function(){
        // 기본 설정
        $(".warningTxt").find("span").css('display', 'none');
            
        // 이메일 경고창
        if( $("#inputEmail").val() == "" ) {
            $("#warnEmail > span:first-child").css('display', 'inline');
            $("#inputEmail").focus();
            return false;
        } else if( !regEmail.test( $("#inputEmail").val() ) ) {
            $("#warnEmail > span:last-child").css('display', 'inline');
            $("#inputEmail").focus();
            return false;
        } else {
            $("#warnEmail > span").css('display', 'none');
        }

        // 비밀번호 경고창
        if( $("#inputPw").val() == "" ) {
            $("#warnPw > span:first-child").css('display', 'inline');
            $("#inputPw").focus();
            return false;
        } else if( !regPw.test( $("#inputPw").val() ) ) {
            $("#warnPw > span:last-child").css('display', 'inline');
            $("#inputPw").focus();
            return false;
        } else {
            $("#warnPw > span").css('display', 'none');
        }

        // 비밀번호 확인 경고창
        if( $("#inputCheckPw").val() == "" ) {
            $("#warnCheckPw > span:first-child").css('display', 'inline');
            $("#inputCheckPw").focus();
            return false;
        } else if( $("#inputCheckPw").val() != $("#inputPw").val() ) {
            $("#warnCheckPw > span:last-child").css('display', 'inline');
            $("#inputCheckPw").focus();
            return false;
        } else {
            $("#warnPw > span").css('display', 'none');
        }

        // 닉네임 경고창
        if( $("#inputNick").val() == "" ) {
            $("#warnNick > span:first-child").css('display', 'inline');
            $("#inputNick").focus();
            return false;
        } else if( !regNick.test( $("#inputNick").val() ) ) {
            $("#warnNick > span:last-child").css('display', 'inline');
            $("#inputNick").focus();
            return false;
        } else {
            $("#warnNick > span:first-child").css('display', 'none');
        }

        // 모달 창
        $("#regJoinModal").fadeIn(0);
        $("#modalBg").fadeIn(0);
        $("#modalBg").css("background-color", "rgba(0,0,0,.3)")

    });

    $("#btnGoToKinni").on('click', function(){
        window.location.replace('../../regMain/loginMain.html');
    });

});