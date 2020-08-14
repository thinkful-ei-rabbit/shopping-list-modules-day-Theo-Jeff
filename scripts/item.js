function validateName(name){
    if (name === ''){
    throw new TypeError("Name must not be blank")};
}

function create(name){
    const newItem = {'id':cuid(), 'name':name, 'checked': false};
    return newItem;
}

export default {
    validateName,
    create
};