// 1)გაიარეთ რეგისტრაცია mongoDB-ზე დააგენერირეთ connect link და დაქონექთდით ბაზასთან.(npm i mongoose express)
var hero1 = {
    name: "Batman",
    age: 15,
    power: "Stealth",
};
function levelUp(hero) {
    if (hero.age > 30) {
        hero.level = "Pro";
    }
    else {
        hero.level = "Newbie";
    }
    console.log("".concat(hero.name, " is now level: ").concat(hero.level));
}
levelUp(hero1);
// 5)დაწერე generic ფუნქცია, რომელიც აბრუნებს მასივის პირველ ელემენტს.
