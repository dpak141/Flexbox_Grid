let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts", "kaju"],
};

let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);

    console.log("Start the production");

    await time(2000);
    console.log("Cut the Fruits");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

    await time(1000);
    console.log("Start the machine");

    await time(2000);
    console.log(`Icecream placed on ${stocks.holder[0]}`);
    await time(3000);
    console.log(`${stocks.toppings[0]} was selected`);

    console.log("Serverd Icecream");
  } catch (error) {
    console.log("Customer left", error);
  } finally {
    console.log("Day ended shop is closed");
  }
}

kitchen();
// let toppings_choice = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("Which toppings would you love?"));
//     }, 3000);
//   });
// };

// async function kitchen() {
//   console.log(" a ");
//   console.log(" b ");

//   await toppings_choice();

//   console.log(" c ");
//   console.log(" d ");
//   console.log(" e ");
// }

// kitchen();

// console.log("Doing the dishes");
// console.log("Cleaning the tables");
// console.log("Taking others order");
