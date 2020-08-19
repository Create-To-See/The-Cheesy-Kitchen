var val;
var ct=new Array(24);
        var naam=["Items","PIZZA SPECIAL","BURGER  SPECIAL",
        "COMBINATION  PASTA","FARMHOUSE PIZZA","VEG-LOADED",
        "ALOO TIKKI BURGER","MAHARAJA MAC","RED SAUCE PASTA",
        "WHITE SAUCE PASTA","OREO SHAKE","KIT KAT SHAKE"];
        var rate=[0,300,130,180,150,125,50,110,120,120,100,100];
        for(var i=0;i<24;i++){
            ct[i]=0;
        }
var v="";
var price=0;
function con(x)
{
v=v+x+"<br>";
document.getElementById("su").value=v;
document.getElementById("pr").value=price;
}
        function add1(y){
    var label1=document.getElementById("label1").innerHTML;
    if(label1=='ADD'){
        label1=0;
    }
    label1++;
        ct[0]++;
   //     document.getElementById("demo").innerHTML=ct[0];
        ct[1]++; //for count of first item
       document.getElementById("label1").innerHTML=label1; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("ps").value;
con(x); 
}
function sub1(){
    var label1=document.getElementById("label1").innerHTML;
     if(label1!='ADD'){
    
    label1--;
         ct[0]--;
 //        document.getElementById("demo").innerHTML=ct[0];
         ct[1]--; //for count of first item
    if(label1==0){
        label1='ADD';
    }
     document.getElementById("label1").innerHTML=label1;
}}
         function add2(y){
    var label2=document.getElementById("label2").innerHTML;
    if(label2=='ADD'){
        label2=0;
    }
    label2++;
    ct[0]++;
 //   document.getElementById("demo").innerHTML=ct[0];
    ct[2]++;
       document.getElementById("label2").innerHTML=label2; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("bs").value;
con(x); 
}
function sub2(){
    var label2=document.getElementById("label2").innerHTML;
    if(label2!='ADD'){
    label2--;
    ct[0]--;
 //   document.getElementById("demo").innerHTML=ct[0];
    ct[2]--;
    if(label2==0){
        label2='ADD';
    }
     document.getElementById("label2").innerHTML=label2;
}}
 function add3(y){
    var label3=document.getElementById("label3").innerHTML;
    if(label3=='ADD'){
        label3=0;
    }
    label3++;
    ct[0]++;
 //   document.getElementById("demo").innerHTML=ct[0]; 
    ct[3]++;
       document.getElementById("label3").innerHTML=label3; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("cp").value;
con(x); 
}
function sub3(){
    var label3=document.getElementById("label3").innerHTML;
    if(label3!='ADD'){
    label3--;
    ct[0]--;
 //   document.getElementById("demo").innerHTML=ct[0];
    ct[3]--;   
    if(label3==0){
        label3='ADD';
    }
     document.getElementById("label3").innerHTML=label3;
}}
     function add4(y){
    var label4=document.getElementById("label4").innerHTML;
    if(label4=='ADD'){
        label4=0;
    }
    label4++;
    ct[0]++;
  //  document.getElementById("demo").innerHTML=ct[0];
         ct[4]++;
       document.getElementById("label4").innerHTML=label4; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("fp").value;
con(x); 
}
function sub4(){
    var label4=document.getElementById("label4").innerHTML;
    if(label4!='ADD'){
    label4--;
    ct[0]--;
  //  document.getElementById("demo").innerHTML=ct[0];
         ct[4]--;
    if(label4==0){
        label4='ADD';
    }
     document.getElementById("label4").innerHTML=label4;
}}   
 function add5(y){
    var label5=document.getElementById("label5").innerHTML;
    if(label5=='ADD'){
        label5=0;
    }
    label5++;
    ct[0]++;
 //   document.getElementById("demo").innerHTML=ct[0];
     ct[5]++;
       document.getElementById("label5").innerHTML=label5; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("vl").value;
con(x); 

}
function sub5(){
    var label5=document.getElementById("label5").innerHTML;
    if(label5!='ADD'){
    label5--;
    ct[0]--;
 //   document.getElementById("demo").innerHTML=ct[0];
         ct[5]--;
    if(label5==0){
        label5='ADD';
    }
     document.getElementById("label5").innerHTML=label5;
}}
     function add6(y){
    var label6=document.getElementById("label6").innerHTML;
    if(label6=='ADD'){
        label6=0;
    }
    label6++;
    ct[0]++;
 //   document.getElementById("demo").innerHTML=ct[0];
            ct[6]++;
       document.getElementById("label6").innerHTML=label6; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("atb").value;
con(x); 
}
function sub6(){
    var label6=document.getElementById("label6").innerHTML;
    if(label6!='ADD'){
    label6--;
    ct[0]--;
  //  document.getElementById("demo").innerHTML=ct[0];
         ct[6]--;
    if(label6==0){
        label6='ADD';
    }
     document.getElementById("label6").innerHTML=label6;
}} 
         function add7(y){
    var label7=document.getElementById("label7").innerHTML;
    if(label7=='ADD'){
        label7=0;
    }
    label7++;
    ct[0]++;
  //  document.getElementById("demo").innerHTML=ct[0];
                ct[7]++;
       document.getElementById("label7").innerHTML=label7; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("mm").value;
con(x); 
}
function sub7(){
    var label7=document.getElementById("label7").innerHTML;
    if(label7!='ADD'){
        label7--;
        ct[0]--;
  //      document.getElementById("demo").innerHTML=ct[0];
         ct[7]--;
    if(label7==0){
        label7='ADD';
    }
     document.getElementById("label7").innerHTML=label7;
}}
         function add8(y){
    var label8=document.getElementById("label8").innerHTML;
    if(label8=='ADD'){
        label8=0;
    }
    label8++;
    ct[0]++;
 //   document.getElementById("demo").innerHTML=ct[0];
                ct[8]++;
       document.getElementById("label8").innerHTML=label8; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("rsp").value;
con(x); 
}
function sub8(){
    var label8=document.getElementById("label8").innerHTML;
    if(label8!='ADD'){
    label8--;
    ct[0]--;
 //   document.getElementById("demo").innerHTML=ct[0];
         ct[8]--;
    if(label8==0){
        label8='ADD';
    }
     document.getElementById("label8").innerHTML=label8;
}}
         function add9(y){
    var label9=document.getElementById("label9").innerHTML;
    if(label9=='ADD'){
        label9=0;
    }
    label9++;
    ct[0]++;
 //   document.getElementById("demo").innerHTML=ct[0];
                ct[9]++;
       document.getElementById("label9").innerHTML=label9; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("wsp").value;
con(x); 
}
function sub9(){
    var label9=document.getElementById("label9").innerHTML;
    if(label9!='ADD'){
    label9--;
    ct[0]--;
  //  document.getElementById("demo").innerHTML=ct[0];
         ct[9]--;
    if(label9==0){
        label9='ADD';
    }
     document.getElementById("label9").innerHTML=label9;
}}
         function add10(y){
    var label10=document.getElementById("label10").innerHTML;
    if(label10=='ADD'){
        label10=0;
    }
    label10++;
    ct[0]++;
  //  document.getElementById("demo").innerHTML=ct[0];
                ct[10]++;
       document.getElementById("label10").innerHTML=label10; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("os").value;
con(x); 
}
function sub10(){
    var label10=document.getElementById("label10").innerHTML;
    if(label10!='ADD'){
    label10--;
    ct[0]--;
   // document.getElementById("demo").innerHTML=ct[0];
         ct[10]--;
    if(label10==0){
        label10='ADD';
    }
     document.getElementById("label10").innerHTML=label10;
}}
         function add11(y){
    var label11=document.getElementById("label11").innerHTML;
    if(label11=='ADD'){
        label11=0;
    }
    label11++;
    ct[0]++;
  //  document.getElementById("demo").innerHTML=ct[0];
                ct[11]++;
       document.getElementById("label11").innerHTML=label11; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("kks").value;
con(x); 
}
function sub11(){
    var label11=document.getElementById("label11").innerHTML;
    if(label11!='ADD'){
    label11--;
    ct[0]--;
  //  document.getElementById("demo").innerHTML=ct[0];
        ct[11]--;
    if(label11==0){
        label11='ADD';
    }
     document.getElementById("label11").innerHTML=label11;
}}
function add12(y){
    var label12=document.getElementById("label12").innerHTML;
    if(label12=='ADD'){
        label12=0;
    }
    label12++;
       document.getElementById("label12").innerHTML=label12; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("vhn").value;
con(x); 
}
function sub12(){
    var label12=document.getElementById("label12").innerHTML;
     if(label12!='ADD'){
    
    label12--;
    if(label12==0){
        label12='ADD';
    }
     document.getElementById("label12").innerHTML=label12;
}}
   
 function add13(y){
    var label13=document.getElementById("label13").innerHTML;
    if(label13=='ADD'){
        label13=0;
    }
    label13++;
       document.getElementById("label13").innerHTML=label13; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("tm").value;
con(x); 
}
function sub13(){
    var label13=document.getElementById("label13").innerHTML;
    if(label13!='ADD'){
    label13--;
    if(label13==0){
        label13='ADD';
    }
     document.getElementById("label13").innerHTML=label13;
}}
     function add14(y){
    var label14=document.getElementById("label14").innerHTML;
    if(label14=='ADD'){
        label14=0;
    }
    label14++;
       document.getElementById("label14").innerHTML=label14; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("cmh").value;
con(x); 
}
function sub14(){
    var label14=document.getElementById("label14").innerHTML;
    if(label14!='ADD'){
    label14--;
    if(label14==0){
        label14='ADD';
    }
     document.getElementById("label14").innerHTML=label14;
}}   
 function add15(y){
    var label15=document.getElementById("label15").innerHTML;
    if(label15=='ADD'){
        label15=0;
    }
    label15++;
       document.getElementById("label15").innerHTML=label15; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("cmo").value;
con(x); 
}
function sub15(){
    var label15=document.getElementById("label15").innerHTML;
    if(label15!='ADD'){
    label15--;
    if(label15==0){
        label15='ADD';
    }
     document.getElementById("label15").innerHTML=label15;
}}
     function add16(y){
    var label16=document.getElementById("label16").innerHTML;
    if(label16=='ADD'){
        label16=0;
    }
    label16++;
       document.getElementById("label16").innerHTML=label16; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("vmo").value;
con(x); 
}
function sub16(){
    var label16=document.getElementById("label16").innerHTML;
    if(label16!='ADD'){
    label16--;
    if(label16==0){
        label16='ADD';
    }
     document.getElementById("label16").innerHTML=label16;
}} 
         function add17(y){
    var label17=document.getElementById("label17").innerHTML;
    if(label17=='ADD'){
        label17=0;
    }
    label17++;
       document.getElementById("label17").innerHTML=label17; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("sn").value;
con(x); 
}
function sub17(){
    var label17=document.getElementById("label17").innerHTML;
    if(label17!='ADD'){
        label7--;
    if(label17==0){
        label17='ADD';
    }
     document.getElementById("label17").innerHTML=label17;
}}
         function add18(y){
    var label18=document.getElementById("label18").innerHTML;
    if(label18=='ADD'){
        label18=0;
    }
    label18++;
       document.getElementById("label18").innerHTML=label18; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("vnd").value;
con(x); 
}
function sub18(){
    var label18=document.getElementById("label18").innerHTML;
    if(label18!='ADD'){
    label18--;
    if(label18==0){
        label18='ADD';
    }
     document.getElementById("label18").innerHTML=label18;
}}
         function add19(y){
    var label19=document.getElementById("label19").innerHTML;
    if(label19=='ADD'){
        label19=0;
    }
    label19++;
       document.getElementById("label19").innerHTML=label19; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("dm").value;
con(x); 
}
function sub19(){
    var label19=document.getElementById("label19").innerHTML;
    if(label19!='ADD'){
    label19--;
    if(label19==0){
        label19='ADD';
    }
     document.getElementById("label19").innerHTML=label19;
}}
         function add20(y){
    var label20=document.getElementById("label20").innerHTML;
    if(label20=='ADD'){
        label20=0;
    }
    label20++;
       document.getElementById("label20").innerHTML=label20; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("gm").value;
con(x); 
}
function sub20(){
    var label20=document.getElementById("label20").innerHTML;
    if(label20!='ADD'){
    label20--;
    if(label20==0){
        label20='ADD';
    }
     document.getElementById("label20").innerHTML=label20;
}}
         function add21(y){
    var label21=document.getElementById("label21").innerHTML;
    if(label21=='ADD'){
        label21=0;
    }
    label21++;
       document.getElementById("label21").innerHTML=label21; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("vmj").value;
con(x); 
}
function sub21(){
    var label21=document.getElementById("label21").innerHTML;
    if(label21!='ADD'){
    label21--;
    if(label21==0){
        label21='ADD';
    }
     document.getElementById("label21").innerHTML=label21;
}}
          function add22(y){
    var label22=document.getElementById("label22").innerHTML;
    if(label22=='ADD'){
        label22=0;
    }
    label22++;
       document.getElementById("label22").innerHTML=label22; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("cbs").value;
con(x); 
}
function sub22(){
    var label22=document.getElementById("label22").innerHTML;
    if(label22!='ADD'){
    label22--;
    if(label22==0){
        label22='ADD';
    }
     document.getElementById("label22").innerHTML=label22;
}}
          function add23(y){
    var label23=document.getElementById("label23").innerHTML;
    if(label23=='ADD'){
        label23=0;
    }
    label23++;
       document.getElementById("label23").innerHTML=label23; 
price=parseInt(price)+parseInt(y);
var x=document.getElementById("fbr").value;
con(x); 
}
function sub23(){
    var label23=document.getElementById("label23").innerHTML;
    if(label23!='ADD'){
    label23--;
    if(label23==0){
        label23='ADD';
    }
     document.getElementById("label23").innerHTML=label23;
}}

  

