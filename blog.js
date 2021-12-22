var button = document.getElementById("vnes");
var prevPost;
var flag=1;
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function whatTimeIsIt(){
  let date=new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  m = checkTime(m);
  h = checkTime(h);
  var dateString=days[date.getDay()]+", "+date.getDate()+"."+date.getMonth()+"."+date.getFullYear()+" "+h + ":" + m;
  return dateString;
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

function appendPost(){
  $(document).ready(function(){
    var post=$("#textbox1").val();
    var blogString='<div class="blogText"><p id="date-time" class="dateNtime">'+whatTimeIsIt()+'</p><p id="newPost">'+post+'</p></div>'
    $(blogString).insertAfter('.blogTextBox');

  });
  
}
