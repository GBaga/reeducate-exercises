"use strict";
// 1)გაიარეთ რეგისტრაცია mongoDB-ზე დააგენერირეთ connect link და დაქონექთდით ბაზასთან.(npm i mongoose express)
Object.defineProperty(exports, "__esModule", { value: true });
const hero1 = {
    name: "Batman",
    age: 35,
    power: "Stealth",
};
function levelUp(hero) {
    if (hero.age > 30) {
        hero.level = "Pro";
    }
    else {
        hero.level = "Newbie";
    }
}
console.log(levelUp(hero1));
// 5)დაწერე generic ფუნქცია, რომელიც აბრუნებს მასივის პირველ ელემენტს.
//# sourceMappingURL=index.js.map