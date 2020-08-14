import item from './item.js';

const items = [];
const hideCheckedItems = false;
  
const findById = function(id) {
  const found = items.find(item => item.id === id);
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
  const foundItem = this.findById(id);
  foundItem.checked = !foundItem.checked;
};

const toggleCheckedFilter = function(){
  this.hideCheckedItems = !this.hideCheckedItems; 
}

const findAndUpdateName = function(id,newName){
  try {
    item.validateName(newName);        
    const foundItem = this.findById(id);
    console.log(foundItem.name);
    foundItem.name = newName;
    console.log(foundItem.name);
  } catch(error) {
    console.log(`Cannot update name: ${error.message}`);
  }   
};

const findAndDelete = function(id){
  const index = items.findIndex(item => item.id === id);
  items.splice(index, 1);
}

export default{
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndUpdateName,
    findAndToggleChecked,
    toggleCheckedFilter,
    findAndDelete
};


