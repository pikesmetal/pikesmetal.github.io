const main = function () {
  titleStuff();
}

function titleStuff() {
  const body = $("body")[0];
  body.addEventListener("click", changeTitle);
}

function changeTitle(){
  const title = $("title")[0];
  const titleTxt = title.innerHTML;
  const titleLen = titleTxt.length;
  const tit = titleTxt.slice(titleLen-1);
  const le = titleTxt.slice(0, -1);
  title.innerHTML = tit+le;

}


$(main);
