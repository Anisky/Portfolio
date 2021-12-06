

export const openModal =(id)=>{
    return {
        type: 'OPEN_MODAL',
        playload:id
    }


}
export const closeModal =()=>{
    return {
        type: 'CLOSE_MODAL',
    }


}