function login(){
    let id = document.querySelector('#id').value;
    let pw = document.querySelector('#pw').value;

    if(id == "a" && pw == "b"){
        alert('계정에 접속합니다')
        location.href = "game.html";
    }else if(id != "a"){
        alert("error_")
    }else{
        alert("error_")
    }

    
}
