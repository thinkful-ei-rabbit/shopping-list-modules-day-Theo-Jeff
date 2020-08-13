function validateName(name){

    if (name === '' ){
    throw TypeError("name must not be blank")}
}

function create(name){
    let newItem = {'id':cuid(), 'name':name, 'checked': false};    
}


export default {
    validateName,
    create
};