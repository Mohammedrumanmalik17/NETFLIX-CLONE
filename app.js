

document.addEventListener("DOMContentLoaded", function() {
  var div1 = document.querySelector("#rum1");
  console.log(div1);
  var div2 = document.querySelector("#rum2");
  console.log(div2);

  if (div1 && div2) {
      div1.addEventListener("click", cardClick);
  } else {
      console.error("One or both elements not found");
  }

  function cardClick() {
  
      if (div2.classList.contains("con1")) {
          div2.classList.remove("con1");
      } else {
          div2.classList.add("con1");
      }
  }
});





document.addEventListener("DOMContentLoaded", function() {
    var div3 = document.querySelector("#rum3");
    console.log(div3);
    var div4 = document.querySelector("#rum4");
    console.log(div4);
  
    if (div3 && div4) {
        div3.addEventListener("click", cardClick);
    } else {
        console.error("One or both elements not found");
    }
  
    function cardClick() {
    
        if (div4.classList.contains("con2")) {
            div4.classList.remove("con2");
        } else {
            div4.classList.add("con2");
        }
    }
  });
  




  document.addEventListener("DOMContentLoaded", function() {
    var div5 = document.querySelector("#rum5");
    console.log(div5);
    var div6 = document.querySelector("#rum6");
    console.log(div6);
  
    if (div5 && div6) {
        div5.addEventListener("click", cardClick);
    } else {
        console.error("One or both elements not found");
    }
  
    function cardClick() {
    
        if (div6.classList.contains("con3")) {
            div6.classList.remove("con3");
        } else {
            div6.classList.add("con3");
        }
    }
  });

  
  

  document.addEventListener("DOMContentLoaded", function() {
    var div7 = document.querySelector("#rum7");
    console.log(div7);
    var div8 = document.querySelector("#rum8");
    console.log(div8);
  
    if (div7 && div8) {
        div7.addEventListener("click", cardClick);
    } else {
        console.error("One or both elements not found");
    }
  
    function cardClick() {
    
        if (div8.classList.contains("con4")) {
            div8.classList.remove("con4");
        } else {
            div8.classList.add("con4");
        }
    }
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
    var div9 = document.querySelector("#rum9");
    console.log(div9);
    var div10 = document.querySelector("#rum10");
    console.log(div10);
  
    if (div9 && div10) {
        div9.addEventListener("click", cardClick);
    } else {
        console.error("One or both elements not found");
    }
  
    function cardClick() {
    
        if (div10.classList.contains("con5")) {
            div10.classList.remove("con5");
        } else {
            div10.classList.add("con5");
        }
    }
  });

   
  document.addEventListener("DOMContentLoaded", function() {
    var div11 = document.querySelector("#rum11");
    console.log(div11);
    var div12 = document.querySelector("#rum12");
    console.log(div12);
  
    if (div11 && div12) {
        div11.addEventListener("click", cardClick);
    } else {
        console.error("One or both elements not found");
    }
  
    function cardClick() {
    
        if (div12.classList.contains("con6")) {
            div12.classList.remove("con6");
        } else {
            div12.classList.add("con6");
        }
    }
  });
  