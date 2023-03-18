let cash = 500;
let boughtItem;


//내 잔고 보여주는 함수
function jango(){
    let cashshow = document.getElementById('remainedcash');
    cashshow.innerHTML =`내 잔고 : ${cash}`

}
//버튼 클릭시 실행 함수
function buyItem (button){
    let _cash = parseInt(button.innerHTML)
    if(cash >= _cash){
        cash = cash - _cash;
        alert('구매가 완료되었습니다!');
        jango();
        boughtItem = 'button'
        return [cash,boughtItem];
    }else{
        alert('잔액이 부족합니다!');
    }
}

jango();

//돌아가기 버튼 클릭시 함수

function tothemain(){
window.location.href = 'www.naver.com';
}

