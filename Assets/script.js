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
for (var i = 9; i <= 17; i++){

    // Attempt to get the saved data for the hour of the loop
    var key = "hour-"+i;

    var data = "";

    // Compare i to current hour to determine if this hour is in the past, present, or future

    var template = `
        <div class="row">
            <div>
                ${i}am
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button data-hour="${i}">Save</button>
            </div>
        </div>"
    `;

    // Append the html to the page using container element (line 7)
}

// Set up a "click" event listener on the container
containerE1.on("click", "button", function(event){

//Fetch the hour from the clicked button's "data-hour" attribute

// Use the hour to create the key for local storage
event.target.matches(key);

//From the clicked button, traverse the DOM to the nearby <textarea> to fetch its value

// Use the key and the value to save into localStorage

})
