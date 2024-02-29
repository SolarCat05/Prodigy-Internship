window.onscroll=function(){
    scrollFunction();
};

function scrollFunction() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 80){
        document.getElementById('menu').style.backgroundColor="gray";
             
    }
    else{
        document.getElementById('menu').style.backgroundColor="black";
    }
  }