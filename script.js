let bar = document.getElementById('bars');
let aside = document.getElementById('aside');
function showAside(){
  if(bar.classList.contains('fa-bars')){
    aside.style.display = 'block';
    bar.classList.remove('fa-bars');
    bar.classList.add('fa-xmark');
  }
  else{
    aside.style.display = 'none';
    bar.classList.remove('fa-xmark');
    bar.classList.add('fa-bars');
  }
}