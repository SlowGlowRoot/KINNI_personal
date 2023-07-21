$(function(){

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
    
        // 사진 추가(카메라 아이콘) 버튼
    $("#btnPostImgAdd").click(function(){
        $("#postImgModal").fadeIn(0);
        $("#modalBg").fadeIn(0);
        $("#modalBg").css("background-color", "rgba(0,0,0,.3)")
    });

        // 사진 추가 취소 버튼
    $("#btnPostImgCancel").click(function(){
        $("#postImgModal").fadeOut(0);
        $("#modalBg").fadeOut(0);
        $("#modalBg").css("background-color", "transparent")
        var newImage = $("#postImg").children().last();
        newImage.css("display", "none");
        $("#postImgName").text("");
    });

        // 사진 추가 저장 버튼
    $("#btnPostImgSave").click(function(){
        $("#postImgModal").fadeOut(0);
        $("#modalBg").fadeOut(0);
        $("#modalBg").css("background-color", "transparent")
        var newImage = $("#postImg").children().last();
        newImage.css("visibility", "visible");

        if (newImage == null){
            alert("사진을 넣어주세요.")
        }
    });

        // 사진 업로드 버튼
    $("#btnPostImgUpload").click(function(){
        $("#postImgInput").click();
    });

    $("#postImgInput").on('change', function(event){

        var newImgName = event.target.files[0];
        $("#postImgName").text(newImgName.name);

        var newImgFile = $('<img>').addClass('newImage');
        newImgFile.attr('src', URL.createObjectURL(newImgName));
        newImgFile.attr('alt', '업로드된 이미지');
        newImgFile.css({
            width: '100%',
            visibility: 'hidden',
            objectFit: 'contain'
        });

        $('#postImg').append(newImgFile);

    });

});

// 사진 업로드 후 취소 눌렀다가 동일 사진 업로드 하면 파일 이름 안나오고 업로드도 안되는 오류 발생
//      ㄴ (img태그를 만들 때 동일 사진을 업로드 하면 새로 img가 만들어지지 않고 기존에 있던 img 파일이 수정됨.)

// 저장 누르고 사진 넣어지면 그다음 카메라 버튼 눌렀을 때 '취소', '저장' => '변경', '삭제'로 변경되도록 하기
//      ㄴ (HTML에서 따로 div 만들지 말고 addClass, removeClass, 그에 따른 css와 js만 새로 만들기, 변경은 #btnPostImgChange, 삭제는 #btnPostImgRemove로 설정)