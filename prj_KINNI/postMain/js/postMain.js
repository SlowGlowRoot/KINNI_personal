$(function(){

    const fadeInOutTime = 150;
    const txtBoxHeight = 0;
    const txtBox = document.querySelector('#postTxt');

    txtBox.oninput = (event) => {
        const target = event.target;
      
        target.style.height = 0;
        target.style.height = txtBoxHeight + target.scrollHeight + 'px';

        if (target.scrollHeight > 308) { // 텍스트 상자의 스크롤 높이가 308px를 넘어가면
            const postMainBox = document.querySelector('#postMain');
            postMainBox.style.height = 0;
            postMainBox.style.height = txtBoxHeight + postMainBox.scrollHeight + 30 + 'px'; // #postMain의 높이를 조정
        } else {
            const postMainBox = document.querySelector('#postMain');
            postMainBox.style.height = 355 + 'px';
        }
    };
    

    $("#btnPostCancel").on('click', function(){
        var askAgain = confirm("글 작성을 취소하시겠습니까?")
        if(askAgain) {
            location.reload();
        } else {
            // by pass
        }
    });

    $("#btnPostKinni").on('click', function(){
        location.reload(); 
    });

        // 텍스트 포커스인이나 글씨가 남아있을 때 배경색 회색으로, 글씨 없이 포커스아웃일 때 다시 흰색으로
    $("#postTxt").on('focusin', function(){
        $(this).css('backgroundColor', '#f5f5f5')
    });

    $("#postTxt").on('focusout', function(){
        if ($(this).val() == '') {
            $(this).css('backgroundColor', '#ffffff')
        } else {
            $(this).css('backgroundColor', '#f5f5f5')
        }
    });

        // 사진 넣기 버튼
    $("#btnPostImgAdd").click(function(){
        $("#postImgModal").fadeIn(0);
        $("#modalBg").fadeIn(0);
        $("#modalBg").css("background-color", "rgba(0,0,0,.3)")

        
    });

        // 추가한 사진 취소 버튼
    $("#btnPostImgCancel").click(function(){
        $("#postImgModal").fadeOut(0);
        $("#modalBg").fadeOut(0);
        $("#modalBg").css("background-color", "transparent")
        var newImage = $("#postImg").children().last();
        newImage.remove();
        $("#postImgName").text("");
    });

        // 추가한 사진 저장 버튼
    $("#btnPostImgSave").click(function(){
        var newImage = $("#postImg").children().last();
        if ($("#postImgName").text() == "") {
            alert("사진을 넣어주세요.")
            return false;
        } else {
            $("#postImgModal").fadeOut(0);
            $("#modalBg").fadeOut(0);
            $("#modalBg").css("background-color", "transparent")
            newImage.css("display", "block");
            newImage.fadeOut(0);
            newImage.fadeIn(fadeInOutTime);

            $("#btnPostImgSave").css("display", "none")
            $("#btnPostImgCancel").css("display", "none")
            $("#btnPostImgChange").css("display", "inline-block")
            $("#btnPostImgRemove").css("display", "inline-block")
        }
    });

        // 추가한 사진 변경 버튼
    $("#btnPostImgChange").click(function(){
        var oldImage = $("#postImg").children().first();
        var newImage = $("#postImg").children().last();
        $("#postImgModal").fadeOut(0);
        $("#modalBg").fadeOut(0);
        $("#modalBg").css("background-color", "transparent")

        if (oldImage.attr('src') != newImage.attr('src')) {
            oldImage.remove();
            newImage.css("display", "block");
        } else {
            // by pass
        }
    });

        // 추가한 사진 삭제 버튼
    $("#btnPostImgRemove").click(function(){
        var askAgain = confirm("삭제하시겠습니까?")

        if(askAgain) {
            var oldImage = $("#postImg").children().first();
            $("#postImgModal").fadeOut(0);
            $("#modalBg").fadeOut(0);
            $("#modalBg").css("background-color", "transparent")
            oldImage.fadeOut(fadeInOutTime);
            setTimeout(function(){
                oldImage.remove();
            }, fadeInOutTime)
            $("#postImgName").text("");
        } else {
            // by pass
        }

        $("#btnPostImgSave").css("display", "inline-block")
        $("#btnPostImgCancel").css("display", "inline-block")
        $("#btnPostImgChange").css("display", "none")
        $("#btnPostImgRemove").css("display", "none")
    });

        // 사진 업로드(추가) 버튼
    $("#btnPostImgUpload").click(function(){
        $("#postImgInput").click();
    });

    $("#postImgInput").on('change', function(event){

        var newImgFile = event.target.files[0];
        $("#postImgName").text(newImgFile.name);

        var newImgTag = $('<img>').addClass('newImage');
        newImgTag.attr('src', URL.createObjectURL(newImgFile));
        newImgTag.attr('alt', '업로드된 이미지');

        $('#postImg').append(newImgTag);    // div#postImg 안에 newImgTag(= <img>)

        var duplicateAllow = event.target.value[0]
        duplicateAllow = null;

    });

});

// 사진 업로드 후 취소 눌렀다가 동일 사진 업로드 하면 파일 이름 안나오고 업로드도 안되는 오류 발생
//      ㄴ event.target.value를 초기화 해야함.

// confirm문 대신 따로 모달 만들어서 꾸미기
// lnb는 밑에 있다가 키보드 올라오면 같이 밀려 올라올 수 있도록 jQuery 구성하기