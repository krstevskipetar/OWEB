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

function appendPost(myPost){
  if(flag){
    flag=0;
    document.getElementById("date-time").innerHTML=whatTimeIsIt();
    document.getElementById('newPost').innerHTML=myPost;
  }else{

    let p=document.getElementById('posts');
    let prevPost=p.cloneNode(true);

    document.getElementById("date-time").innerHTML=whatTimeIsIt();
    document.getElementById('newPost').innerHTML=myPost;

    document.getElementById('myBlog').appendChild(prevPost);
  }

}
