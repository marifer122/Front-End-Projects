function palindrome_check(){
  var str1 = document.getElementById("input").value;
  //conly allow letters
  var str=str1.replace(/[a-zA-Z0-9]/g,");
  
  // scheck for empty string
  if (str === ""){
      return;
  }
    
  if(isPalindrome(str)){
  document.getElementById("prog").innerHTML = `<b>"${str1}"</b> is a palindrome!.`;
  document.getElementById("input").value="";
  
}
  else
  document.getElementById("prog").innerHTML = `<b>"${str1}"</b> is not a palindrome!.`;
}
function isPalindrome(str1) {
  var str=str1.toLowerCase();
  for (let i = 0; i < Math.floor(str.length / 2); i++)
  {
      //make a comparison to find palindrome
    if ( str[i] !== str[str.length - 1 - i])
    {
      return false;
    }

  }
  return true;
}
function reset(){
  document.getElementById("input").value="";
  document.getElementById("prog").innerHTML="";
}
