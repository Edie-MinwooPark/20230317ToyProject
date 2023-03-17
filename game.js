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