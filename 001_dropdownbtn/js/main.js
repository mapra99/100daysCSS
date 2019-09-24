var iconState = true;

function addDissapear() {
  var midLine = document.getElementById("mid-line");
  var botLine = document.getElementById("bot-line");
  var topLine = document.getElementById("top-line");
  if(iconState){
    midLine.classList.add("dissapear-on-click");
    botLine.classList.add("moveup-on-click");
    topLine.classList.add("movedown-on-click");
  } else {

  }
  iconState = !iconState;
}
