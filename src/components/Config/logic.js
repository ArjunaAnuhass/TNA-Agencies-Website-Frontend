export const isPresentInFavorites = (favorites, advertisement) => {
    for(let item of favorites){
        if(advertisement.id===item.id){
            return true
        }
    }

    return false;
}