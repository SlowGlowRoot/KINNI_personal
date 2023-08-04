$(function(){

    $("#btnTosCancel").on('click', function(){
        location.href = '../loginMain.html';
    });
    
    $("#btnTosConfirm").on('click', function(){
        if (!$("#agreeKinniTos").prop('checked')) {
            // alert("이용약관 이용동의는 필수입니다.")
            $("#regTosModal").fadeIn(0);
            $("#modalBg").fadeIn(0);
            $("#modalBg").css("background-color", "rgba(0,0,0,.3)")
        } else {
            location.href = 'regJoin.html';
        }
    });

    $("#postImgUploadWrap").click(function(){
        $("#regTosModal").fadeOut(0);
        $("#modalBg").fadeOut(0);
        $("#modalBg").css("background-color", "transparent")
    });
});