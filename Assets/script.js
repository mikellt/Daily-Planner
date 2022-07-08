// console.log("Hello from file")

// Declare the Current time
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// Declare Current hour

// Declare Current Day HTML Element

//Declare Time Entries Container HTML element
var containerE1;

// Render a block for each hour of the day
// hint: "hour-*hour number*" using for loop

//     // Attempt to get the saved data for the hour of the loop
//     var key = "hour-"+i;

//     var data = "";
//     // Append the html to the page using container element (line 7)
// }

// Set up a "click" event listener on the container
// containerE1.on("click", "button", function(event){

// //Fetch the hour from the clicked button's "data-hour" attribute

// // Use the hour to create the key for local storage
// event.target.matches(key);

//From the clicked button, traverse the DOM to the nearby <textarea> to fetch its value

// Use the key and the value to save into localStorage


document.querySelector("#button-9").onclick =function(){
    var text =document.querySelector("#hour-9").value;
    localStorage.setItem("hour9", JSON.stringify(text));
    document.querySelector("#hour-9").textContent = JSON.parse(localStorage.getItem("hour9"))

    if(localStorage.getItem("hour9")) 
    {
    document.querySelector("#hour-9").textContent = JSON.parse(localStorage.getItem("hour9"))}
}

document.querySelector("#button-10").onclick =function(){
    var text =document.querySelector("#hour-10").value;
    localStorage.setItem("hour10", JSON.stringify(text));
    document.querySelector("#hour-10").textContent = JSON.parse(localStorage.getItem("hour10"))
   
   if(localStorage.getItem("hour10")) 
   {
   document.querySelector("#hour-10").textContent = JSON.parse(localStorage.getItem("hour10"))}
   }

document.querySelector("#button-11").onclick =function(){
    var text =document.querySelector("#hour-11").value;
    localStorage.setItem("hour11", JSON.stringify(text));
    document.querySelector("#hour-11").textContent = JSON.parse(localStorage.getItem("hour11"))
   
   if(localStorage.getItem("hour11")) 
   {
   document.querySelector("#hour-11").textContent = JSON.parse(localStorage.getItem("hour11"))}
   }

document.querySelector("#button-12").onclick =function(){
    var text =document.querySelector("#hour-12").value;
    localStorage.setItem("hour12", JSON.stringify(text));
    document.querySelector("#hour-12").textContent = JSON.parse(localStorage.getItem("hour12"))

   if(localStorage.getItem("hour12")) 
   {
   document.querySelector("#hour-12").textContent = JSON.parse(localStorage.getItem("hour12"))}
   }

document.querySelector("#button-13").onclick =function(){
    var text =document.querySelector("#hour-13").value;
    localStorage.setItem("hour13", JSON.stringify(text));
    document.querySelector("#hour-13").textContent = JSON.parse(localStorage.getItem("hour13"))
   
   if(localStorage.getItem("hour13")) 
   {
   document.querySelector("#hour-13").textContent = JSON.parse(localStorage.getItem("hour13"))}
   }

document.querySelector("#button-14").onclick =function(){
    var text =document.querySelector("#hour-14").value;
    localStorage.setItem("hour14", JSON.stringify(text));
    document.querySelector("#hour-14").textContent = JSON.parse(localStorage.getItem("hour14"))
   
   if(localStorage.getItem("hour14")) 
   {
   document.querySelector("#hour-14").textContent = JSON.parse(localStorage.getItem("hour14"))}
   }

document.querySelector("#button-15").onclick =function(){
    var text =document.querySelector("#hour-15").value;
    localStorage.setItem("hour15", JSON.stringify(text));
    document.querySelector("#hour-15").textContent = JSON.parse(localStorage.getItem("hour15"))

   if(localStorage.getItem("hour15")) 
   {
   document.querySelector("#hour-15").textContent = JSON.parse(localStorage.getItem("hour15"))}
   }

document.querySelector("#button-16").onclick =function(){
    var text =document.querySelector("#hour-16").value;
    localStorage.setItem("hour16", JSON.stringify(text));
    document.querySelector("#hour-16").textContent = JSON.parse(localStorage.getItem("hour16"))

   if(localStorage.getItem("hour16")) 
   {
   document.querySelector("#hour-16").textContent = JSON.parse(localStorage.getItem("hour16"))}
   }

document.querySelector("#button-17").onclick =function(){
    var text =document.querySelector("#hour-10").value;
    localStorage.setItem("hour17", JSON.stringify(text));
    document.querySelector("#hour-17").textContent = JSON.parse(localStorage.getItem("hour17"))

   if(localStorage.getItem("hour17")) 
   {
   document.querySelector("#hour-17").textContent = JSON.parse(localStorage.getItem("hour17"))}
   }

// for (var i=9; i++; i<11){

//     document.querySelectorAll(".saveBtn").onclick =function(){
//         for (var i=9; i++; i<11){
//         var text =document.querySelector(`#hour-${i}`).value;
//         localStorage.setItem(`hour${i}`, JSON.stringify(text));
//         document.querySelector(`#hour-${i}`).textContent = JSON.parse(localStorage.getItem(`hour${i}`))
//         }
    
//     if(localStorage.getItem(hour)) 
//     {
//     document.querySelector(`#hour-${i}`).textContent = JSON.parse(localStorage.getItem(`hour${i}`))}}
    
//     }