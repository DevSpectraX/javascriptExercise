const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let newFoods = [];
let i = 0
for (const food of foodSchedule) {
  if(food.isVegan === false){
    food.name = fruits[i];
    food.isVegan = true;
    newFoods.push(food);
    i++;
  }
  else{
    newFoods.push(food);
  }
  
}

console.log(newFoods);