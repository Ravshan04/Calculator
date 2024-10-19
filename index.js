const inputValue = document.getElementById("userinput");

const calculate = document
.querySelectorAll(".operations")
.forEach(function(item){
  
  item.addEventListener("click", function(e){});
});

const number = document.querySelectorAll(".numbers")
  .forEach(function(item){
   item.addEventListener("click" , function(e){
      inputValue.innerText += e.target.innerText.trim();  
   });
});