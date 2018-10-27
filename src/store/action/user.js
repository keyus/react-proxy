
export const updateUser = (token,user)=>{
    return {
        type : 'UPDATE_USER',
        token,
        user,
    }
}

export const clearUser = ()=>{
    return {
        type : 'CLEAR_USER',
    }
}
