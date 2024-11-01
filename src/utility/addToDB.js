const getStoredReadList = () => {
    //read-list
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
       return storedList;
    }
    else {
          return [];
    }
}
const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        //already exist ,do not add it
        console.log(id, 'Already exist in the list')
    }
    else {
        storedList.push(id);
        const storedListStr=JSON.stringify(storedList);
        localStorage.setItem('read-list',storedListStr)
    }
}
const getStoredWishList = () => {
    //read-list
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
       return storedList;
    }
    else {
          return [];
    }
}
const addToWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)) {
        //already exist ,do not add it
        console.log(id, 'Already exist in the list')
    }
    else {
        storedList.push(id);
        const storedListStr=JSON.stringify(storedList);
        localStorage.setItem('wish-list',storedListStr)
    }
}
export{addToStoredReadList,addToWishList,getStoredReadList};