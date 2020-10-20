
// You should implement your task here.

module.exports = function towelSort (twoDimArr) {
    
    twoDimArr = twoDimArr || [];
    let towel = [];

    twoDimArr.forEach( (arr, arrIndex) => {
    	if (arrIndex % 2 !== 0) {
        	// разворачиваем массив
            let stack = [];
            arr.forEach( arrItem => {
                // используя стек
            	stack.push(arrItem);
            });
            while (true) {
            	let next = stack.pop();
                if (!next) break;
                else towel.push(next);
            }
        } else {
        	towel = towel.concat(arr)
        }
    })
    return towel;
}
