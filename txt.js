const tx = 
'\u00A0'+"제23회 전주국제영화제 개막작으로 선정된 영화 ‘애프터 양’은 애플TV+ ‘파친코’를 공동 연출한 한국계 미국인 코고나다 감독의 신작이다.\n\n"+
'\u00A0'+"‘미나리’ 제작사 A24의 신작으로 배우 콜린 파렐이 주연을 맡았다. 지난해 칸 국제영화제 주목할만한시선 부문에 공식 초청되고, 올해 선댄스 영화제에서 알프레드 P. 슬로안 상을 수상하는 등 주목받은 작품이다.\n"+
'\u00A0'+"알렉산더 와인스틴 작가의 ‘양과의 안녕’(Saying Goodbye to Yang)을 원작으로 했다.\n\n"+
'\u00A0'+"'애프터 양'은 올해 2023년에 열렸던 제24회 전주국제영화제에서도 골목상영으로 다시 찾아볼수 있었다.\n\n";
 

var text = document.querySelector(".text"); 
let i = 0; 
function typing(){ 
    if (i < tx.length) {  
        let txt = tx.charAt(i); 
        text.innerHTML += txt;
        i++;
    }
}
setInterval(typing, 100)