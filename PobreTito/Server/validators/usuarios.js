function registroValidator(user,users){
    let band = true;
    const validateCuil = (cuil) => {
        if (cuil.length != 13) {
            return false;
        }
        else{
            return true;
        }
      };

    users.forEach(item => {
        if(item.cuil === user.cuil){
            band = false;
        }
    });
    if(validateCuil(user.cuil) && band){
        return true;
    }
    else{
        return false;
    }
      
}



export {registroValidator};