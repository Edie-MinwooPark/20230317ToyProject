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
    let gameInvenOnOff = document.querySelector(".gameInven");
    gameInvenOnOff.classList.remove("active");

    let mainInvenOnOff = document.querySelector(".mainInven");
    mainInvenOnOff.classList.remove("active");
}  

// 인벤토리 on/off 버튼 설정
function invenOnOff(){
    let gameInvenOnOff = document.querySelector(".gameInven");

    if(gameInvenOnOff.classList.contains("active")){
        gameInvenOnOff.classList.remove("active");
    }else{
        gameInvenOnOff.classList.add("active");
    }   

    let mainInvenOnOff = document.querySelector(".mainInven");

    if(mainInvenOnOff.classList.contains("active")){
        mainInvenOnOff.classList.remove("active");
    }else{
        mainInvenOnOff.classList.add("active");
    }        
}  