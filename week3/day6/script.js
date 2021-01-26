function bubbleSort(array) {
	const len = array.length();
	for (let i=0; i < len; i++) {
		for (let j=0; j< len - i; j++) {
		    if(array[j] > array[j+1]) {
	               const tmp = array[j];
	               array[j] = array[j+1];
	               array[j+1] = tmp;
            }
        }   
	}  
	return array;
}
const array = [5,0,9,1,7,4,2,6,3,8]
console.log(bubbleSort(array));