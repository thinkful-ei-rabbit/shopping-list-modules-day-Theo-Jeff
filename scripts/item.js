function validateName(name){
    if (name === undefined ){
    throw TypeError("Name must not be blank")}
}

function create(name){
    let newItem = {'id':cuid(), 'name':name, 'checked': false};    
}

export default {
    validateName,
    create
};