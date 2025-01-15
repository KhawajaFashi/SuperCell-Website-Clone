console.log("Hello Welcome");
let burger = document.querySelector(".burger");
let sidebar = document.querySelector(".sidebar");
let arrow = document.querySelectorAll(".arrow");
let townhalls = document.querySelectorAll(".arrow-display");

console.log(townhalls)
let func = () => {
  console.log(sidebar.style.display);
  if (sidebar.style.display == 'none') {
    sidebar.style.display = 'block';
  }
  else {
    sidebar.style.display = 'none';
  }
}
burger.addEventListener('click', func);


let arrow_func = () => {
  if (townhalls.style.display == 'none') {
    townhalls.style.display = 'block';
  }
  else {
    townhalls.style.display = 'none';
  }
}

arrow.forEach(function(elem,index) {
  elem.addEventListener('click', function () {
    console.log(townhalls[index]);
    if (townhalls[index].style.display == 'none') {
      townhalls[index].style.display = 'block';
    }
    else {
      townhalls[index].style.display = 'none';
    }
  });
});

// function hello() {
//   document.getElementsByClassName("sidebar").style.width = "250px";
//   document.getElementsByClassName("container").style.marginLeft = "250px";
// }
      

// function closeNav() {
//   document.getElementById("mySidebar").style.width = "0";
//   document.getElementById("main").style.marginLeft= "0";
// }