var addbtn = document.querySelector(".add");
var para = document.querySelector("p");

var check = 0;
addbtn.addEventListener("click", function () {
  if (check == 0) {
    para.innerHTML = "Friends";
    para.style.color = "Green";
    addbtn.innerHTML = "Remove Friend";
    check = 1;
  } else {
    para.innerHTML = "Stranger";
    para.style.color = "Red";
    addbtn.innerHTML = "Add Friend";
    check = 0;
  }
});
