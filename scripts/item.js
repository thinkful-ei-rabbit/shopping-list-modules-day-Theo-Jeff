function validateName(name){
<<<<<<< HEAD
    if (name === ''){
    throw new TypeError("Name must not be blank")};
}

function create(name){
    const newItem = {'id':cuid(), 'name':name, 'checked': false};
    return newItem;
=======
    if (name === "" ){
    throw new TypeError("Name must not be blank")}
}

function create(name){
    let newItem = {'id':cuid(), 'name':name, 'checked': false};
    return newItem;    
>>>>>>> 40549bb8e76b295bdd66aca8b16f54422a85f5e0
}

export default {
    validateName,
    create
};