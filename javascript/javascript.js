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
       if(name=="")
       name="Food Lover";
   document.getElementById("naam").innerHTML=`Welcome  &nbsp${name}  `;
    }