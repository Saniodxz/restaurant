export function createHomePage() {
    const contentDiv = document.getElementById('content');
  
    const image = document.createElement('img');
    image.src = 'path/to/your/image.jpg';
    contentDiv.appendChild(image);
  
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Restaurant!';
    contentDiv.appendChild(headline);
  
    const copy = document.createElement('p');
    copy.textContent = 'We are delighted to have you here. Enjoy our delicious cuisine in a warm and inviting atmosphere.';
    contentDiv.appendChild(copy);
  }
  