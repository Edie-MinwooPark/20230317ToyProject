// 플레이어 기본 정보
// 순서대로 레벨, 체력, 공격력, 방어력, 경험치
let player = [1, 120, 15, 5, 0, 500];

// 몬스터 생성 함수
function createmonster(name, hp, atk, def, gift, imageUrl){
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.gift = gift;
    this.imageUrl = imageUrl;
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
let monster1 = new createmonster("buzz", 100, 10, 2, 10, monsterProfile[0]);
let monster2 = new createmonster("alien", 150, 5, 1, 5, monsterProfile[1]);
let monster3 = new createmonster("would you", 150, 10, 4, 15, monsterProfile[2]);
let monster4 = new createmonster("trash", 80, 20, 5, 20, monsterProfile[3]);
let monster5 = new createmonster("rabbit", 100, 10, 2, 10, monsterProfile[4]);

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
    let shopOnOff = document.querySelector(".homeArea .shop");

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

    let attackRes = document.querySelector(".attackResult");
    attackRes.classList.add("active");  
    
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

    for (let i = 0; i < 2; i++) {
        if(count % 2 == 1){
            if(playerCri >= 5){
                monsterSelect.hp = monsterSelect.hp - player[2] * 2 + monsterSelect.def;
                playAtkText = `크리티컬 적용!<br> ${player[2] * 2}`;
                monDemage = `${player[2] * 2 - monsterSelect.def}`;
            }else{
                monsterSelect.hp = monsterSelect.hp - player[2] + monsterSelect.def;
                playAtkText = `${player[2]}`;
                monDemage = `${player[2] - monsterSelect.def}`;
            }
        }else{
            if(monCri >= 5){
                player[1] = player[1] - monsterSelect.atk * 2 + player[3];      
                monAtkText = `크리티컬 적용!<br> ${monsterSelect.atk * 2}`;     
                playDemage = `${monsterSelect.atk * 2 - player[3]}`;     
            }else{
                player[1] = player[1] - monsterSelect.atk + player[3];
                monAtkText = `${monsterSelect.atk}`;  
                playDemage = `${monsterSelect.atk - player[3]}`;
            }
        }
        
        count++;        
    }
    
    console.log(player);
    console.log(monsterSelect);

    // 전투 회당 결과창 호출
    let playTurn = document.querySelector(".playerTurn");
    let monTurn = document.querySelector(".monsterTurn");

    playTurn.innerHTML = `플레이어 공격!<br> ${playAtkText}으로 공격!<br> 몬스터 체력 ${monDemage} 감소!`;
    monTurn.innerHTML = `몬스터 공격!<br> ${monAtkText}으로 공격!<br> 플레이어 체력 ${playDemage} 감소!`;

    // 전투 결과 프로필 적용
    text = `${monsterSelect.hp} : 체력`;
    monhp.innerHTML = `${text}`;
    playerhp.innerHTML = `체력 : ${player[1]}`;

    if(player[1] <= 0 || monsterSelect.hp <= 0){
        afterFight();
    }
}

// 체력이 줄었을 때 결과 비교 및 보상
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
    
    // 몬스터 초기화 배열
    let monInit1 = new createmonster("buzz", 100, 10, 2, 10, monsterProfile[0]);
    let monInit2 = new createmonster("alien", 150, 5, 1, 5, monsterProfile[1]);
    let monInit3 = new createmonster("would you", 150, 10, 4, 15, monsterProfile[2]);
    let monInit4 = new createmonster("would you", 150, 10, 4, 15, monsterProfile[3]);
    let monInit5 = new createmonster("would you", 150, 10, 4, 15, monsterProfile[4]);
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

    let attackRes = document.querySelector(".attackResult");
    attackRes.classList.remove("active");  
}