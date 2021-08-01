/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
var backtotop = document.querySelector(".bt");
backtotop.addEventListener('click',()=>{
window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth',
});
})

function xmyFunction(x) {
  x.classList.toggle("change");
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function categoriesddmyFunction() {
  document.getElementById("categoriesddmyDropdown").classList.toggle("categoriesddshow");
}

function aumyFunction() {
  document.getElementById("aumyDropdown").classList.toggle("aushow");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.audropbtn')) {
    var audropdowns = document.getElementsByClassName("audropdown-content");
    let i;
    for (i = 0; i < audropdowns.length; i++) {
      var auopenDropdown = audropdowns[i];
      if (auopenDropdown.classList.contains('aushow')) {
        auopenDropdown.classList.remove('aushow');
      }
    }
  }
  if (!event.target.matches('.categoriesdddropbtn')) {
    var categoriesdddropdowns = document.getElementsByClassName("categoriesdddropdown-content");
    let i;
    for (i = 0; i < categoriesdddropdowns.length; i++) {
      var categoriesddopenDropdown = categoriesdddropdowns[i];
      if (categoriesddopenDropdown.classList.contains('categoriesddshow')) {
        categoriesddopenDropdown.classList.remove('categoriesddshow');
      }
    }
  }
 if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }		
	
	
}


var pay2end = document.querySelector(".pay2end");
var cbt = document.querySelector(".cbt");
 var pay1 = document.querySelector(".pay1");
var pay2 = document.querySelector(".pay2");
var obt = document.querySelector(".obt");
obt.addEventListener('click',()=>{
	pay2.classList.add('show');
	pay1.classList.remove('show');
	pay2end.classList.add('show');
})
cbt.addEventListener('click',()=>{

   pay1.classList.add('show');
	pay2.classList.remove('show');
	pay2end.classList.add('show');
})




