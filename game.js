// 플레이어 기본 정보
// 순서대로 레벨, 체력, 공격력, 방어력, 경험치
let player = [1, 120, 15, 5, 0];

// 몬스터 생성 함수
function createmonster(name, hp, atk, def, gift){
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.gift = gift;
}

// 몬스터 정보
let monster1 = new createmonster("buzz", 100, 10, 2, 10);
let monster2 = new createmonster("alien", 150, 5, 1, 5);
let monster3 = new createmonster("would you", 150, 10, 4, 15);
let monster4 = new createmonster("trash", 80, 20, 5, 20);
let monster5 = new createmonster("rabbit", 100, 10, 2, 10);

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

    // 몬스터 생성    
    let monname = document.querySelector(".mstname");
    let monhp = document.querySelector(".msthp");
    let monatk = document.querySelector(".mstatk");
    let mondef = document.querySelector(".mstdef");
    
    let random = Math.floor(Math.random() * monster.length);
    
    monsterSelect = monster[random];

    monRandom = random;

    monname.innerHTML = `${monsterSelect.name} : 이름`;
    monhp.innerHTML = `${monsterSelect.hp} : 체력`;
    monatk.innerHTML = `${monsterSelect.atk} : 공격력`;
    mondef.innerHTML = `${monsterSelect.def} : 방어력`; 
    
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

function fight(){
    let count = 1 ;
    let monhp = document.querySelector(".msthp");
    let playerhp = document.querySelector(".hp");
    text = "";

    let playerCri = Math.floor(Math.random() * 10);
    let monCri = Math.floor(Math.random() * 10);

    console.log(playerCri);
    console.log(monCri);

    for (let i = 0; i < 2; i++) {
        if(count % 2 == 1){
            if(playerCri >= 5){
                monsterSelect.hp = monsterSelect.hp - player[2] * 2 + monsterSelect.def;
            }else{
                monsterSelect.hp = monsterSelect.hp - player[2] + monsterSelect.def;
            }
        }else{
            if(monCri >= 5){
                player[1] = player[1] - monsterSelect.atk * 2 + player[3];                
            }else{
                player[1] = player[1] - monsterSelect.atk + player[3];
            }
        }
        
        count++;        
    }

    console.log(player);
    console.log(monsterSelect);

    text = `${monsterSelect.hp} : 체력`;
    monhp.innerHTML = `${text}`;
    playerhp.innerHTML = `체력 : ${player[1]}`;

    if(player[1] <= 0 || monsterSelect.hp <= 0){
        afterFight();
    }
}

function afterFight(){
    if(player[0] <= 0){        
        alert(`패배하셨습니다. 마을로 돌아갑니다...`)
    }else if(monsterSelect.hp <= 0){
        alert(`승리하셨습니다! 마을로 돌아갑니다. \n
        경험치 획득 : ${monsterSelect.gift}`)

        player[4] = player[4] + monsterSelect.gift;
    }
    
    // 플레이어 초기화 변수
    let playerInit = [1, 120, 15, 5];

    // 플레이어 리셋    
    player[1] = playerInit[1];
    player[2] = playerInit[2];
    player[3] = playerInit[3];
    
    // 몬스터 초기화 배열
    let monInit1 = new createmonster("buzz", 100, 10, 2, 10);
    let monInit2 = new createmonster("alien", 150, 5, 1, 5);
    let monInit3 = new createmonster("would you", 150, 10, 4, 15);
    let monInit4 = new createmonster("trash", 80, 20, 5, 20);
    let monInit5 = new createmonster("rabbit", 100, 10, 2, 10);
    let monInit = [monInit1, monInit2, monInit3, monInit4, monInit5];
    
    // 몬스터 리셋
    monster[monRandom] = monInit[monRandom];

    console.log(monster[monRandom]);
    console.log(monInit[monRandom]);
        
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
}