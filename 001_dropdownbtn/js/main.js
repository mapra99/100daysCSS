var iconState = true;

function addDissapear() {
  var midLine = document.getElementById("mid-line");
  var botLine = document.getElementById("bot-line");
  var topLine = document.getElementById("top-line");
  if(iconState){
    midLine.classList.remove("appear-on-click");
    botLine.classList.remove("moveback-on-click");
    topLine.classList.remove("moveback-on-click");

    midLine.classList.add("dissapear-on-click");
    botLine.classList.add("moveup-on-click");
    topLine.classList.add("movedown-on-click");
  } else {
    midLine.classList.remove("dissapear-on-click");
    botLine.classList.remove("moveup-on-click");
    topLine.classList.remove("movedown-on-click");

    midLine.classList.add("appear-on-click");
    botLine.classList.add("moveback-on-click");
    topLine.classList.add("moveback-on-click");
  }
  iconState = !iconState;
}
