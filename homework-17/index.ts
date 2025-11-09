// 1)გაიარეთ რეგისტრაცია mongoDB-ზე დააგენერირეთ connect link და დაქონექთდით ბაზასთან.(npm i mongoose express)

// mongodb+srv://admin:admin@reeducate-homework17.opi9pao.mongodb.net/?appName=reeducate-homework17

// 2)შექმენი პროგრამა, რომელიც ამატებს მომხმარებლის სახელს და ასაკს და აბრუნებს ტექსტს User Nika is 22 years old.

// 3)აღწერე პროდუქტები ინტერფეისით და გამოითვალე საერთო ფასი.
// თუ ფასი მეტია 100-ზე, დაბეჭდე "Discount available!"

// 4)შექმენი ორი ინტერფეისი  IHero და ISuperHero.

// IHero უნდა აღწერდეს ჩვეულებრივი გმირის მონაცემებს:
// name: string - გმირის სახელი
// age: number - გმირის ასაკი.

// ISuperHero უნდა დაექსთენდდეს IHero-ით და დაამატოს:
// power: string - გმირის ძალა
// level?: string - optional ველი, რომელიც განისაზღვრება მოგვიანებით

// შექმენი ფუნქცია levelUp(hero: ISuperHero): void, რომელიც:
// ამოწმებს გმირის ასაკს
// თუ ასაკი მეტია 30-ზე - level = "Pro"
// თუ ნაკლებია ან ტოლია 30-ის - level = "Newbie"
// დაბეჭდავს შედეგს კონსოლში:
// "Batman is now level: Pro"

// მინიშნება
// const hero1: ISuperHero = {
//   name: "Batman",
//   age: 35,
//   power: "Stealth",
// };

// interface Ihero {
//   name: string;
//   age: number;
// }

// interface ISuperHero extends Ihero {
//   power: string;
//   level?: string;
// }

// const hero1: ISuperHero = {
//   name: "Batman",
//   age: 15,
//   power: "Stealth",
// };

// function levelUp(hero: ISuperHero): void {
//   if (hero.age > 30) {
//     hero.level = "Pro";
//   } else {
//     hero.level = "Newbie";
//   }

//   console.log(`${hero.name} is now level: ${hero.level}`);
// }

// levelUp(hero1);

// 5)დაწერე generic ფუნქცია, რომელიც აბრუნებს მასივის პირველ ელემენტს.
