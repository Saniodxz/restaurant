// export function createMenuPage() {
//     const contentDiv = document.getElementById('content');
//     contentDiv.textContent = '';
  
//     const menuDiv = document.createElement('div');
//     menuDiv.textContent = 'Menu Page';
//     contentDiv.appendChild(menuDiv);
//   }

export function createMenuPage() {
  const contentDiv = document.getElementById('content');
  contentDiv.textContent = '';

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  // Create menu items
  const appetizers = createMenuItem('Appetizers', [
    'Caesar Salad',
    'French Onion Soup',
    'Caprese Bruschetta',
  ]);

  const mains = createMenuItem('Main Course', [
    'Beef Wellington',
    'Lobster Risotto',
    'Roasted Chicken',
  ]);

  const desserts = createMenuItem('Desserts', [
    'Chocolate Lava Cake',
    'Tiramisu',
    'Crème Brûlée',
  ]);

  // Append menu items to menu container
  menuContainer.appendChild(appetizers);
  menuContainer.appendChild(mains);
  menuContainer.appendChild(desserts);

  // Append menu container to content div
  contentDiv.appendChild(menuContainer);
}

function createMenuItem(category, items) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const categoryHeading = document.createElement('h2');
  categoryHeading.textContent = category;
  menuItem.appendChild(categoryHeading);

  const itemList = document.createElement('ul');

  items.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    itemList.appendChild(listItem);
  });

  menuItem.appendChild(itemList);

  return menuItem;
}
