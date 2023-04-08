const firebaseConfig = {
    apiKey: "AIzaSyDgczKlu5OOpMLWs-DrTdEmtjEQd0JQZFo",
    authDomain: "ramasubramaniyan-874d5.firebaseapp.com",
    projectId: "ramasubramaniyan-874d5",
    storageBucket: "ramasubramaniyan-874d5.appspot.com",
    messagingSenderId: "735316023038",
    appId: "1:735316023038:web:d6198c5f8a44483cad77af",
    measurementId: "G-63FWTTH71T"
  };
  firebase.initializeApp(firebaseConfig);
  const database=firebase.database().ref("databasestore");
  document.querySelector(".go").addEventListener('click',function(){
  database.push().set({
    name:"hi",
  });
})
// function fun(){
//     var a=document.getElementById('username').value;
//     var b=document.getElementById('password').value;
//     const array=["ram","sabari","shreedharan","rakesh","prasanth"];
//     const password=['07012003','13122002','06122002','02032002','18052003'];
// var c=0;
//     for(i=0;i<array.length;i++){
//   if(a==array[i]&&b==password[i]){
//       window.location.href ="pro/index.html";
//     c=1;
//   }
//   }
//   if(c==0){
//       alert("wrong");
//   }

// }