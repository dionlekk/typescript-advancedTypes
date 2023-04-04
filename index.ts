// Import stylesheets
import './style.css';

//Intersection types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

//Combing two types. Same can be done with interfaces
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable | Numeric;

//function overload
function add(a: number, b: number): number;
function add(a: string, b: string): string;
//Type Guards
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Dion', 'Lekkas');


//Optional chaining
const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  //job: { title: 'CEO', description: 'My own company'}
};
//Optional chaining
console.log(fetchedUserData?.job?.title);  


//Nullish coalescing
const userInput = '';
const storedData = userInput ?? 'DEAFULT';
console.log(storedData);




console.log('********************************');


type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  //built-in keyword 'in' checks if 'privileges' property exists on emp
  if ('privileges' in emp) {
    console.log('Privilege: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start date: ' + emp.startDate);
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({name: 'Manu', startDate: new Date});

console.log('********************************');

class Car {
  drive() {
    console.log('Driving a car...'); 
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...'); 
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ... ' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();


function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
} 


useVehicle(v1);
useVehicle(v2);

console.log('********************************');

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  } 
  console.log('Moving with speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});

console.log('********************************');

//Type casting
// version 1 const userInputElement = <HTMLInputElement>document.getElementById('user-input');
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

userInputElement.value = 'Hi there!';

//Index properties
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!'
};


