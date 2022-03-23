// TODO: Declare any global variables we need
let image = document.querySelector('img');
let headsCell = document.querySelector('#heads');
let headsPercent = document.querySelector('#heads-percent');
let tailsCell = document.querySelector('#tails');
let tailsPercent = document.querySelector('#tails-percent');
let message = document.querySelector('#message');
let heads = 0;
let tails = 0;
let totalRolls = 0;


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    const flipBtn = document.querySelector('#flip');

    flipBtn.addEventListener('click', function(){

    
        //This variable generates a number between 0 -1
        // <= 0.5 is heads
        // >0.5 is tails
        let flipOutcome = Math.random()

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM
        if(flipOutcome <=0.5){
            image.setAttribute('src', 'assets/images/penny-heads.jpg')
            heads++;
            message.textContent = "You Flipped Heads!"
        } else {
            image.setAttribute('src', 'assets/images/penny-tails.jpg')
            tails++;
            message.textContent = 'You Flipped Tails!'
        }

        // Update the scoreboard
        // TODO: Calculate the total number of rolls/flips
        totalRolls = heads + tails; 
        // Make variables to track the percentages of heads and tails
        let percentHeads = 0;
        let percentTails = 0;

        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        if(heads){
            percentHeads = Math.round((heads / totalRolls) * 100) ;
        }

        if(tails){
            percentTails = Math.round((tails /totalRolls) * 100);
        }

    
        // TODO: Update the display of each table cell
        headsCell.textContent = heads;
        headsPercent.textContent = `${percentHeads}%`;
        tailsCell.textContent = tails;
        tailsPercent.textContent = `${percentTails}%`;
    })

    // Clear Button Click Handler
 

        const clearBtn = document.getElementById('clear');

        clearBtn.addEventListener('click',function(){
                   // TODO: Reset global variables to 0
            heads = 0;
            tails = 0;
            totalRolls = 0;

        // TODO: Update the scoreboard (same logic as in flip button click handler)
        headsCell.textContent = heads;
        headsPercent.textContent = '0%';
        tailsCell.textContent = tails;
        tailsPercent.textContent = '0%';
        message.textContent = "Let's get Rolling!"
        })

})