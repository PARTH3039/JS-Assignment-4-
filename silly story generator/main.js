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
const insertX = ['dog', 'cat', 'elephant'];
const insertY = ['swam', 'ran', 'flew'];
const insertZ = ['quickly', 'gracefully', 'lazily'];

// The story text with placeholders
const storyText = 'Once upon a time, :insertx: :inserty: :insertz: and Bob lived happily ever after.';

// Function to pick random item from an array
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Function to generate the random story
function result() {
  let newStory = storyText;

  // Random values from the arrays
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  // Replace the placeholders with random items
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  // Replace the default name if a custom name is entered
  if (customName.value) {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  // Display the story in the <p> tag
  story.textContent = newStory;
  story.style.visibility = 'visible';
}

// Add event listener to the button
randomize.addEventListener('click', result);
