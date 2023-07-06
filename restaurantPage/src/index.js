import { createHomePage } from './homePage';
import { createContactPage } from './contactPage';
import { createMenuPage } from './menuPage';
import './style.css';

function clearContent() {
  const contentDiv = document.getElementById('content');
  contentDiv.textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
  createHomePage();

  const tabContainer = document.querySelector('.tab-container');

  tabContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('tab')) {
      const tabId = event.target.dataset.tab;
      clearContent();

      switch (tabId) {
        case 'homeTab':
          createHomePage();
          break;
        case 'contactTab':
          createContactPage();
          break;
        case 'menuTab':
          createMenuPage();
          break;
        default:
          break;
      }
    }
  });
});
