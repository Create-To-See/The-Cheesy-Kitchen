var name;
function myFunction() {
    name = document.getElementById("name").value;
    if(name==""){
    alert('Please Fill the Name');
    }
    else
    location.replace("../Restaurant html/restaurant.html");
    }
   function getdata() {
      document.getElementById("naam").innerHTML=name;
    }