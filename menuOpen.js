function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function print() {
  console.log("Clicked");
}

document.querySelector("button").addEventListener("click", (e)=>{
	console.log("HIDE OBJECTS")
})
