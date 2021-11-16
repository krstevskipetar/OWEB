var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var totalLikes = 0;
var flag = 1;
var counter = 0;
var idCounter = 0;
var post = 1;
function like(totalLikes, num) {
  let likeID = "likeNum" + num;
  ++totalLikes;
  if (!flag) {
    --totalLikes;
    flag = 1;
  }
  else if (flag) {

    flag = 0;
  }
  let p = document.getElementById(likeID);
  p.innerHTML = totalLikes;
}

function addComment(comment, num) {
  let dateID = "date-time" + num;
  let postID = "newPost" + num;
  let commentSpaceID = "commentSpace" + num;
  let commentID = "comments" + num;
  let p = document.getElementById(commentID);
  let prevPost = p.cloneNode(true);
  document.getElementById(dateID).innerHTML = whatTimeIsIt();
  document.getElementById(postID).innerHTML = comment;
  document.getElementById(commentSpaceID).appendChild(prevPost);
  
}
function whatTimeIsIt() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  m = checkTime(m);
  h = checkTime(h);
  var dateString = days[date.getDay()] + ", " + date.getDate() + "." + date.getMonth() + "." + date.getFullYear() + " " + h + ":" + m;
  return dateString;
}
function checkTime(i) {
  if (i < 10) { i = "0" + i };
  return i;
}
function commentToString() {
  let comment = '<div class="commentGallery">';
  let commentID=8+idCounter;
  for (var i = 0; i < 3; ++i) {
    commentID++;
    console.log(commentID);
    let cmid='comment'+commentID;
    comment += '<div class="commentDiv" id="commentSpace'+commentID+'">';
    comment += '<p id='+"'"+'likeButton'+commentID+"'"+'" style="float:left;text-align: left"><p style="float:right" id='+"'"+'likeNum'+commentID+"'"+'></p>  <button style="float:right" type="button" class="likeB" onclick="like(0,'+commentID+')"></button></p>';
    comment += '<form>';
    comment += '<textarea id='+"'"+cmid+"'"+ 'rows=4 cols=53 placeholder="Add a public comment..."></textarea>';
    comment += '<br>';
    comment += '<button  type="button" onclick="addComment(document.getElementById('+"'"+cmid+"'"+').value,'+commentID+')">Submit</button>';
    comment += '<input type="reset" name="Clear" value="Clear">';
    comment += '</form>';
    comment += '<div id='+"'"+'comments'+commentID+"'"+'" class="userCommentContainer">';
    comment += '<div class="userComment">';
    comment += '<p id='+"'"+'date-time'+commentID+"'" + ' class="dateNtime"></p>';
    comment += '<p id=' +"'"+ 'newPost'+commentID+"'"+'> </p></div></div></div>';
  }
  return comment;
}
function addPic(imgSrc) {
  counter++;
  idCounter++;
  let gallery = '';
  let commentGallery = '';
  if (post) {
    let currID1 = 9 + idCounter;
    let currID2 = 10 + idCounter;
    let currID3 = 11 + idCounter;
    gallery = '<div class="contentGallery" ><div class="post" id="pic' + currID1 + '"><img class="galleryPic" src="' + imgSrc + '"></div><div class="post" id="pic' + currID2 + '"></div><div class="post" id="pic' + currID3 + '"></div>';
    let commie=commentToString();
    let p = document.getElementById('myBody');
    p.innerHTML += gallery;
    p.innerHTML+=commie;
    post = 0;

  } else {
    if (counter % 2 == 0) {
      let num = 9 + idCounter;
      let currID = "pic" + num;
      document.getElementById(currID).innerHTML += '<img class="galleryPic" src="' + imgSrc + '">'
    }
    else if (counter % 3 == 0) {
      let num = 9 + idCounter;
      let currID = "pic" + num;
      document.getElementById(currID).innerHTML += '<img class="galleryPic" src="' + imgSrc + '">'
      counter = 0;
      post = 1;
    }
  }

}
