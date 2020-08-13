const test = "test";

export default {test};

function validateName(name){

    if (name === undefined ){
    throw new TypeError("name must not be blank")}
}

function create(name){
    let newItem = {"id:", "name:`${name}`", }
    
}