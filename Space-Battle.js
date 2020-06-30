// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Ship Creation/Status
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// User Ship Stats
class Burrito {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    userStats() {
        console.log(`[hull: ${this.hull}] [firepower: ${this.firepower}] [accuracy: ${this.accuracy}]`)
    }
}

function userRandom(min, max) {
    return ((Math.random() * (max - min) + min)).toFixed(2);
}
console.log(userRandom(3, 6))
const userLife = new Burrito(20, 5, userRandom(0.1, 0.8))


// Alien Ship Stats
class Taco {
    constructor() {
        this.hull = alienRandom(3, 6);
        this.firepower = alienRandom(2, 4);
        this.accuracy = alienRandom(.6, .8);
    }
    alienStats() {
        console.log(`[hull: ${this.hull}] [firepower: ${this.firepower}] [accuracy: ${this.accuracy}]`)
    }
}

function alienRandom(min, max) {
    return ((Math.random() * (max - min) + min)).toFixed(2);
}
console.log(alienRandom(3, 6))
// Defined new alien
const alien1 = new Taco()
const alien2 = new Taco()
const alien3 = new Taco()
const alien4 = new Taco()
const alien5 = new Taco()
const alien6 = new Taco()
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Display Ships
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Display User Ship
function showUserShip() {
    var userHealth = `USS Flying Burrito: [hull: ${userLife.hull}] [firepower: ${userLife.firepower}] [accuracy: ${userLife.accuracy}]`;
    // ============================================================================
    alert(userHealth);
    console.log(userHealth)
    // ============================================================================
}

// Display Alien Taco Ships

function showAlien(arr) {
    var alienHealth = `Taco Ship: [hull: ${arr.hull}] [firepower: ${arr.firepower}] [accuracy: ${arr.accuracy}]`;
    // ============================================================================
    alert(alienHealth);
    console.log(alienHealth);
    // ============================================================================
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// Prompt Functions  //https://stackoverflow.com/questions/30389982/how-to-set-prompt-textbox-field-in-js-as-required-field
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// User Name
userPrompt = () => {
    user = prompt('What is your name? Captain: ', '[Enter Name]')
    if (user == null) {
        userPrompt();
    } else {
        return user;
    }
}

// User Level
userLevel = () => {
    lev = prompt("What's your experience captain?", '[Enter Novice/Expert]')
    if (lev == 'Novice' || lev == 'Expert') {
        return lev;
    } else {
        userLevel();
    }
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Start Game
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The game will start with an intro 
// function is activated by the press of the start button
// the function will capture the user's Name and Skill Level 
startGame = () => {
    const user = userPrompt()
    // ============================================================================
    alert('Captain ' + user + ', ' + 'Welcome aboard to the USS Flying Burrito!')
    console.log('Captain ' + 'user' + ', ' + 'Welcome abord to the USS Flying Burrito!')

    alert("We must get ready, six ALIEN TACO SHIPS have been spotted!")
    console.log("We must get ready, six ALIEN TACO SHIPS have been spotted!")

    alert("They're too dumb to attack us all at once! They're CRUNCHY TACO SHELL SHIPS are pretty easy to destroy.")
    console.log("They're too dumb to attack us all at once! They're CRUNCY TACO SHELL SHIPS are pretty easy to destroy.")

    // Capturing the user's chosen level of difficulty
    const lev = userLevel()
    
    return lev;



}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Battle
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Ready for Battle!
let playerStats = [];
var outcome = 0;
var wins = 0;
var losses = 0;
var tot = 6;
let curUserHull = userLife.hull;
// let act = 'Attack';  // setting it to attack for the very first alien...create prompt //

userMove = (arr) => {
    // prompt user to attack or retreat
    let act = 'Attack'

    if (act == 'Attack') {
        // alien hull - user(firepower * accuracy)
        while (curUserHull >= 0) {
            var newAlienHealth = (arr.hull - (userLife.firepower * userLife.accuracy)).toFixed(2)
            alert('Fire!!')
            alert(`Taco Ship's health is now: [hull: ${newAlienHealth}]`)
            console.log(`Taco Ship's health is now: [hull: ${newAlienHealth}]`)

            arr.hull = newAlienHealth;

            if (arr.hull <= 0) {
                
                alert('Boom!!! Great hit Captain!')
                console.log('Boom!!! Great hit Captain!')
                outcome = 1;
                break;
            }

            if (curUserHull <= 0) {
                alert("We're going down!")
                console.log("We're going down!") 
                outcome = 2;
                break;
            }
            // Alien attacks if hull != 0 //
            if (newAlienHealth != 0) {
                // ============================================================================
                alert('Prepare for damage!')
                console.log('Prepare for damage!')
                curUserHull = (curUserHull - (arr.firepower * arr.accuracy)).toFixed(2)
                alert(`USS Flying Burrito's health is now: [hull: ${curUserHull}]`)
                console.log(`USS Flying Burrito's health is now: [hull: ${curUserHull}]`)

                // ============================================================================
            }
        }
        console.log(outcome)

        if (outcome = 1) {
            wins++;
            tot--;
            console.log(wins)
            console.log(`${wins} Taco Ship Down! ${tot} to go.`)
            alert(`${wins} Taco Ship Down! ${tot} to go.`)
        }

    }
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Retreat/Play Again
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Make playornot2 Global
// let playOrNot2 = ''; // For Debugging //
var playOrNot2 = '';
playOrNot = () => {
    playOrNot2 = prompt('Retreat or Keep Fighting?', '[Attack/Retreat]')
    let retVal = (playOrNot2 == 'Attack') ? 'Attack' : 'Retreat';
    return retVal;
}


// Make oneMorePlay Global
// let oneMorePlay = 'no'; // for debugging //
var oneMorePlay = '';
playAgain = () => {
    oneMorePlay = prompt('Play Again?', '[yes/no]')
    let retVal = (oneMorePlay == 'yes') ? 'yes' : 'no';
    return retVal;

}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Retreat
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var victory = 0;

retreat = (alienArr) => {

    if (outcome == 1) {

        if (wins == 6) {
            victory++
            console.log('winner')
            alert(`Winner! [Wins: ${victory}] [Losses: ${losses}]`)
        } else if (playOrNot() == 'Attack') {
            userMove(alienArr)
        } else { // rethink function call for Attack/Retreat
            console.log("You've Retreate")
            alert('you retreated')
            // call play again function
            if (playAgain() == 'yes') {
                startGame()
            }
        }
    } else if (outcome == 2) {
        losses--
        console.log('lose')
        alert(`You Lose! [Wins: ${victory}] [Losses: ${losses}]`)
        // call play again function
        if (playAgain() == 'yes') {
            startGame()
        }

    }

}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Play Game
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
playGame = () => {
    startGame()

    alert("Pulling up the USS Flying Burrito's current status... \n [Uploading......]")
    showUserShip()

    alert("Here comes the fist Alien Taco Ship \n [Intercepting Taco Ship Data......]")
    showAlien(alien1)
    userMove(alien1)

    alert("Second Taco Ship Approaching!")
    showAlien(alien2)
    retreat(alien2)


    if (!(oneMorePlay == 'no')) {
        alert("Ready for number three Captain!!!")
        showAlien(alien3)
        retreat(alien3)
    }


    if (!(oneMorePlay == 'no')) {
        alert("Taco Ship number four....Let's Get It!!!")
        showAlien(alien4)
        retreat(alien4)
    }


    if (!(oneMorePlay == 'no')) {
        alert("Two more to go Cap!")
        showAlien(alien5)
        retreat(alien5)
    }


    if (!(oneMorePlay == 'no')) {
        alert("Last one, we got this. No Turning Back Now!")
        showAlien(alien6)
        retreat(alien6)
        retreat(alien6)
    }

    if (oneMorePlay == 'no') {
        alert(`Game Over... [Wins: ${victory}] [Losses: ${losses}]`)
    }

}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Game Activation
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

playGame()