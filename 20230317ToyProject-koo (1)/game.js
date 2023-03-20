// 플레이어 기본 정보
// 순서대로 레벨, 체력, 공격력, 방어력, 경험치
let player = [1, 120, 15, 5, 0, 500];
let hpToNextLevel = 120;
let atkToNextLevel = 15;
let defToNextLevel = 5;
let neededExp = 50;



// 몬스터 생성 함수
function createmonster(name, hp, atk, def, gift, imageUrl,wanted){
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.gift = gift;
    this.imageUrl = imageUrl;
    this.wanted = wanted;
}

// 몬스터 이미지
let monsterProfile = [
    "./profile_image/monster1.png",
    "./profile_image/monster2.png",
    "./profile_image/monster3.png",
    "./profile_image/monster4.png",
    "./profile_image/monster5.png"
]

// 몬스터 정보
let monster1 = new createmonster("buzz", 80, 10, 2, 10, monsterProfile[0],10);
let monster2 = new createmonster("alien", 100, 15, 1, 5, monsterProfile[1],15);
let monster3 = new createmonster("would you", 120, 20, 7, 15, monsterProfile[2],18);
let monster4 = new createmonster("trash", 150, 20, 30, 9, monsterProfile[3],23);
let monster5 = new createmonster("rabbit", 200, 10, 40, 20, monsterProfile[4],30);

// 몬스터 배열
let monster = [monster1, monster2, monster3, monster4, monster5];

// 몬스터 랜덤 인덱스 저장소
let monRandom;

// 랜덤 생성된 몬스터 정보
let monsterSelect;

// 화면 on/off 버튼 설정
function gamePlaying(){
    //전투 화면 온오프
    let gamePlaying = document.querySelector(".gameArea");

    if(gamePlaying.classList.contains("active")){
        gamePlaying.classList.remove("active");
        document.querySelector('.plLevel').innerHTML = "레벨 : " + player[0];
        document.querySelector('.plExp').innerHTML = "경험치 : " + player[4];

        document.querySelector('.mainHp').innerHTML = "체력 : " + player[1];
        document.querySelector('.mainAtk').innerHTML = "공격력 : " + player[2];
        document.querySelector('.mainArmor').innerHTML = "방어력 : " + player[3];
        document.querySelector('.mainCash').innerHTML = "소지금 : " + player[5];
    }else{
        gamePlaying.classList.add("active");
    }    

    // 홈 화면 온오프
    let mainPage = document.querySelector(".homeArea");

    if(mainPage.classList.contains("active")){
        mainPage.classList.remove("active");
    }else{
        mainPage.classList.add("active");
    }       
    

    // 페이지 전환 시 인벤토리가 오픈되어 있을 경우 오프
    let gameinvenOnOff = document.querySelector(".gameArea .inven");
    gameinvenOnOff.classList.remove("active");

    let maininvenOnOff = document.querySelector(".homeArea .inven");
    maininvenOnOff.classList.remove("active");

    let shopOnOff = document.querySelector(".shop");
    shopOnOff.classList.remove("active");

    // 전투 화면에서 도망가기 눌렀을 때 프로필 오프
    let profilePopup = document.querySelector(".profile");
    profilePopup.classList.remove("active");

    let meImg = document.querySelector(".me");
    meImg.classList.remove("active");
    
    let monImg = document.querySelector(".monster");
    monImg.classList.remove("active");
    
    let matchingBtn = document.querySelector(".matching");
    matchingBtn.classList.remove("active");    
    
    let actionBtn = document.querySelector(".actionBtnGroup");
    actionBtn.classList.remove("active");  

    let attackRes = document.querySelector(".attackResult");
    attackRes.classList.remove("active");  
}  

// 도망가기 버튼 설정
function gameEscape(){
    // 플레이어 초기화 변수
    let playerInit = [1, hpToNextLevel, atkToNextLevel, defToNextLevel];
    
    // 플레이어 리셋    
    player[1] = playerInit[1];
    player[2] = playerInit[2];
    player[3] = playerInit[3];
    
    // 몬스터 초기화 배열
    let monInit1 = new createmonster("buzz", 100, 10, 2, 10, monsterProfile[0]);
    let monInit2 = new createmonster("alien", 150, 5, 1, 5, monsterProfile[1]);
    let monInit3 = new createmonster("would you", 150, 10, 4, 15, monsterProfile[2]);
    let monInit4 = new createmonster("would you", 150, 10, 4, 15, monsterProfile[3]);
    let monInit5 = new createmonster("would you", 150, 10, 4, 15, monsterProfile[4]);
    let monInit = [monInit1, monInit2, monInit3, monInit4, monInit5];
    
    // 몬스터 리셋
    monster[monRandom] = monInit[monRandom];

    //전투 화면 온오프
    let gamePlaying = document.querySelector(".gameArea");

    if(gamePlaying.classList.contains("active")){
        gamePlaying.classList.remove("active");
        document.querySelector('.plLevel').innerHTML = "레벨 : " + player[0];
        document.querySelector('.plExp').innerHTML = "경험치 : " + player[4];

        document.querySelector('.mainHp').innerHTML = "체력 : " + player[1];
        document.querySelector('.mainAtk').innerHTML = "공격력 : " + player[2];
        document.querySelector('.mainArmor').innerHTML = "방어력 : " + player[3];
        document.querySelector('.mainCash').innerHTML = "소지금 : " + player[5];
    }else{
        gamePlaying.classList.add("active");
    }    

    // 홈 화면 온오프
    let mainPage = document.querySelector(".homeArea");

    if(mainPage.classList.contains("active")){
        mainPage.classList.remove("active");
    }else{
        mainPage.classList.add("active");
    }       

    // 페이지 전환 시 인벤토리가 오픈되어 있을 경우 오프
    let gameinvenOnOff = document.querySelector(".gameArea .inven");
    gameinvenOnOff.classList.remove("active");

    let maininvenOnOff = document.querySelector(".homeArea .inven");
    maininvenOnOff.classList.remove("active");

    let shopOnOff = document.querySelector(".shop");
    shopOnOff.classList.remove("active");

    // 전투 화면에서 도망가기 눌렀을 때 프로필 오프
    let profilePopup = document.querySelector(".profile");
    profilePopup.classList.remove("active");

    let meImg = document.querySelector(".me");
    meImg.classList.remove("active");
    
    let monImg = document.querySelector(".monster");
    monImg.classList.remove("active");
    
    let matchingBtn = document.querySelector(".matching");
    matchingBtn.classList.remove("active");    
    
    let actionBtn = document.querySelector(".actionBtnGroup");
    actionBtn.classList.remove("active");  

    let attackRes = document.querySelector(".attackResult");
    attackRes.classList.remove("active");  
} 

// 인벤토리 온오프 버튼 설정
function invenOnOff(){
    // 메인 화면에서 인벤토리 온오프
    let maininvenOnOff = document.querySelector(".homeArea .inven");

    if(maininvenOnOff.classList.contains("active")){
        maininvenOnOff.classList.remove("active");
    }else{
        maininvenOnOff.classList.add("active");
    }     

    // 게임 화면에서 인벤토리 온오프
    let gameinvenOnOff = document.querySelector(".gameArea .inven");

    if(gameinvenOnOff.classList.contains("active")){
        gameinvenOnOff.classList.remove("active");
    }else{
        gameinvenOnOff.classList.add("active");
    }   
}  

// 상점 온오프 버튼
function shopOnOff(){
    // 메인 화면에서 상점 온오프
    let shopOnOff = document.querySelector(".shop");

    if(shopOnOff.classList.contains("active")){
        shopOnOff.classList.remove("active");
    }else{
        shopOnOff.classList.add("active");
    }   
}  

// 전투 시작 시 몬스터 랜덤 생성 및 플레이어 정보 표시
function faceToMonster(){
    // 프로필 온
    let profilePopup = document.querySelector(".profile");
    profilePopup.classList.add("active");

    let meImg = document.querySelector(".me");
    meImg.classList.add("active");
    
    let monImg = document.querySelector(".monster");
    monImg.classList.add("active");
    
    let matchingBtn = document.querySelector(".matching");
    matchingBtn.classList.add("active");

    let actionBtn = document.querySelector(".actionBtnGroup");
    actionBtn.classList.add("active");  

    let atkResultBtn = document.querySelector(".attackResult");
    atkResultBtn.classList.add("active");  

    // 전투 창 초기화
    let playTurn = document.querySelector(".playerTurn");
    let monTurn = document.querySelector(".monsterTurn");

    playTurn.innerHTML = ``;
    monTurn.innerHTML = ``;

    // 몬스터 생성    
    let monname = document.querySelector(".mstname");
    let monhp = document.querySelector(".msthp");
    let monatk = document.querySelector(".mstatk");
    let mondef = document.querySelector(".mstdef");
    let monsterphoto = document.querySelector(".monsterphoto")
    let monsterActive = document.querySelector(".monster.active")
    
    let random = Math.floor(Math.random() * monster.length);
    
    monsterSelect = monster[random];

    monRandom = random;

    monname.innerHTML = `${monsterSelect.name} : 이름`;
    monhp.innerHTML = `${monsterSelect.hp} : 체력`;
    monatk.innerHTML = `${monsterSelect.atk} : 공격력`;
    mondef.innerHTML = `${monsterSelect.def} : 방어력`; 
    monsterphoto.style.background = `url(${monsterSelect.imageUrl}) no-repeat center/100%` 
    monsterActive.style.background = `url(${monsterSelect.imageUrl}) no-repeat center/100%`
    
    // 플레이어 정보 표기
    let playername = document.querySelector(".name");
    let playerhp = document.querySelector(".hp");
    let playeratk = document.querySelector(".atk");
    let playerdef = document.querySelector(".def");

    playername.innerHTML = `플레이어 : ${player[0]} 레벨`;
    playerhp.innerHTML = `체력 : ${player[1]}`;
    playeratk.innerHTML = `공격력 : ${player[2]}`;
    playerdef.innerHTML = `방어력 : ${player[3]}`;
}

// 전투 진행
function fight(){
    let count = 1 ;
    let monhp = document.querySelector(".msthp");
    let playerhp = document.querySelector(".hp");
    text = "";  // 프로필 문구 초기화

    // 크리티컬 설정 및 추가 문구
    let playerCri = Math.floor(Math.random() * 10);
    let monCri = Math.floor(Math.random() * 10);
    playAtkText = "";  // 플레이어 공격 문구 초기화
    monAtkText = "";  // 몬스터 공격 문구 초기화
    playDemage = "";  // 플레이어 받은 데미지 문구 초기화
    monDemage = "";   // 몬스터 받은 데미지 문구 초기화 

    console.log(playerCri);
    console.log(monCri);

    // 플레이어 공격
    setTimeout(function(){
        if(playerCri >= 5){
            if(monsterSelect.def >= player[2] * 2){
                monsterSelect.hp = monsterSelect.hp;
                playAtkText = `크리티컬 적용!<br> ${player[2] * 2}`;
                monDemage = `${0}`;
            }else{
                monsterSelect.hp = monsterSelect.hp - player[2] * 2 + monsterSelect.def;
                playAtkText = `크리티컬 적용!<br> ${player[2] * 2}`;
                monDemage = `${player[2] * 2 - monsterSelect.def}`;
            }
        }else{
            if(monsterSelect.def >= player[2]){
                monsterSelect.hp = monsterSelect.hp;
                playAtkText = `${player[2]}`;
                monDemage = `${0}`;
            }else{
                monsterSelect.hp = monsterSelect.hp - player[2] + monsterSelect.def;
                playAtkText = `${player[2]}`;
                monDemage = `${player[2] - monsterSelect.def}`;
            }
        }
    
        let playTurn = document.querySelector(".playerTurn");
        playTurn.innerHTML = `플레이어 공격!<br> ${playAtkText}으로 공격!<br> 몬스터 체력 ${monDemage} 감소!`;
    
        text = `${monsterSelect.hp} : 체력`;
        monhp.innerHTML = `${text}`;

        monsterShake();  

        if(monsterSelect.hp <= 0){
            afterFight();
        }else{
            // 몬스터 공격
            setTimeout(function(){
                if(monCri >= 5){
                    if(player[3] >= monsterSelect.atk * 2){
                        player[1] = player[1];      
                        monAtkText = `크리티컬 적용!<br> ${monsterSelect.atk * 2}`;     
                        playDemage = `${0}`;  
                    }else{
                        player[1] = player[1] - monsterSelect.atk * 2 + player[3];      
                        monAtkText = `크리티컬 적용!<br> ${monsterSelect.atk * 2}`;     
                        playDemage = `${monsterSelect.atk * 2 - player[3]}`;     
                    }
                }else{
                    if(player[3] >= monsterSelect.atk * 2){
                        player[1] = player[1];
                        monAtkText = `${monsterSelect.atk}`;  
                        playDemage = `${0}`;
                    }else{
                        player[1] = player[1] - monsterSelect.atk + player[3];
                        monAtkText = `${monsterSelect.atk}`;  
                        playDemage = `${monsterSelect.atk - player[3]}`;                        
                    }
                }
        
                let monTurn = document.querySelector(".monsterTurn");
                monTurn.innerHTML = `몬스터 공격!<br> ${monAtkText}으로 공격!<br> 플레이어 체력 ${playDemage} 감소!`;
        
                playerShake();
        
                playerhp.innerHTML = `체력 : ${player[1]}`;
        
                if(player[1] <= 0){
                    afterFight();
                }
            }, 1000); 
        }                   
    }, 500);    

    // 결과창 문구 초기화
    setTimeout(() => {
        let playTurn = document.querySelector(".playerTurn");
        playTurn.innerHTML = ``;

        let monTurn = document.querySelector(".monsterTurn");
        monTurn.innerHTML = ``;        
    }, 3000);
}

// 타격 시 이미지 흔들림
function playerShake(){
    let mePhoto = document.querySelector(".me");

    mePhoto.classList.add("shake");

    setTimeout(function(){
        mePhoto.classList.remove("shake");
    }, 1000);
}
function monsterShake(){
    let monPhoto = document.querySelector(".monster");

    monPhoto.classList.add("shake");

    setTimeout(function(){
        monPhoto.classList.remove("shake");
    }, 1000);
}

// 체력이 0보다 작아졌을 때 결과 비교 및 보상
function afterFight(){
    if(player[1] <= 0){
        playerOut();
    }else{
        monsterOut();
    }
    

    setTimeout(function(){
        if(player[1] <= 0){        
            alert(`패배하셨습니다. 마을로 돌아갑니다...`)
            
        }else if(monsterSelect.hp <= 0){
            alert(`승리하셨습니다! 마을로 돌아갑니다. \n
            경험치 획득 : ${monsterSelect.gift} \n
            포상금 획득 : ${monsterSelect.wanted}`)
            player[4] = player[4] + monsterSelect.gift;
            player[5] += monsterSelect.wanted;
            document.querySelector('.plExp').innerHTML = '경험치 : ' + player[4];
            
            if(player[4]>= neededExp){
                alert('레벨업 하였습니다!');
                player[0] += 1;
                document.querySelector('.plLevel').innerHTML = "레벨 : " + player[0];
                hpToNextLevel += 10;
                atkToNextLevel += 10;
                defToNextLevel += 3;
                player[4] = 0;
                neededExp += 20;
                document.querySelector('.plExp').innerHTML = "경험치 : " + player[4];
            }
        }      
        
        // 플레이어 초기화 변수
        let playerInit = [1, hpToNextLevel, atkToNextLevel, defToNextLevel];

        // 플레이어 리셋    
        player[1] = playerInit[1];
        player[2] = playerInit[2];
        player[3] = playerInit[3];
        document.querySelector('.mainHp').innerHTML = "체력 : " + player[1];
        document.querySelector('.mainAtk').innerHTML = "공격력 : " + player[2];
        document.querySelector('.mainArmor').innerHTML = "방어력 : " + player[3];
        document.querySelector('.mainCash').innerHTML = "소지금 : " + player[5];
        
        // 몬스터 초기화 배열
        let monInit1 = new createmonster("buzz", 100, 10, 2, 10, monsterProfile[0],10);
        let monInit2 = new createmonster("alien", 150, 5, 1, 5, monsterProfile[1],15);
        let monInit3 = new createmonster("would you", 150, 10, 4, 15, monsterProfile[2],18);
        let monInit4 = new createmonster("trash", 150, 10, 4, 15, monsterProfile[3],23);
        let monInit5 = new createmonster("rabbit", 150, 10, 4, 15, monsterProfile[4],30);
        let monInit = [monInit1, monInit2, monInit3, monInit4, monInit5];
        
        // 몬스터 리셋
        monster[monRandom] = monInit[monRandom];
            
        // 메인 화면과 전투 화면 스위칭 및 프로필 오프
        let gamePlaying = document.querySelector(".gameArea");
        gamePlaying.classList.remove("active");
    
        let mainPage = document.querySelector(".homeArea");
        mainPage.classList.remove("active");
    
        let profilePopup = document.querySelector(".profile");
        profilePopup.classList.remove("active");
    
        let meImg = document.querySelector(".me");
        meImg.classList.remove("active");
        
        let monImg = document.querySelector(".monster");
        monImg.classList.remove("active");
        
        let matchingBtn = document.querySelector(".matching");
        matchingBtn.classList.remove("active");    
        
        let actionBtn = document.querySelector(".actionBtnGroup");
        actionBtn.classList.remove("active");  
    
        let atkResultBtn = document.querySelector(".attackResult");
        atkResultBtn.classList.remove("active");    
        
        let mePhoto = document.querySelector(".me");
        if(mePhoto.classList.contains("out")){
            mePhoto.classList.remove("out");
            mePhoto.style.opacity = "1";
        }

        let monPhoto = document.querySelector(".monster");
        if(monPhoto.classList.contains("out")){
            monPhoto.classList.remove("out");
            monPhoto.style.opacity = "1";
        }
    }, 1000);
}

// 패배 시 이미지 아웃
function playerOut(){
    let mePhoto = document.querySelector(".me");
    mePhoto.classList.add("out");

    setTimeout(function(){
        mePhoto.style.opacity = "0";
    }, 500);
}
function monsterOut(){
    let monPhoto = document.querySelector(".monster");
    monPhoto.classList.add("out");

    setTimeout(function(){
        monPhoto.style.opacity = "0";
    }, 500);
}
// 상점에서 아이템 누르면 인벤에 보유 개수 올라가는 함수
let howmany = document.querySelector("#invenhealthPotion")
let ihowmany = document.querySelector("#invenhealthPotion1")
let howmany1 = document.querySelector("#invenattackPotion")
let ihowmany1 = document.querySelector("#invenattackPotion1")
let howmany2 = document.querySelector("#invenexpPotion")
let ihowmany2 = document.querySelector("#invenexpPotion1")
let howmany3 = document.querySelector("#invendefensePotion")
let ihowmany3 = document.querySelector("#invendefensePotion1")
let howmany4 = document.querySelector("#invenmultiPotion")
let ihowmany4 = document.querySelector("#invenmultiPotion1")
let howmany5 = document.querySelector("#invenbigexpPotion")
let ihowmany5 = document.querySelector("#invenbigexpPotion1")

let ea1 = 0
let ea2 = 0
let ea3 = 0
let ea4 = 0
let ea5 = 0
let ea6 = 0

let money = document.querySelector(".mainCash")

function addinven(contentnumber){
    switch (contentnumber) {
        case 1:
            alert('50원을 주고 구입합니다.')
            if(player[5] <= 50){
                alert('소지금 부족')
            }else{
            ea1++
            player[5] = player[5] -50;
            console.log(player[5])
            howmany.innerHTML = ` 보유개수 : ${ea1} `
            ihowmany.innerHTML = ` 보유개수 : ${ea1} `
            money.innerHTML = ` 소지금 :${player[5]}`
            }
            break;
        case 2:
            alert('50원을 주고 구입합니다.')
            if(player[5] <= 50){
                alert('소지금 부족')
            }else{
            ea2++
            player[5] = player[5] -50;
            howmany1.innerHTML = ` 보유개수 : ${ea2} `
            ihowmany1.innerHTML = ` 보유개수 : ${ea2} `
            money.innerHTML = ` 소지금 :${player[5]}`
            }
            break;
        case 3:
            alert('100원을 주고 구입합니다.')
            if(player[5] <= 100){
                alert('소지금 부족')
            }else{
            ea3++
            player[5] = player[5] -100;
            howmany2.innerHTML = ` 보유개수 : ${ea3} `
            ihowmany2.innerHTML = ` 보유개수 : ${ea3} `
            money.innerHTML = ` 소지금 :${player[5]}`
            }
            break;
        case 4:
            alert('50원을 주고 구입합니다.')
            if(player[5] <= 50){
                alert('소지금 부족')
            }else{
            ea4++
            player[5] = player[5] -50;
            howmany3.innerHTML = ` 보유개수 : ${ea4} `
            ihowmany3.innerHTML = ` 보유개수 : ${ea4} `
            money.innerHTML = ` 소지금 :${player[5]}`
            }
            break;
        case 5:
            alert('140원을 주고 구입합니다.')
            if(player[5] <= 140){
                alert('소지금 부족')
            }else{
                ea5++
                player[5] = player[5] -140;
                howmany4.innerHTML = ` 보유개수 : ${ea5} `
                ihowmany4.innerHTML = ` 보유개수 : ${ea5} `
                money.innerHTML = ` 소지금 :${player[5]}`
            }
                break;
        case 6:
            alert('999원을 주고 구입합니다.')
            if(player[5] <= 999){
                alert('소지금 부족')
            }else {
                ea6++
                player[5] = player[5] -990;
                howmany5.innerHTML = ` 보유개수 : ${ea6} `
                ihowmany5.innerHTML = ` 보유개수 : ${ea6} `
                money.innerHTML = ` 소지금 :${player[5]}`
            }
            break;
    
        default : alert('소지금 부족')
            break;
    }
    
}

// 인벤에서 아이템 사용
let hp = document.querySelector(".mainHp")
let atk = document.querySelector(".mainAtk")
let def = document.querySelector(".mainArmor")
let exp = document.querySelector(".plExp")
let level = document.querySelector(".plLevel")
let playerhp = document.querySelector(".hp");
let playeratk = document.querySelector(".atk");
let playerdef = document.querySelector(".def");


function useItem(contentnumber){
        switch (contentnumber) {
            case 1:
                if(ea1 >= 1 && player[1] < hpToNextLevel ){
                    alert('아이템을 사용합니다.');
                    if(player[1]+30 > hpToNextLevel){
                        player[1] = hpToNextLevel;
                    }else{
                        player[1] = player[1] + 30;
                    }                    
                    ea1--
                    howmany.innerHTML = ` 보유개수 ${ea1} `
                    ihowmany.innerHTML = ` 보유개수 ${ea1} `
                    hp.innerHTML = `체력 : ${player[1]}`
                    playerhp.innerHTML = `체력 : ${player[1]}`;
                }else{
                    alert('아이템을 사용할 수 없습니다. (아이템 부족 or 최대 체력 초과)');
                }
                break;
            case 2:
                if(ea2 >= 1){
                    alert('아이템을 사용합니다.');
                    player[2] = player[2] + 5;
                    ea2--
                    howmany1.innerHTML = ` 보유개수 ${ea2} `;
                    ihowmany1.innerHTML = ` 보유개수 ${ea2} `;
                    atk.innerHTML = `공격력 : ${player[2]}`;
                    playeratk.innerHTML = `공격력 : ${player[2]}`;
                }else{
                    alert('아이템 갯수가 부족합니다');
                }
                break;
            case 3:
                if(ea3 >= 1){
                    alert('아이템을 사용합니다.');
                    player[4] = player[4] + 50
                    ea3--
                    ihowmany2.innerHTML = ` 보유개수 ${ea3} `
                     howmany2.innerHTML = ` 보유개수 ${ea3} `
                     exp.innerHTML = `경험치 : ${player[4]}`
                }else{
                    alert('아이템 갯수가 부족합니다');
                }
                break;
            case 4:
                if(ea4 >= 1){
                    alert('아이템을 사용합니다.');
                    player[3] = player[3] + 3
                    ea4--
                    howmany3.innerHTML = ` 보유개수 ${ea4} `
                    ihowmany3.innerHTML = ` 보유개수 ${ea4} `
                    def.innerHTML = `방어력 : ${player[3]}`
                    playerdef.innerHTML = `방어력 : ${player[3]}`;
                }else{
                    alert('아이템 갯수가 부족합니다');
                }
                break;
            case 5:
                if(ea5 >= 1){
                    alert('아이템을 사용합니다.');
                    player[1] = player[1] + 30;
                    player[2] = player[2] + 5;
                    player[3] = player[3] + 3;
                    ea5--
                    howmany4.innerHTML = ` 보유개수 ${ea5} `
                    ihowmany4.innerHTML = ` 보유개수 ${ea5} `
                    hp.innerHTML = `체력 : ${player[1]}`
                    atk.innerHTML = `공격력 : ${player[2]}`
                    def.innerHTML = `방어력 : ${player[3]}`
                }else{
                    alert('아이템 갯수가 부족합니다');
                }
                break;
            case 6:
                if(ea6 >= 1){
                    alert('아이템을 사용합니다.');
                    player[0] = player[0] + 1;
                    ea6--
                    howmany5.innerHTML = ` 보유개수 ${ea6} `
                    ihowmany5.innerHTML = ` 보유개수 ${ea6} `
                    level.innerHTML = `레벨 : ${player[0]}`
                }else{
                    alert('아이템 갯수가 부족합니다');
                }
                break;
        }
    }