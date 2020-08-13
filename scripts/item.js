


function validateName(name){

  if (name === "" ){
    throw new TypeError('name must not be blank')};
  return name;
}


function create(name){
  let newItem = {id:cuid(), name:`${name}`, checked: false }
    return newItem;
}

const test="Test"

export default {validateName, create};