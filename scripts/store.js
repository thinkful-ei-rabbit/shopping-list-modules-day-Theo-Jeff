import item from './item.js';

const items = [];
const hideCheckedItems = false;
  
const findById = function(id) {
  const found = items.find(element => element.id === id);
  return found;  
};

const addItem = function(name){
  try{
    item.validateName(name);
    const newItem = item.create(name);
    this.items.push(newItem);
  } catch(error){
    console.log(`Cannot add item: ${error.message}`);
  }
};

const findAndToggleChecked = function(id){
  const foundItem = this.findById();
  foundItem.checked = !foundItem.checked;
};

const findAndUpdateName = function(id,newName){
  try {
    item.validateName(newName);    
    // can this use  this.findById()?
    const foundItem = items.findById();
    foundItem.name = newName;
  } catch(error) {
    console.log(`Cannot update name: ${error.message}`);
  }
};

const findAndDelete = function(id){
  const index = items.findIndex(item => item.id === id);
  items.splice(index, 1);
}

/*
const deleteListItem = function (id) {
  const index = store.items.findIndex(item => item.id === id);
  store.items.splice(index, 1);
*/


export default{
    items, // items  is not defined?
    hideCheckedItems,
    findById,
    addItem,
    findAndUpdateName,
    findAndToggleChecked,
    findAndDelete
};


