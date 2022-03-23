export const AddProduct = (value) => async dispatch =>{
    console.log("value",value)
        dispatch({
            type:"ADD",
            payload: value
        })
}


export const RemoveProduct = (value) => async dispatch =>{
    dispatch({
        type:"REMOVE",
        payload: {name:value}
    })
}
