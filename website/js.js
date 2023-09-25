document.querySelector('.dropdown-menu').addEventListener('click', function (event) {
    event.stopPropagation();
});

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".product p").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
function search() {
    let searchBar = document.querySelector('#myInput').valu.toUpperCase();
    let productlist = document.querySelector('.product-list');
    let product = document.querySelectorAll('.product');
    let productName = document.getElementsByTagName('a,p,h5');

    for (let i = 0; i < productName.length; i++) {
        if(productName[i].innerHTML.toUpperCase().indexOf(searchBar)>=0){
            product[i].style.display = "";

        }
        else{
            product[i].style.display = "none";

        }
    }
}
