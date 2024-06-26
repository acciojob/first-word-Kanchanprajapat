function firstWord(s) {
  // your code here
	if(s.length == 0){
		return '';
	}
	var words = s.split(' ');
    
    // Check if the first word is empty
    if (words[0] == '') {
        // If it is, return the second word
        return words[1];
    } else {
        // Otherwise, return the first word
        return words[0];
    }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
