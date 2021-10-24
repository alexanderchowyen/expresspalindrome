console.log('hey im linked up');
const button = document.querySelector("button")

button.addEventListener('click', function(){
  console.log("the button works!")
  let word = document.querySelector('#word').value
  if (word === ""){
    document.querySelector("h1").innerHTML= "no text not a palindrome"
    return 
  }
  fetch(`/api?word=${word}`)
  .then(response => response.json())
  .then((data) => {
    console.log("server response", data.isPalin);
    if (data.isPalin){
    console.log('palindrome')
    document.querySelector("h1").innerHTML= "palindrome"
  }
  else {
    console.log('not a palindrome')
    document.querySelector("h1").innerHTML= "not a palindrome"
  }
  });
  
})