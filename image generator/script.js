// Declare the array of image filenames
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Declare an object for the alternative text for each image
const altText = {
  'pic1.jpg': 'A closeup of a blue human eye',
  'pic2.jpg': 'A closeup of a red flower',
  'pic3.jpg': 'A closeup of a green frog',
  'pic4.jpg': 'A closeup of a mountain landscape',
  'pic5.jpg': 'A closeup of a beach sunset'
};

// Get references to the HTML elements
const fullImg = document.querySelector('.full-img img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');

// Loop through the image array and create clickable thumbnails
images.forEach((image) => {
  const img = document.createElement('img');
  img.src = `images/${image}`;
  img.alt = altText[image];
  thumbBar.appendChild(img);

  // Set the main image when a thumbnail is clicked
  img.addEventListener('click', () => {
    fullImg.src = img.src;
    fullImg.alt = img.alt;
  });
});

// Toggle overlay on click of the dark/light button
btn.addEventListener('click', () => {
  if (btn.classList.contains('dark')) {
    btn.classList.remove('dark');
    btn.classList.add('light');
    btn.textContent = 'Lighten';
    overlay.style.visibility = 'visible';
  } else {
    btn.classList.remove('light');
    btn.classList.add('dark');
    btn.textContent = 'Darken';
    overlay.style.visibility = 'hidden';
  }
});
