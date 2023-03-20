let cash = 500;
let boughtItem;
let itemcontents ={
    healthpotion : 5,
    attackpotion : 5,
    defensepotion : 5,
    exppotion : 0,
    multipotion : 1,
    bigexppotion : 0
}


//내 잔고 보여주는 함수
function jango(){
    let cashshow = document.getElementById('remainedcash');
    cashshow.innerHTML =`내 잔고 : ${cash}`

}
//버튼 클릭시 실행 함수
function buyItem (button,itemcontent){
    let _cash = parseInt(button.innerHTML)
    if(cash >= _cash){
        cash = cash - _cash;
        alert('구매가 완료되었습니다!');
        jango();
        switch (itemcontent) {
            case 1:
            itemcontents.healthpotion +=1
                
                break;
            case 2:
            itemcontents.attackpotion +=1
                
                break;
            case 3:
            itemcontents.defensepotion +=1
                
                break;
            case 4:
            itemcontents.exppotion +=1
                
                break;
            case 5:
            itemcontents.multipotion +=1
                
                break;
            case 6:
            itemcontents.bigexphpotion +=1
                
                break;
        
            default:
                break;
        }
        console.log(itemcontents)
        // boughtItem = 'button'
        // return [cash,boughtItem];
    }else{
        alert('잔액이 부족합니다!');
    }
}

jango();
