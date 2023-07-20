$(function(){

    $("#btnPostImg").click(function(){
        $("#postImgModal").fadeIn(0);
        $("#modalBg").fadeIn(0);
        $("#modalBg").css("background-color", "rgba(0,0,0,.3)")

    });

    $("#btnPostImgCancel").click(function(){
        $("#postImgModal").fadeOut(0);
        $("#modalBg").fadeOut(0);
        $("#modalBg").css("background-color", "transparent")
    });

    const txtBoxHeight = 0;
    const txtBox = document.querySelector('#postTxt');

    txtBox.oninput = (event) => {
        const target = event.target;
      
        target.style.height = 0;
        target.style.height = txtBoxHeight + target.scrollHeight + 'px';

        if (target.scrollHeight > 308) { // 텍스트 상자의 스크롤 높이가 308px를 넘어가면
            const postMainBox = document.querySelector('#postMain');
            postMainBox.style.height = 0; // #postMain의 높이를 자동으로 설정하여 내용에 맞게 커짐
            postMainBox.style.height = txtBoxHeight + postMainBox.scrollHeight + 'px'; // #postMain의 높이를 조정
        } else {
            // by pass
        }
    };

    $("#btnPostImgUpload").click(function(){
        let postImgInput = document.getElementById("postImgInput");
        postImgInput.click();
    });

    $("#postImgInput").on('change', function(input){
        var file = input.files[0];
        
        var postImgName = document.getElementById('postImgName');
        postImgName.textContent = file.name;
    });

});