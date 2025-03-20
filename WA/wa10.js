// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize'); 
const story = document.querySelector('.story');


function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

let storyText= "It was the 94 degrees farenheit outside, a perfect day for mischief, so :insertx: set out on an adventure. When they reached :inserty: which was 300 pounds, they paused, eyes wide with excitement, then :insertz:. Mittens saw the whole thing but wasn't impressed—:insertx: always found a way to cause chaos.";

let insertX = ["Captain Whiskers", "Princess Purrington", "The Dreaded Claw"];

let insertY = ["the top of the fridge", "the neighbor's koi pond", "the forbidden bookshelf"];

let insertZ = ["knocked over everything in sight", "vanished into a paper bag, never to be seen again", "started an epic chase with an innocent-looking butterfly"];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);
    // newStory = newStory.replace(':insertx', xItem).replace(...).replace(...)
    //way to do it in one string

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Mittens', name);
//!== use double equal to compare it, ! means not
// it's saying if it is not equivalent to
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + ' stone';
    const temperature =  Math.round((94-32) *5/9) + ' centigrade';
    newStory = newStory.replace('94 degrees farenheit', temperature).replace('300 pounds', weight);
    //concate is for strings, ex "5" + "4" = 54
    //put space in so it's not back to back on each other

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}