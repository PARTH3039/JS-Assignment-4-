/*
Name: Parth Patel 
File: main.js
Date: 3rd April 2025
Description: JS file for the Silly Story Generator
*/

// Get references to elements
const customName = document.getElementById('customname');
const randomize = document.getElementById('randomize');
const story = document.getElementById('story');

// Arrays of possible story elements
const insertX = ['Willy the Goblin', 'Big Daddy', 'Santa Claus'];
const insertY = ['found a treasure', 'danced with a robot', 'ate 100 hotdogs'];
const insertZ = ['in Times Square', 'on the Moon', 'inside a volcano'];

// The story template
const storyText = 'It was 94 Fahrenheit outside, so :insertx: :inserty: :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

// Function to pick random item from an array
function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to generate the story
function result() {
  let newStory = storyText;

  // Get random replacements
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  // Replace all placeholders (globally)
  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(/:inserty:/g, yItem);
  newStory = newStory.replace(/:insertz:/g, zItem);

  // Replace name if entered
  if (customName.value.trim() !== '') {
    const name = customName.value.trim();
    newStory = newStory.replace('Bob', name);
  }

  // Convert units if UK is selected
  if (document.getElementById('uk').checked) {
    const temperatureC = Math.round((94 - 32) * 5 / 9) + ' Celsius';
    const weightStone = Math.round(300 * 0.0714286) + ' stone';
    newStory = newStory.replace('94 Fahrenheit', temperatureC);
    newStory = newStory.replace('300 pounds', weightStone);
  }

  // Display the story
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
randomize.addEventListener('click', result);
