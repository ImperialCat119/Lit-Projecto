const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

document.querySelector("h3").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
  }



document.getElementById("b1").onclick = function(){
  var serPass = document.getElementById("a1").value;
  
  console.log("Hello", serPass);
  
  if(serPass == 270204){
    console.log("Correct!");
    document.querySelector("#result").textContent = "Correct!";
    
    document.querySelector("h4").onmouseover = event => {  
      let iteration = 0;
      
      clearInterval(interval);
      
      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return event.target.dataset.value[index];
            }
          
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");
        
        if(iteration >= event.target.dataset.value.length){ 
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, 30);
    }
  } else {
    console.log("You are not correct");
    document.querySelector("#result").textContent = "Incorrect!";
  }
}

document.getElementById("b2").onclick = function(){
  var cafPass = document.getElementById("a2").value;
  
  console.log("Hello", cafPass);
  
  if(cafPass == "Ice Cream"){
    console.log("Correct!");
    document.querySelector("#result2").textContent = "Correct!";
    
    document.querySelector("h5").onmouseover = event => {  
      let iteration = 0;
      
      clearInterval(interval);
      
      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return event.target.dataset.value[index];
            }
          
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");
        
        if(iteration >= event.target.dataset.value.length){ 
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, 30);
    }
  } else {
    console.log("You are not correct");
    document.querySelector("#result2").textContent = "Incorrect!";
  }
}

document.getElementById("b3").onclick = function(){
  var studyPass = document.getElementById("a3").value;
  
  console.log("Hello", studyPass);
  
  if(studyPass == 19){
    console.log("Correct!");
    document.querySelector("#result3").textContent = "Correct!";
  } else{
    console.log("You are not correct");
    document.querySelector("#result3").textContent = "Incorrect!";
  }
}