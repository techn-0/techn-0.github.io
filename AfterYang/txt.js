const tx = // ����� ���ڿ��� ����
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
let i = 0; // let ������Ʈ ����

function typing(){
    if (i < tx.length) {   // ���ڿ� �� ��¾�����
        let txt = tx.charAt(i); // ���� �ε��� ���� ������ chatAt�� ���ڿ����� �ѱ��ڸ� ������
        text.innerHTML += txt;// ����� �ؽ�Ʈ�� ���� ���� �߰�
        i++;
    }
}
setInterval(typing, 100)