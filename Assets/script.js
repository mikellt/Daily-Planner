// console.log("Hello from file")

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// Declare Current hour

// Declare class=container and id="timeEntries"

//Declare Time Entries Container HTML element
var containerE1;

// Render a block for each hour of the day

    // hint: "hour-*hour number*" using for loop
    for (var i = 9; i <= 17; i++){

        // Attempt to get the saved data for the hour of the loop
        var key = "hour-"+i;

        var data = "asdf";

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

})

// Save an hour to local storage
