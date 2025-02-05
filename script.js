//your JS code here. If required.

function mapLetters(string){

	let result = {};
	for(let i = 0 ; i < string.length;i++){
		const letter = string[i];

		if(!result[letter]){
			result[letter] = [];
		}

		result[letter].push(i);
	}
	return result;
}