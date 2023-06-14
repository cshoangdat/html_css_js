// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjCbt3-yzLnhNwq9UN90JP1FjtlJlHRpg",
  authDomain: "kt-iot-f40cc.firebaseapp.com",
  databaseURL: "https://kt-iot-f40cc-default-rtdb.firebaseio.com",
  projectId: "kt-iot-f40cc",
  storageBucket: "kt-iot-f40cc.appspot.com",
  messagingSenderId: "207710915445",
  appId: "1:207710915445:web:c7be8de660792e741ce13c",
  measurementId: "G-MBGYWHL8GJ"
};
firebase.initializeApp(firebaseConfig);

var btnOn = document.getElementById("btnOnId_01");
var btnOff = document.getElementById("btnOffId_01");
var sliderNgang1 = document.getElementById("light-sliderNgang1");
var sliderNgang2 = document.getElementById("light-sliderNgang2");
var sliderNgang3 = document.getElementById("light-sliderNgang3");
var den1 = document.getElementById("light-img1");
var den2 = document.getElementById("light-img2");
var den3 = document.getElementById("light-img3");

btnOn.onclick = function(){
  document.getElementById("denId_01").src = "./assets/img/icons8-light-on-80.png";
  document.getElementById("light-img1").src = "./assets/img/icons8-light-on-80.png";
  document.getElementById("light-img2").src = "./assets/img/icons8-light-on-80.png";
  document.getElementById("light-img3").src = "./assets/img/icons8-light-on-80.png";
  sliderNgang1.disabled = false;
  sliderNgang2.disabled = false;
  sliderNgang3.disabled = false;
  firebase.database().ref("/Control").update({
    "LIGHT": "ON"
  })
  sliderNgang1.oninput = function(){
    document.getElementById("light-sliderNgangValue1").innerHTML = sliderNgang1.value;
    den1.style.opacity = sliderNgang1.value/5;
    // Lấy tham chiếu đến đối tượng Firebase
    var firebaseRef = firebase.database().ref("/Control/LIGHT1 Value");

    // Theo dõi sự kiện thay đổi giá trị của slider
    sliderNgang1.addEventListener("input", function() {
      // Lấy giá trị hiện tại của slider
      var sliderValue = sliderNgang1.value;

      // Gửi giá trị của slider đến Firebase
      firebaseRef.set(sliderValue);
    });
}
sliderNgang2.oninput = function(){
  document.getElementById("light-sliderNgangValue2").innerHTML = sliderNgang2.value;
  den2.style.opacity = sliderNgang2.value/5;
  // Lấy tham chiếu đến đối tượng Firebase
  var firebaseRef = firebase.database().ref("/Control/LIGHT2 Value");

  // Theo dõi sự kiện thay đổi giá trị của slider
  sliderNgang2.addEventListener("input", function() {
    // Lấy giá trị hiện tại của slider
    var sliderValue = sliderNgang2.value;

     // Gửi giá trị của slider đến Firebase
    firebaseRef.set(sliderValue);
   });
}
sliderNgang3.oninput = function(){
  document.getElementById("light-sliderNgangValue3").innerHTML = sliderNgang3.value;
  den3.style.opacity = sliderNgang3.value/5;
  // Lấy tham chiếu đến đối tượng Firebase
  var firebaseRef = firebase.database().ref("/Control/LIGHT3 Value");

  // Theo dõi sự kiện thay đổi giá trị của slider
  sliderNgang3.addEventListener("input", function() {
    // Lấy giá trị hiện tại của slider
    var sliderValue = sliderNgang3.value;

    // Gửi giá trị của slider đến Firebase
    firebaseRef.set(sliderValue);
  });
}
}

btnOff.onclick = function(){
  document.getElementById("denId_01").src = "./assets/img/icons8-light-off-80.png";
  document.getElementById("light-img1").src = "./assets/img/icons8-light-off-80.png";
  document.getElementById("light-img2").src = "./assets/img/icons8-light-off-80.png";
  document.getElementById("light-img3").src = "./assets/img/icons8-light-off-80.png";
  firebase.database().ref("/Control").update({
    "LIGHT": "OFF"
  })
  sliderNgang1.disabled = true;
  sliderNgang2.disabled = true;
  sliderNgang3.disabled = true;
  sliderNgang1.oninput = function(){
    document.getElementById("light-sliderNgangValue1").innerHTML = "OFF";
    den1.style.opacity = 1;
}
sliderNgang2.oninput = function(){
  document.getElementById("light-sliderNgangValue2").innerHTML = "OFF";
  den2.style.opacity = 1;
}
sliderNgang3.oninput = function(){
  document.getElementById("light-sliderNgangValue3").innerHTML = "OFF";
  den3.style.opacity = 1;
}
}

firebase.database().ref("/Sensor/temp1").on("value",function(snapshot){
  var nd = snapshot.val();
  document.getElementById("nhietdo1").innerHTML = nd;
  console.log(nd);
});
firebase.database().ref("/Sensor/temp2").on("value",function(snapshot){
  var nd = snapshot.val();
  document.getElementById("nhietdo2").innerHTML = nd;
  console.log(nd);
});
firebase.database().ref("/Sensor/temp3").on("value",function(snapshot){
  var nd = snapshot.val();
  document.getElementById("nhietdo3").innerHTML = nd;
  console.log(nd);
});
