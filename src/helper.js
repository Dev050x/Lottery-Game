function generateArr(nums){
    let arr = new Array(nums);
    for(let i=0; i<nums; i++){
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

export {generateArr};