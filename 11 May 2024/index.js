function capittalizeFirstLetter(str){
    return str.split(' ').map(word=> word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}
document.getElementById('demo').innerHTML= capittalizeFirstLetter("cybrom technology bhopal");


// [cybrom,technology,bhopal]
// T + echnology = 
// C+ ybrom = 
// Cybrom Technology 


//==============================================================================================

// trim() Method 
function isBlank(str){
    return !str.trim();
}
console.log(isBlank(""));
console.log(isBlank("  "));
console.log(isBlank())