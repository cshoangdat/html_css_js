document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById("tv-switch");
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        // do this
        document.getElementById("tv-img").src = "./assets/img/icons8-tv-on-100.png"
        document.getElementById("tv-state").innerHTML = "ON";
        firebase.database().ref("/Control").update({
          "TV": "ON"
        })
      } else {
        // do that
        document.getElementById("tv-img").src = "./assets/img/icons8-tv-off-100.png"
        document.getElementById("tv-state").innerHTML = "OFF";
        firebase.database().ref("/Control").update({
          "TV": "OFF"
        })
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById("light-switch");
    var sliderNgang = document.getElementById("light-sliderNgang");
    var den = document.getElementById("light-img");
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        // do this
        document.getElementById("light-img").src = "./assets/img/icons8-light-on-80.png"
        document.getElementById("light-state").innerHTML = "ON";
        firebase.database().ref("/Control").update({
          "LIGHT": "ON"
        })
        sliderNgang.oninput = function(){
            document.getElementById("light-sliderNgangValue").innerHTML = sliderNgang.value;
            den.style.opacity = sliderNgang.value/3;
            // Lấy tham chiếu đến đối tượng Firebase
            var firebaseRef = firebase.database().ref("/Control/LIGHT Value");

            // Theo dõi sự kiện thay đổi giá trị của slider
            sliderNgang.addEventListener("input", function() {
              // Lấy giá trị hiện tại của slider
              var sliderValue = sliderNgang.value;

              // Gửi giá trị của slider đến Firebase
              firebaseRef.set(sliderValue);
            });
        }
      } else {
        // do that
        document.getElementById("light-img").src = "./assets/img/icons8-light-off-80.png"
        document.getElementById("light-state").innerHTML = "OFF";
        firebase.database().ref("/Control").update({
          "LIGHT": "OFF"
        })
        sliderNgang.oninput = function(){
            document.getElementById("light-sliderNgangValue").innerHTML = "OFF";
            den.style.opacity = 1;
        }
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById("fan-switch");
    var sliderNgang = document.getElementById("fan-sliderNgang");
    var quat = document.getElementById("fan-img");
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        // do this
        document.getElementById("fan-img").src = "./assets/img/icons8-fan-auto-96.png"
        document.getElementById("fan-state").innerHTML = "ON";
        firebase.database().ref("/Control").update({
          "FAN": "ON"
        })
        sliderNgang.oninput = function(){
            document.getElementById("fan-sliderNgangValue").innerHTML = sliderNgang.value;
            var firebaseRef = firebase.database().ref("/Control/FAN Value");

            // Theo dõi sự kiện thay đổi giá trị của slider
            sliderNgang.addEventListener("input", function() {
              // Lấy giá trị hiện tại của slider
              var sliderValue = sliderNgang.value;

              // Gửi giá trị của slider đến Firebase
              firebaseRef.set(sliderValue);
            });
        }
      } else {
        // do that
        document.getElementById("fan-img").src = "./assets/img/icons8-fan-off-96.png"
        document.getElementById("fan-state").innerHTML = "OFF";
        firebase.database().ref("/Control").update({
          "FAN": "OFF"
        })
        sliderNgang.oninput = function(){
            document.getElementById("fan-sliderNgangValue").innerHTML = "OFF";
        }
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById("lock-switch");
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        // do this
        document.getElementById("lock-img").src = "./assets/img/unlock.png"
        document.getElementById("lock-state").innerHTML = "UNLOCK";
        firebase.database().ref("/Control").update({
          "LOCK": "UNLOCK"
        })
      } else {
        // do that
        document.getElementById("lock-img").src = "./assets/img/padlock.png"
        document.getElementById("lock-state").innerHTML = "LOCK";
        firebase.database().ref("/Control").update({
          "LOCK": "LOCK"
        })
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById("air-switch");
    var sliderNgang = document.getElementById("air-sliderNgang");
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        // do this
        document.getElementById("air-img").src = "./assets/img/air-conditioner.png"
        document.getElementById("air-state").innerHTML = "ON";
        firebase.database().ref("/Control").update({
          "AIR CONDITION": "ON"
        })
        sliderNgang.oninput = function(){
            document.getElementById("air-sliderNgangValue").innerHTML = sliderNgang.value;
            var firebaseRef = firebase.database().ref("/Control/AIR CONDITION Value");

            // Theo dõi sự kiện thay đổi giá trị của slider
            sliderNgang.addEventListener("input", function() {
            // Lấy giá trị hiện tại của slider
            var sliderValue = sliderNgang.value;

            // Gửi giá trị của slider đến Firebase
            firebaseRef.set(sliderValue);
          });
        }
        
      } else {
        // do that
        document.getElementById("air-img").src = "./assets/img/air-conditioner-off.png"
        document.getElementById("air-state").innerHTML = "OFF";
        firebase.database().ref("/Control").update({
          "AIR CONDITION": "OFF"
        })
        sliderNgang.oninput = function(){
            document.getElementById("air-sliderNgangValue").innerHTML = "OFF"
        }
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById("cam-switch");
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        // do this
        document.getElementById("cam-img").src = "./assets/img/icons8-wall-mount-camera-96-on.png"
        document.getElementById("cam-state").innerHTML = "ON";
        firebase.database().ref("/Control").update({
          "CAM": "ON"
        })
      } else {
        // do that
        document.getElementById("cam-img").src = "./assets/img/icons8-wall-mount-camera-96-off.png"
        document.getElementById("cam-state").innerHTML = "OFF";
        firebase.database().ref("/Control").update({
          "CAM": "OFF"
        })
      }
    });
  });

  function switchPage(evt, pageName) {
    var i, sections, links;
    sections = document.getElementsByTagName("section");
    for (i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }
    links = document.getElementsByClassName("active");
    for (i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }
    var targetSection = document.getElementById(pageName);
    if (targetSection.style.display !== "flex") {
      targetSection.style.display = "flex";
      evt.currentTarget.classList.add("active");
    }
}
//Page 2:
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById("oven-switch");

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
      document.getElementById("oven-img").src = "./assets/img/stove.png";
      document.getElementById("oven-state").innerHTML = "ON";
    } else {
      // do that
      document.getElementById("oven-img").src = "./assets/img/stove_off.png"
      document.getElementById("oven-state").innerHTML = "OFF";
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById("light2-switch");
  var sliderNgang = document.getElementById("light2-sliderNgang");
  var den = document.getElementById("light2-img");

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
      document.getElementById("light2-img").src = "./assets/img/icons8-light-on-80.png"
      document.getElementById("light2-state").innerHTML = "ON";
      sliderNgang.oninput = function(){
          document.getElementById("light2-sliderNgangValue").innerHTML = sliderNgang.value;
          den.style.opacity = sliderNgang.value/3;
      }
    } else {
      // do that
      document.getElementById("light2-img").src = "./assets/img/icons8-light-off-80.png"
      document.getElementById("light2-state").innerHTML = "OFF";
      sliderNgang.oninput = function(){
          document.getElementById("light2-sliderNgangValue").innerHTML = sliderNgang.value;
          den.style.opacity = 1;
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById("fan2-switch");
  var sliderNgang = document.getElementById("fan2-sliderNgang");
  var quat = document.getElementById("fan2-img");

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
      document.getElementById("fan2-img").src = "./assets/img/icons8-fan-auto-96.png"
      document.getElementById("fan2-state").innerHTML = "ON";
      sliderNgang.oninput = function(){
          if(sliderNgang.value == 1){
              document.getElementById("fan2-sliderNgangValue").innerHTML = "LOW";
          }
          if(sliderNgang.value == 2){
              document.getElementById("fan2-sliderNgangValue").innerHTML = "MED";
          }
          if(sliderNgang.value == 3){
              document.getElementById("fan2-sliderNgangValue").innerHTML = "HIGH";
          }
      }
    } else {
      // do that
      document.getElementById("fan2-img").src = "./assets/img/icons8-fan-off-96.png"
      document.getElementById("fan2-state").innerHTML = "OFF";
      sliderNgang.oninput = function(){
          document.getElementById("fan2-sliderNgangValue").innerHTML = "OFF";
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById("vac-switch");

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
      document.getElementById("vac-img").src = "./assets/img/vacuum-cleaner.png"
      document.getElementById("vac-state").innerHTML = "ON";
    } else {
      // do that
      document.getElementById("vac-img").src = "./assets/img/vacuum-cleaner_off.png"
      document.getElementById("vac-state").innerHTML = "OFF";
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById("stove-switch");

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
      document.getElementById("stove-img").src = "./assets/img/oven_on.png"
      document.getElementById("stove-state").innerHTML = "ON";  
    } else {
      // do that
      document.getElementById("stove-img").src = "./assets/img/oven_off.png"
      document.getElementById("stove-state").innerHTML = "OFF";
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById("cam2-switch");

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
      document.getElementById("cam2-img").src = "./assets/img/icons8-wall-mount-camera-96-on.png"
      document.getElementById("cam2-state").innerHTML = "ON";
    } else {
      // do that
      document.getElementById("cam2-img").src = "./assets/img/icons8-wall-mount-camera-96-off.png"
      document.getElementById("cam2-state").innerHTML = "OFF";
    }
  });
});

//page 3:
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById("air2-switch");
  var sliderNgang = document.getElementById("air2-sliderNgang");

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
      document.getElementById("air2-img").src = "./assets/img/air-conditioner.png"
      document.getElementById("air2-state").innerHTML = "ON";
      sliderNgang.oninput = function(){
          document.getElementById("air2-sliderNgangValue").innerHTML = sliderNgang.value;
      }
    } else {
      // do that
      document.getElementById("air2-img").src = "./assets/img/air-conditioner-off.png"
      document.getElementById("air2-state").innerHTML = "OFF";
      sliderNgang.oninput = function(){
          document.getElementById("air2-sliderNgangValue").innerHTML = "OFF"
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById("light3-switch");
  var sliderNgang = document.getElementById("light3-sliderNgang");
  var den = document.getElementById("light3-img");

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
      document.getElementById("light3-img").src = "./assets/img/icons8-light-on-80.png"
      document.getElementById("light3-state").innerHTML = "ON";
      sliderNgang.oninput = function(){
          document.getElementById("light3-sliderNgangValue").innerHTML = sliderNgang.value;
          den.style.opacity = sliderNgang.value/3;
      }
    } else {
      // do that
      document.getElementById("light3-img").src = "./assets/img/icons8-light-off-80.png"
      document.getElementById("light3-state").innerHTML = "OFF";
      sliderNgang.oninput = function(){
          document.getElementById("light3-sliderNgangValue").innerHTML = sliderNgang.value;
          den.style.opacity = 1;
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById("fan3-switch");
  var sliderNgang = document.getElementById("fan3-sliderNgang");
  var quat = document.getElementById("fan3-img");

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
      document.getElementById("fan3-img").src = "./assets/img/icons8-fan-auto-96.png"
      document.getElementById("fan3-state").innerHTML = "ON";
      sliderNgang.oninput = function(){
          if(sliderNgang.value == 1){
              document.getElementById("fan3-sliderNgangValue").innerHTML = "LOW";
          }
          if(sliderNgang.value == 2){
              document.getElementById("fan3-sliderNgangValue").innerHTML = "MED";
          }
          if(sliderNgang.value == 3){
              document.getElementById("fan3-sliderNgangValue").innerHTML = "HIGH";
          }
      }
    } else {
      // do that
      document.getElementById("fan3-img").src = "./assets/img/icons8-fan-off-96.png"
      document.getElementById("fan3-state").innerHTML = "OFF";
      sliderNgang.oninput = function(){
          document.getElementById("fan3-sliderNgangValue").innerHTML = "OFF";
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById("vac2-switch");

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
      document.getElementById("vac2-img").src = "./assets/img/vacuum-cleaner.png"
      document.getElementById("vac2-state").innerHTML = "ON";
    } else {
      // do that
      document.getElementById("vac2-img").src = "./assets/img/vacuum-cleaner_off.png"
      document.getElementById("vac2-state").innerHTML = "OFF";
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById("pc-switch");

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
      document.getElementById("pc-img").src = "./assets/img/computer.png"
      document.getElementById("pc-state").innerHTML = "ON";  
    } else {
      // do that
      document.getElementById("pc-img").src = "./assets/img/computer_off.png"
      document.getElementById("pc-state").innerHTML = "OFF";
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById("cam3-switch");

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
      document.getElementById("cam3-img").src = "./assets/img/icons8-wall-mount-camera-96-on.png"
      document.getElementById("cam3-state").innerHTML = "ON";
    } else {
      // do that
      document.getElementById("cam3-img").src = "./assets/img/icons8-wall-mount-camera-96-off.png"
      document.getElementById("cam3-state").innerHTML = "OFF";
    }
  });
});
//Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBsXPE8HUQ6owySSP9N_ftVlSLy5ua3_sY",
  authDomain: "smarthome-7c798.firebaseapp.com",
  databaseURL: "https://smarthome-7c798-default-rtdb.firebaseio.com",
  projectId: "smarthome-7c798",
  storageBucket: "smarthome-7c798.appspot.com",
  messagingSenderId: "154743826556",
  appId: "1:154743826556:web:43c2cf81e3c41c468841f9",
  measurementId: "G-N8Y51V2GHE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.database().ref("/Sensor/temp").on("value",function(snapshot){
  var nd = snapshot.val();
  document.getElementById("nhietdo").innerHTML = nd;
  console.log(nd);
});
firebase.database().ref("/Sensor/humid").on("value",function(snapshot){
  var nd = snapshot.val();
  document.getElementById("doam").innerHTML = nd;
  console.log(nd);
});
firebase.database().ref("/Sensor/gas").on("value",function(snapshot){
  var nd = snapshot.val();
  document.getElementById("khigas").innerHTML = nd;
  console.log(nd);
});
firebase.database().ref("/Sensor/light").on("value",function(snapshot){
  var nd = snapshot.val();
  document.getElementById("anhsang").innerHTML = nd;
  console.log(value);
});
firebase.database().ref("/Control").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())

    var tv_status = snapshot.val()
    if (tv_status["TV"] == "ON"){
      document.getElementById("tv-img").src = "./assets/img/icons8-tv-on-100.png"
      document.getElementById("tv-switch").checked = true;
      document.getElementById("tv-state").innerHTML = "ON";
    }
    else{
      document.getElementById("tv-img").src = "./assets/img/icons8-tv-off-100.png"
      document.getElementById("tv-switch").checked = false;
      document.getElementById("tv-state").innerHTML = "OFF";
    }
  }
  else
    console.log("No data available!")
})
firebase.database().ref("/Control").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())

    var light_status = snapshot.val()
    if (light_status["LIGHT"] == "ON"){
      document.getElementById("light-img").src = "./assets/img/icons8-light-on-80.png"
      document.getElementById("light-state").innerHTML = "ON"
      document.getElementById("light-switch").checked = true;
      var den = document.getElementById("light-img");
      // Lấy tham chiếu đến đối tượng Firebase
      var firebaseRef = firebase.database().ref("/Control/LIGHT Value");

      // Lấy tham chiếu đến slider HTML
      var sliderNgang = document.getElementById("light-sliderNgang");
      // Lắng nghe sự kiện thay đổi giá trị trong Firebase Realtime Database
      firebaseRef.on("value", function(snapshot) {
        // Lấy giá trị hiện tại của nút Firebase
        var sliderValue = snapshot.val();

        // Đặt giá trị của slider tương ứng với giá trị trong Firebase
        sliderNgang.value = sliderValue;
        document.getElementById("light-sliderNgangValue").innerHTML = sliderNgang.value;
        den.style.opacity = sliderNgang.value/3;
      });

      sliderNgang.oninput = function(){
        document.getElementById("light-sliderNgangValue").innerHTML = sliderNgang.value;
        den.style.opacity = sliderNgang.value/3;
        // Lấy tham chiếu đến đối tượng Firebase
        var firebaseRef = firebase.database().ref("/Control/LIGHT Value");

        // Theo dõi sự kiện thay đổi giá trị của slider
        sliderNgang.addEventListener("input", function() {
          // Lấy giá trị hiện tại của slider
          var sliderValue = sliderNgang.value;

          // Gửi giá trị của slider đến Firebase
          firebaseRef.set(sliderValue);
        });
    }
    }
    else{
      document.getElementById("light-img").src = "./assets/img/icons8-light-off-80.png"
      document.getElementById("light-state").innerHTML = "OFF"
      document.getElementById("light-switch").checked = false;
      sliderNgang.oninput = function(){
        document.getElementById("light-sliderNgangValue").innerHTML = "OFF";
        den.style.opacity = 1;
    }
    }
  }
  else
    console.log("No data available!")
})
firebase.database().ref("/Control").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())

    var fan_status = snapshot.val()
    if (fan_status["FAN"] == "ON"){
      document.getElementById("fan-img").src = "./assets/img/icons8-fan-auto-96.png"
      document.getElementById("fan-switch").checked = true;
      document.getElementById("fan-state").innerHTML = "ON";
      var firebaseRef = firebase.database().ref("/Control/FAN Value");

      // Lấy tham chiếu đến slider HTML
      var sliderNgang = document.getElementById("fan-sliderNgang");
      // Lắng nghe sự kiện thay đổi giá trị trong Firebase Realtime Database
      firebaseRef.on("value", function(snapshot) {
        // Lấy giá trị hiện tại của nút Firebase
        var sliderValue = snapshot.val();

        // Đặt giá trị của slider tương ứng với giá trị trong Firebase
        sliderNgang.value = sliderValue;
        document.getElementById("fan-sliderNgangValue").innerHTML = sliderNgang.value;
      });
      sliderNgang.oninput = function(){
        document.getElementById("fan-sliderNgangValue").innerHTML = sliderNgang.value;
        var firebaseRef = firebase.database().ref("/Control/FAN Value");

        // Theo dõi sự kiện thay đổi giá trị của slider
        sliderNgang.addEventListener("input", function() {
          // Lấy giá trị hiện tại của slider
          var sliderValue = sliderNgang.value;

          // Gửi giá trị của slider đến Firebase
          firebaseRef.set(sliderValue);
        });
      }
    }
    else{
      document.getElementById("fan-img").src = "./assets/img/icons8-fan-off-96.png"
      document.getElementById("fan-switch").checked = false;
      document.getElementById("fan-state").innerHTML = "OFF";
      sliderNgang.oninput = function(){
        document.getElementById("fan-sliderNgangValue").innerHTML = "OFF";
    }
    }
  }
  else
    console.log("No data available!")
})
firebase.database().ref("/Control").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())

    var lock_status = snapshot.val()
    if (lock_status["LOCK"] == "LOCK"){
      document.getElementById("lock-img").src = "./assets/img/padlock.png"
      document.getElementById("lock-switch").checked = false;
      document.getElementById("lock-state").innerHTML = "LOCK";
    }
    else{
      document.getElementById("lock-img").src = "./assets/img/unlock.png"
      document.getElementById("lock-switch").checked = true;
      document.getElementById("lock-state").innerHTML = "UNLOCK";
    }
  }
  else
    console.log("No data available!")
})
firebase.database().ref("/Control").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())

    var air_status = snapshot.val()
    if (air_status["AIR CONDITION"] == "ON"){
      document.getElementById("air-img").src = "./assets/img/air-conditioner.png"
      document.getElementById("air-switch").checked = true;
      document.getElementById("air-state").innerHTML = "ON";
      var firebaseRef = firebase.database().ref("/Control/AIR CONDITION Value");

      // Lấy tham chiếu đến slider HTML
      var sliderNgang = document.getElementById("air-sliderNgang");
      // Lắng nghe sự kiện thay đổi giá trị trong Firebase Realtime Database
      firebaseRef.on("value", function(snapshot) {
        // Lấy giá trị hiện tại của nút Firebase
        var sliderValue = snapshot.val();

        // Đặt giá trị của slider tương ứng với giá trị trong Firebase
        sliderNgang.value = sliderValue;
        document.getElementById("air-sliderNgangValue").innerHTML = sliderNgang.value;
      });
      sliderNgang.oninput = function(){
        document.getElementById("air-sliderNgangValue").innerHTML = sliderNgang.value;
        var firebaseRef = firebase.database().ref("/Control/AIR CONDITION Value");

        // Theo dõi sự kiện thay đổi giá trị của slider
        sliderNgang.addEventListener("input", function() {
        // Lấy giá trị hiện tại của slider
        var sliderValue = sliderNgang.value;

        // Gửi giá trị của slider đến Firebase
        firebaseRef.set(sliderValue);
      });
    }
    }
    else{
      document.getElementById("air-img").src = "./assets/img/air-conditioner-off.png"
      document.getElementById("air-switch").checked = false;
      document.getElementById("air-state").innerHTML = "OFF";
    }
  }
  else
    console.log("No data available!")
})
firebase.database().ref("/Control").get().then((snapshot) => {
  if(snapshot.exists()){
    console.log(snapshot.val())

    var cam_status = snapshot.val()
    if (cam_status["CAM"] == "ON"){
      document.getElementById("cam-img").src = "./assets/img/icons8-wall-mount-camera-96-on.png"
      document.getElementById("cam-switch").checked = true;
      document.getElementById("cam-state").innerHTML = "ON";
    }
    else{
      document.getElementById("cam-img").src = "./assets/img/icons8-wall-mount-camera-96-off.png"
      document.getElementById("cam-switch").checked = false;
      document.getElementById("cam-state").innerHTML = "OFF";
      sliderNgang.oninput = function(){
        document.getElementById("air-sliderNgangValue").innerHTML = "OFF"
    }
    }
  }
  else
    console.log("No data available!")
})

var elements = document.querySelectorAll(".menu-button");

function handleElementClick(event) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove("hover");
  }
  event.currentTarget.classList.add("hover");
}

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", handleElementClick);
}





