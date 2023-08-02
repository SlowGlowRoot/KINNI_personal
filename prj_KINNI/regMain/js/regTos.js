$(function(){

    $("#btnTosCancel").on('click', function(){
        location.href = '../loginMain.html';
    });
    
    $("#btnTosConfirm").on('click', function(){
        if (!$("#agreeKinniTos").prop('checked')) {
            alert("이용약관 이용동의는 필수입니다.")
        } else {
            location.href = 'regJoin.html';
        }
    });

});