var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var totalLikes = 0;
var flag = 1;
var counter = 0;
var idCounter = 1;
var post = 1;
var person = "Anonymous"
var commented = [0, 0, 0, 0, 0, 0, 0, 0];
var commentNum = 0;
function routine() {
  promptMe();
}
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
function promptMe() {
  person = prompt("Please enter your name","Anonymous");
}

function addComment(num) {
  $(document).ready(function () {

    if (commented[num] != 1) {
      $(".userCommentContainer:eq(" + num + ')').css("display", "block");
      commented[num] = 1;
      commentNum++;
    }
    var comment = $(".commentDiv textarea:eq(" + num + ")").val();
    console.log(comment);
    var time = whatTimeIsIt();
    var commentString = '<div class="userComment">';
    commentString += '<p class="dateNtime">' + person + ' commented on ' + time + '</p>';
    commentString += '<p class="newPost" id="newPost' + num + '">' + comment + '</p></div>';
    console.log(comment);
    $(".userCommentContainer:eq(" + num + ")").prepend(commentString);
    localStorage.setItem("site", $('html').text());

  });
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
function addPic(imgSrc) {
  if(person===null||person===""){
    person="Anonymous";
  }
  let post = '<div class="card"><figure><img class="galleryPic" src="' + imgSrc + '" id="img' + idCounter + '"onclick="loadModal(' + idCounter + ')"><figcaption>Posted by:' + person + ' on ' + whatTimeIsIt() + '</figcaption></figure>';
  post += '<div class="commentDiv" id="commentSpace' + idCounter + '">';
  post += ' <p id="likeButton' + idCounter + '" style="float:left;text-align: left"><p style="float:right" id="likeNum' + idCounter + '">0</p><button style="float:right" type="button" class="likeB" onclick="like(0,' + idCounter + ')"></button></p>'
  post += '<form><textarea id="comment' + idCounter + '" rows=4 cols=53 placeholder="Add a public comment..."></textarea><br><button  type="button" onclick="addComment(' + idCounter + ')">Submit</button>'
  post += '<input type="reset" name="Clear" value="Clear"></form></div><div id="comments' + idCounter + '" class="userCommentContainer" style="display:none;"></div>';
  $(".scrolling-wrapper").append(post);
  ++idCounter;
  localStorage.setItem("site", $('html').val());

}
$(document).ready(function () {
  $("#slideLeft").click(function () {
    $(".scrolling-wrapper").animate({ scrollLeft: "-=" + 1000 });
  });
  $("#slideRight").click(function () {
    $(".scrolling-wrapper").animate({ scrollLeft: "+=" + 1000 });
  });
  $("")
});


function emptyP() {
  document.getElementById("caption").innerHTML = "";
}

function loadModal(imgNum) {
  $(document).ready(function () {
    var modal = document.getElementById("myModal");
    var img = document.getElementById("img" + imgNum);
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = img.src;
    caption = $(".card:eq(" + imgNum + ") .dateNtime:eq(0)").text();
    caption += ": "
    caption += $(".card:eq(" + imgNum + ") .newPost:eq(0)").text();
    $("#caption").text(caption);
    console.log(caption);
    caption = "";
    var span = document.getElementsByClassName("close")[0];
    $(document).on('keyup', function (e) {
      if (e.key == "Escape") {
        $("#caption").empty();
        emptyP();
        modal.style.display = "none";
      }
    });
    span.onclick = function () {
      $("#caption").empty();
      emptyP();
      modal.style.display = "none";
    }
  });
}
function loaddModal() {
  $(document).ready(function () {
    var modal = document.getElementById("myModal");
    var img = document.getElementById("photoByUser");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = img.src;
    var span = document.getElementsByClassName("close")[0];
    $(document).on('keyup', function (e) {
      if (e.key == "Escape") {
        emptyP();
        modal.style.display = "none";
      }
    });
    span.onclick = function () {
      $("#caption").empty();
      emptyP();
      modal.style.display = "none";
    }
  });
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

  $(document).ready(function(){
      console.log("in");
      $("#button1").click(function(){
        var value = $("#inputName").val();
        console.log(value);
        $(".card figure:contains('"+value+"') img").each(async function() { 
          console.log("in");
          var src = $(this).attr('src');
          console.log(src);
          $("#photoByUser").attr('src', src);
          $("#byUserCaption").text("Posted by: "+value);
          await sleep(1000);
        });
        
    });
  });