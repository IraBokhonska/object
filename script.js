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
  averageSpeed: 100,
  engine: 65,
  fuelConsumption: 10,
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
      `Manufacturer is ${this.manufacturer}, model ${this.model}, year ${this.year}, average speed is ${this.averageSpeed} km per hour, 
      engine volume ${this.engine} liters,  fuel consumption is ${this.fuelConsumption} liters per 100km.`
    );
  },

  // стрілочна функція
  // додавання об'єкта в масив
  addIsDriver: () => {
    car.drivers.push({
      number: 3,
      name: "Alex Black",
      age: 30,
    });

    car.drivers.forEach((item) => {
      console.log(`Driver № ${item.number} ${item.name}, age is ${item.age}.`);
    });
  },

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
    const fuel = Math.ceil(distance * (car.fuelConsumption / 100));
    const time = Math.floor(((distance / car.averageSpeed) * 5) / 4);

    console.log(
      `To travel ${distance} km, it will take  ${fuel} liters of fuel and ${time} hours.`
    );
  },
};

car.info();
car.addIsDriver();
car.сheckIsDriver("Alex Black", 30);
car.calculateFuelAndTime(1500);

// 3.Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
// -Складання 2-х об'єктів-дробів.
// -Віднімання 2-х об'єктів-дробів.
// -Множення 2-х об'єктів-дробів.
// -Ділення 2-х об'єктів-дробів.
// -Скорочення об'єкта-дробу.
// (Тобі потрібно буде створити ще деякі методи не зазначені в завданні, для отримання математично правильної відповіді)

const fractions = [
  {
    numerator: 3,
    denominator: 4,
  },
  {
    numerator: 10,
    denominator: 9,
  },
];

// створюємо новий масив
const decimalValues = fractions.map(
  (item) => item.numerator / item.denominator
);

console.log(decimalValues);

const addition = decimalValues.reduce((prev, current) => prev + current);
console.log(`The sum of fractions is  ${+addition.toFixed(2)}.`);

const subtraction = decimalValues.reduce((prev, current) => prev - current);
console.log(`The result of subtraction is ${+subtraction.toFixed(2)}.`);

const multiplication = decimalValues.reduce((prev, current) => prev * current);
console.log(`The result of multiplication is ${+multiplication.toFixed(2)}.`);

const division = decimalValues.reduce((prev, current) => prev / current);
console.log(`The result of division is ${+division.toFixed(2)}.`);
