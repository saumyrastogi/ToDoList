

  var d = new Date();
  var n = d.toLocaleTimeString();
  document.querySelector("h2").innerHTML = n;

setInterval(function(){
  document.querySelector("h1").classList.toggle("changeh1col");
},500);
setInterval(function(){
  var d = new Date();
        var newtime = d.toLocaleTimeString();
        document.querySelector("h2").innerHTML = newtime;
    }, 1000);


var todoinput = document.querySelector("input");
var todotaskbox = document.querySelector('.todocontainer');
var buttonclick = document.querySelector(".newtaskbtn");
buttonclick.addEventListener("click",function(){
if(todoinput.value.length!=0)
{
  buttonclick.classList.add("animatebtn");
  setTimeout(function(){
    buttonclick.classList.remove("animatebtn");
  },100)
  perform();
}
});
document.addEventListener("keypress",function(event){
  if(event.key=="Enter" && todoinput.value.length!=0)
  {
    perform();
  }
});
function perform(){

  var newdiv = document.createElement('div');
  var img1 = document.createElement('img');
  var img2 = document.createElement('img');
  var img3 = document.createElement('img');
  var para = document.createElement('p');
  var but1 = document.createElement('button');
  var but2 =  document.createElement('button');
  var but3 =  document.createElement('button');
  var divpara = document.createElement('div');
  var divforbut = document.createElement('div');
  img1.setAttribute("src","images/done.png");
  img1.classList.add("done");
  img2.setAttribute("src","images/update.png");
  img2.classList.add("update");
  img3.setAttribute("src","images/delete.png");
  img3.classList.add("delete");
  img1.classList.add("done");
  but1.appendChild(img1);
  but2.appendChild(img2);
  but3.appendChild(img3);
  divforbut.appendChild(but1);
  divforbut.appendChild(but2);
  divforbut.appendChild(but3);
  para.innerText = todoinput.value;
  divpara.classList.add("taskpara");
  divpara.classList.add("col-md-10");
  divpara.appendChild(para);
  divforbut.classList.add("divleft");
  divforbut.classList.add("col-md-2");
  newdiv.classList.add("todotask");
  newdiv.appendChild(divpara);
  newdiv.appendChild(divforbut);
  todotaskbox.appendChild(newdiv);
  todoinput.value ="";
  but1.addEventListener("click",function(){
    para.classList.toggle("cuttext");
  });
  but2.addEventListener("click",function(){
    todoinput.value=para.innerText;
    var fadeTarget = newdiv;
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 20);
    setTimeout(function()
    {
      newdiv.remove();
    }, 300);
  });

  but3.addEventListener("click",function()
{
  var fadeTarget = newdiv;
  var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
          fadeTarget.style.opacity -= 0.1;
      } else {
          clearInterval(fadeEffect);
      }
  }, 20);
  setTimeout(function()
  {
    newdiv.remove();
  }, 300);

});
}
