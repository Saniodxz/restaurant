// export function createContactPage() {
//     const contentDiv = document.getElementById('content');
//     contentDiv.textContent = '';
  
//     const contactDiv = document.createElement('div');
//     contactDiv.textContent = 'Contact Page';
//     contentDiv.appendChild(contactDiv);
//   }

export function createContactPage() {
  const contentDiv = document.getElementById('content');
  contentDiv.textContent = '';

  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');

  const heading = document.createElement('h2');
  heading.textContent = 'Contact Us';
  contactContainer.appendChild(heading);

  const address = document.createElement('p');
  address.textContent = '123 Restaurant St, City, Country';
  contactContainer.appendChild(address);

  const phone = document.createElement('p');
  phone.textContent = '+44 234 567 890';
  contactContainer.appendChild(phone);

  const email = document.createElement('p');
  email.textContent = 'service@gmail.com';
  contactContainer.appendChild(email);

  contentDiv.appendChild(contactContainer);
}
