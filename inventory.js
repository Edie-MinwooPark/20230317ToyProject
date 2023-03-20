//보유개수 보여주기
document.getElementById('healthPotion').innerHTML = `보유개수 : ${itemcontents.healthpotion}`
document.getElementById('attackPotion').innerHTML = `보유개수 : ${itemcontents.attackpotion}`
document.getElementById('defensePotion').innerHTML = `보유개수 : ${itemcontents.defensepotion}`
document.getElementById('expPotion').innerHTML = `보유개수 : ${itemcontents.exppotion}`
document.getElementById('multiPotion').innerHTML = `보유개수 : ${itemcontents.multipotion}`
document.getElementById('bigexpPotion').innerHTML = `보유개수 : ${itemcontents.bigexppotion}`


//인벤토리 아이템 클릭시 사용 함수

function useItem(contentnumber){
    switch (contentnumber) {
        case 1:
            if(itemcontents.healthpotion >= 1){
                itemcontents.healthpotion -= 1;
                document.getElementById('healthPotion').innerHTML = `보유개수 : ${itemcontents.healthpotion}`
                player[1] += 20;
                alert('아이템을 사용했습니다');
            }else{
                alert('아이템 갯수가 부족합니다');
            }
            break;
        case 2:
            if(itemcontents.attackpotion >= 1){
                itemcontents.attackpotion -= 1;
                document.getElementById('attackPotion').innerHTML = `보유개수 : ${itemcontents.attackpotion}`
                player[2] += 5
                alert('아이템을 사용했습니다');
            }else{
                alert('아이템 갯수가 부족합니다');
            }
            break;
        case 3:
            if(itemcontents.defensepotion >= 1){
                itemcontents.defensepotion -= 1;
                document.getElementById('defensePotion').innerHTML = `보유개수 : ${itemcontents.defensepotion}`
                player[3] += 3
                alert('아이템을 사용했습니다');
            }else{
                alert('아이템 갯수가 부족합니다');
            }
            break;
        case 4:
            if(itemcontents.exppotion >= 1){
                itemcontents.exppotion -= 1;
                document.getElementById('expPotion').innerHTML = `보유개수 : ${itemcontents.expkpotion}`
                player[4] += 50
                alert('아이템을 사용했습니다');
            }else{
                alert('아이템 갯수가 부족합니다');
            }
            break;
        case 5:
            if(itemcontents.multipotion >= 1){
                itemcontents.multipotion -= 1;
                document.getElementById('multiPotion').innerHTML = `보유개수 : ${itemcontents.multipotion}`
                player[1] += 20;
                player[2] += 5;
                player[3] += 3;
                alert('아이템을 사용했습니다');
            }else{
                alert('아이템 갯수가 부족합니다');
            }
            break;
        case 6:
            if(itemcontents.bigexppotion >= 1){
                itemcontents.bigexppotion -= 1;
                document.getElementById('bigexpPotion').innerHTML = `보유개수 : ${itemcontents.bigexppotion}`
                player[0] += 1;
                alert('아이템을 사용했습니다');
            }else{
                alert('아이템 갯수가 부족합니다');
            }
            break;
      
    
    }
    
    
    
    
}