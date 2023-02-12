//document.addEventListener("DOMContentLoaded", () => {

loadData();

function pushData(){
  let value= document.getElementById("task-input").value;
  if (value != "" && value.length <= 50 ) {
    let data = localStorage.getItem('listOfData');
    if (JSON.parse(data)== null) {
      var list = [] ;
    } else {
      var list = JSON.parse(data);
    }
 
  createli();
  list.push(value);
  
  localStorage.setItem('listOfData' , JSON.stringify(list)); 
} else if (value == "")
      {
         alert("Please input a Value");
       }
       else if (value.length >= 50 ){
         alert("You exceed the Maximum number of character(50) ");
       }
      //  else if (itemCount > 4){
      //   alert("You've reached the maximum limit of 4 items ");
      // }
       
}

function loadData(){
  let data = localStorage.getItem('listOfData')
  if (JSON.parse(data)== null) {
    var allData = [{}] ;
  } else {
    var  allData = JSON.parse(data);
  }
 

  for (let i=0 ; i < allData.length; i++) {

    var list1 = document.getElementById("list-of-data");
    let text = document.createElement("li");
    text.textContent=allData[i] ;
    list1.appendChild(text);
   
  }
  createCheckBoxesAndDelete()
  checkedListAndItemDelete()
}
debugger
function createli(){
              let itemCount=0;
              var limit = 1;
              if(itemCount < limit){
             var orderdlist = document.getElementById("list-of-data"); 
             let newli = document.createElement("li");
            var inputText = document.getElementById("task-input").value;
            newli.textContent= inputText;
            orderdlist.appendChild(newli);
            document.getElementById("task-input").value = "";
            itemCount ++ ;
}
else {
    alert("You've reached the maximum limit of 4 items ");
  }
  }

function createCheckBoxesAndDelete(){
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
  var checkBox= document.createElement("input")
  checkBox.setAttribute("type", "checkbox"); 
  checkBox.setAttribute("class", "my-checkbox");
  myNodelist[i].appendChild(checkBox);

   
   };
  }
  function checkedListAndItemDelete(){
 const list=document.querySelector(".List");
 const checkboxes = list.querySelectorAll(".my-checkbox");

 checkboxes.forEach(checkbox => {
  checkbox.addEventListener("change" , function() {
    const parent =this.parentElement;
    if(this.checked){
     parent.classList.add("checked");
    }else {
      parent.classList.remove("checked");

    }
  });
 });
 
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    if (confirm("Are you sure you want to delete")) {
      var div = this.parentElement;
      div.style.display = "none";
     
      localStorage.removeItem("listOfData");

  }
  return false;
}
}
}
//})