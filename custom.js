window.addEventListener('DOMContentLoaded', (event) => {
  let marker = document.querySelector('.indicator');
  let item = document.querySelectorAll('.nav.nav-tabs .nav-link');
  function indicator(e){
    marker.style.left = e.offsetLeft  + "px";
    marker.style.width = e.offsetWidth  + "px";
  }

  item.forEach(link => {
    link.addEventListener('click', (e)=>{
      indicator(e.target);
    })
  })
});
