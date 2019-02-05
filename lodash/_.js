const _ = {
	clamp : (num, lower, upper) => {
		if(num<lower) return lower;
		if(num>upper) return upper;
		return num;
	},

	inRange : (num, start, end) => {
		if(end === undefined){
			end = start;
			start = 0;
		}
		if(end < start){
			let temp = end;
			end = start;
			start = temp;
		}
		if(num<start || num>=end) return false;
		return true;
	},

	words : str => {
		let arr = str.split(' ');
		return arr;
	},

	pad : (str,len) => {
		if(str.length > len) return str;
		let before = Math.floor( (len-str.length) /2);
		let after = Math.ceil( (len-str.length) /2);

		for(let i=0; i<before; i++){
			str = " "+str;
		}

		for(let i=0; i<after; i++){
			str += " ";
		}

		return str;
	},

	has : (obj, key) => {

		if(obj[key] === undefined) return false;
		return true;

	},

	invert : (obj) => {
		let output = {};
		for(let key in obj){
			output[obj[key]] = key;
		}
		return output;
	},

	findKey : (obj, func) => {
		for(let key in obj){
			if(func(obj[key])) return key;
		}
		return undefined;
	},

	drop : (arr, num) => {
		let output = [];
		if(!num) num = 1;
		for(let i=num; i<arr.length; i++){
			output.push(arr[i]);
		}
		return output;
	},

	dropWhile : (arr, func) => {
		let output = [];
		var flag = false;
		for(key in arr){
			if(!func(arr[key], key, arr)){
				flag = true;
			}
			if(flag) output.push(arr[key]);
		}
		return output;
	},

	chunk : (arr, size) => {
		if(!size) size=1;
		var output = [[]];
		var cursor = 0;
		arr.forEach(item => {
			output[cursor].push(item);
			if(output[cursor].length == size){
				output.push([]);
				cursor++;
			}
		});
		if(output[cursor].length == 0) output.pop();
		return output;
	}
};


// Do not write or modify code below this line.
module.exports = _;