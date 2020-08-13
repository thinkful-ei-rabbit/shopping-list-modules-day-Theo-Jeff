import item from './item.js';
import shoppingList from './shopping-list.js';
import store from './store.js';

const main = function () {  
  // Exercise No. 3: should create two shopping items in DOM and one error message in the console
  const itemNames = ['', 'apples', 'pears' ];
  itemNames.forEach(name => {
    try {
      item.validateName(name);
      //create a new item if name is valid
      store.items.push(item.create(name));
    } catch(error) {
      console.log('Cannot add item: ${error.message}');
    }
  });
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);