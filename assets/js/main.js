// Hide all elements except body and html
const elements = document.querySelectorAll(':not(body):not(html)');
elements.forEach(el => {
  el.style.display = 'none';
  });

  // Create a new container div
  const newDiv = document.createElement('div');

  // Style the container to center content
  newDiv.style.display = 'flex';
  newDiv.style.fontSize = '15pt';
  newDiv.style.justifyContent = 'center';
  newDiv.style.alignItems = 'center';
  newDiv.style.height = '100vh'; // full viewport height
  newDiv.style.backgroundColor = '#000';

  // Create inner box div
  const innerBox = document.createElement('div');
  innerBox.style.border = '1px solid #555';
  innerBox.style.padding = '20px';
  innerBox.style.backgroundColor = '#111';
  innerBox.style.textAlign = 'center';
  innerBox.style.maxWidth = '60%';

  // Add image and text
  const img = document.createElement('img');
  img.src = '/blog/this_is_cute.png';
  img.style.maxWidth = '50%';
  img.style.height = 'auto';

  const text = document.createElement('p');
  text.textContent = "Every time you visit a website with javascript, a programmer needs to look into it. Imagine the horrors!";
  const text2 = document.createElement('p');
  text2.textContent = "Help saving the world by deactivating javascript!";
  const text3 = document.createElement('p');
  text3.textContent = "TODO Tutorial how to deactivate javascript";

  // Append image and text to inner box
  innerBox.appendChild(text);
  innerBox.appendChild(img);
  innerBox.appendChild(text2);
  innerBox.appendChild(text3);

  // Append inner box to container
  newDiv.appendChild(innerBox);

  // Append container to body
  document.body.appendChild(newDiv);
  document.body.style.maxWidth = '100%';
