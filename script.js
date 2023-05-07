// 1. Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку,
// середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// -Метод, який виводить на екран інформацію про автомобіль.
// -Додавання ім’я водія у список
// -Перевірка водія на наявність його ім’я у списку
// -Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю.
// Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.

const car = {
  manufacturer: "Germany",
  model: "Audi",
  year: 2015,
  "average speed": 100,
  engine: 65,
  "fuel consumption": 10,
  drivers: [
    {
      number: 1,
      name: "Sierra White",
      age: 30,
    },
    {
      number: 2,
      name: "Barton Brown",
      age: 25,
    },
  ],

  // функція вираз
  info: function () {
    console.log(
      `Manufacturer is ${car.manufacturer}, model ${car.model}, year ${car.year}, average speed is ${car["average speed"]} km per hour, 
      engine volume ${car.engine} liters,  fuel consumption is ${car["fuel consumption"]} liters per 100km.`
    );
  },

  // стрілочна функція
  // додавання об'єкта в масив
  addDriver: () => {
    car.drivers.push({
      number: 3,
      name: "Alex Black",
      age: 30,
    });

    car.drivers.forEach((item) => {
      console.log(`Driver № ${item.number} ${item.name}, age is ${item.age}.`);
    });
  },

  // найкращий спосіб запису(скороч. запис ф-ї вираз)

  сheckIsDriver(someName, someAge) {
    car.drivers.forEach((driver) => {
      if (driver.name === someName && driver.age === someAge) {
        console.log(
          `Driver is in list of drivers: № ${driver.number} ${driver.name}, age is ${driver.age}.`
        );
      } else {
        console.log("Driver is not in list of drivers.");
      }
    });
  },

  calculateFuelAndTime(distance) {
    const fuel = Math.ceil(distance * (car["fuel consumption"] / 100));
    const time = Math.floor(((distance / car["average speed"]) * 5) / 4);

    console.log(
      `To travel ${distance} km, it will take  ${fuel} liters of fuel and ${time} hours.`
    );
  },
};

car.info();
car.addDriver();
car.сheckIsDriver("Alex Black", 15);
car.calculateFuelAndTime(1500);
