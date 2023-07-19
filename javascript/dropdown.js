var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      $(this).find('i').removeClass('fa fa-caret-down fa-rotate-180').addClass('fa fa-caret-down ');
    } else {
      dropdownContent.style.display = "block";
      $(this).find('i').removeClass('fa fa-caret-down').addClass('fa fa-caret-down fa-rotate-180');
    }
})};