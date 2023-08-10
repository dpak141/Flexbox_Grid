let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts", "kaju"],
};

let is_shop_open = true;

let toppings_choice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Which toppings would you love?"));
    }, 3000);
  });
};

async function kitchen() {
  console.log(" a ");
  console.log(" b ");

  await toppings_choice();

  console.log(" c ");
  console.log(" d ");
  console.log(" e ");
}

kitchen();

console.log("Doing the dishes");
console.log("Cleaning the tables");
console.log("Taking others order");
