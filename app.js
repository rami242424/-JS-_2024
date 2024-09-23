// variable로 만들기
const playerName = "nico";
const playerPoint = 100;
const playerHandsome = true;
const playerFat = "little bit";

// player.name
// player.point 식으로 만들면 더 좋을 것 같다. (console.log처럼)

// array로 만들기
const player1 = ["nico", 100, true, "little bit"];

// object로 만들기
const player = {
    name : "rami",
    point : 10,
    fat : true,
}

// 접근법 1
console.log(player);
console.log(player.name);
console.log(player.fat);

// 접근법 2
console.log(player["name"], "접근법2");

// objest 수정하기
player.fat = false;
console.log(player.fat, "fat 수정");
console.log(player);

player.point = 100;
console.log(player.point, "point 수정");
console.log(player);



// object 추가하기
player.fav = "burger";
console.log(player.fav, "추가");
console.log(player);

