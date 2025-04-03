// Declare the array of image filenames
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg'];

// Declare an object for the alternative text for each image
const altText = {
  'pic1.jpg': 'A closeup of a blue human eye',
  'pic2.jpg': 'A closeup of a red flower',
  'pic3.jpg': 'A closeup of a green frog'
};

// Get references to the HTML elements
const fullImg = document.querySelector('.full-img img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');

// Loop through the array of image filenames to create the thumbnails
images.forEach((image) => {
  const img = document.createElement('img');
  img.src = `images/${image}`;
  img.alt = altText[image];
  thumbBar.appendChild(img);

  // Add click event listener to each thumbnail image
  img.addEventListener('click', () => {
    fullImg.src = img.src;
    fullImg.alt = img.alt;
  });
});

// Add a click event listener to the button for darkening/lightening the image
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
