function textStyle(){
    text.style.background ="pink";
    text.style.color ="red";
    text.style.fontSize ="2em";
}

function textStyle2(){
    text.style.padding ="6 0";
    text.style.border ="8px solid red";
}
function eraseTextStyle(){
    text.style.background ="";
    text.style.color ="";
    text.style.fontSize ="";
    text.style.padding ="";
    text.style.border ="";
}
text.onmouseover=function(){
    textStyle();
    textStyle2();
};
text.onmouseout=function(){
    eraseTextStyle();
};
