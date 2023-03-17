function createmonster(name, hp, atk, def, gift){
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.gift = gift;
}
// 몬스터 인적사항
let monster1 = new createmonster("buzz", 100, 10, 2, 10);
let monster2 = new createmonster("alien", 150, 5, 1, 5);
let monster3 = new createmonster("would you", 150, 10, 4, 15);
let monster4 = new createmonster("trash", 80, 20, 5, 20);
let monster5 = new createmonster("rabbit", 100, 10, 2, 10);
console.log(monster1);
console.log(monster2);
console.log(monster3);
console.log(monster4);
console.log(monster5);

// 몬스터 랜덤 등장
let monster =[monster1, monster2, monster3, monster4, monster5];
let random = Math.floor(Math.random()* monster.length)
let fight = (monster[random])
console.log(fight)