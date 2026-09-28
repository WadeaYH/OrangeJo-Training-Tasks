let arr = [];
fetch("../Data/menu.json")
  .then(response => response.json())
  .then(menu => {
    for (let i = 0; i < menu.meals.length; i++) {
      let temp = [];
      temp.push(menu.meals[i].mealName);temp.push(menu.meals[i].price);temp.push(menu.meals[i].availability);
      arr.push(temp);
      document.getElementById("info").innerHTML += `
      <p><strong>Name:</strong> ${menu.meals[i].mealName}</p>
      <p><strong>Age:</strong> ${menu.meals[i].price}</p>
      <p><strong>Major:</strong> ${menu.meals[i].availability}</p>
      <br> <hr> <br>
    `;
    }
    for (let i = 0; i < arr.length; i++) console.log(arr[i]);
    localStorage.setItem("meals", JSON.stringify(arr));
  });