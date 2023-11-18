function trailingZeros(n) {
  //your JS code here. If required.
	let num = parseInt(n);
	let sum = 1; 
	for(let i = 1; i <= num; i++){
		sum = sum * i;
	}
	let str = String(sum).split('');
	let count = 0;
	for(let i = 0; i < str.length; i++){
		if(str[i] == '0'){
			count++;
		}
	}
	return count;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
