const tx = // 출력할 문자열을 정의
"I wanna be\n"+
"I wanna be\n"+
"I wanna be just like a melody\n"+
"just like a simple sound\n"+
"like in harmony\n\n"+

"I wanna be\n"+
"I wanna be\n"+
"I wanna be just like the sky\n"+
"just fly so far away\n"+
"to another place\n\n"+

"To be away from all\n"+
"to be one\n"+
"of everything\n\n"+

"I wanna be\n"+
"I wanna be\n"+
"I wanna be just like the wind\n "+
"just flowing in the air\n "+
"through an open space\n\n"+

"I wanna be\n"+
"I wanna be\n"+
"I wanna be just like the sea\n "+
"just swaying in the water\n "+
"so to be at ease\n\n"+

"To be away from all\n"+
"to be one\n"+
"of everything\n\n"+

"I wanna be\n"+
"I wanna be\n"+
"I wanna be just life a melody\n"+
"just like a simple\n"+
"like in harmony\n ";

var text = document.querySelector(".text");
let i = 0; // let 업데이트 가능

function typing(){
    if (i < tx.length) {   // 문자열 다 출력언했음
        let txt = tx.charAt(i); // 현재 인덱스 문자 가져옴 chatAt은 문자열에서 한글자만 가져옴
        text.innerHTML += txt;// 출력할 텍스트에 현재 문자 추가
        i++;
    }
}
setInterval(typing, 100)