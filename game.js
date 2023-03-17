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

let monsterSelect = [];

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

    // 몬스터 생성
    faceToMonster();

    fight();
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
    // 몬스터 생성
    text = [];
    let monname = document.querySelector(".mstname");
    let monhp = document.querySelector(".msthp");
    let monatk = document.querySelector(".mstatk");
    let mondef = document.querySelector(".mstdef");
    
    let random = Math.floor(Math.random() * monster.length)
    
    monsterSelect = monster[random];
    
    text = [`${monsterSelect.name} : 이름`, `${monsterSelect.hp} : 체력`, `${monsterSelect.atk} : 공격력`, `${monsterSelect.def} : 방어력`];

    monname.innerHTML = `${text[0]}`
    monhp.innerHTML = `${text[1]}`
    monatk.innerHTML = `${text[2]}`
    mondef.innerHTML = `${text[3]}`  
    
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
    console.log(monsterSelect);
    console.log(player);
    for (let i = 0; i < 2; i++) {
        if(count % 2 == 1){
            monsterSelect[1] = monsterSelect[1] - player[2] + monsterSelect[3];
        }else{
            player[1] = player[1] - monsterSelect[2] + player[3];
        }
        
        count++;        
    }        

    text = `${monsterSelect.hp} : 체력`;
    monhp.innerHTML = `${text}`;
    playerhp.innerHTML = `체력 : ${player[1]}`;
}