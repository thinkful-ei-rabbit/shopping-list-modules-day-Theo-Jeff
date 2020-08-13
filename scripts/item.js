


function validateName(name){

  if (name === undefined ){
    throw new TypeError('name must not be blank')};
  return name;
}


function create(name){
  let newItem = {id:cuid(), name:`${name}`, checked: false }
    
}

const test="Test"

export default {validateName, create, test};