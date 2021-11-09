// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

//------------------------------------------------------------------------------
// Don't change the code above: this function mocks the server response
//------------------------------------------------------------------------------

const errorModal = document.getElementById("modal")
errorModal.classList.add(`hidden`)

const likeSymbol = document.querySelector(".like-glyph")
likeSymbol.addEventListener("click", mimicServerCall)


mimicServerCall().then((value) => {

  if (value = "Pretend remote server notified of action!" && errorModal.classList.contains(`hidden`) == false){
    errorModal.className += `hidden`;
    console.log(value)};
    likeSymbol.innerHTML = FULL_HEART
    likeSymbol.classList.add("activated-heart")
  }
).catch ((error) => {
  if (value = "Random server error. Try again.") {
    errorModal.classList.remove("hidden");
  }
  setTimeout(() => {errorModal.classList.add("hidden")}, 3000)
  console.error(error);

})

const filledHeart = document.querySelector(".activated-heart")

filledHeart .addEventListener("click", removeRedHeart)

function removeRedHeart() {
  filledHeart.classList.remove("activated-heart");
  likeSymbol.innerHTML = EMPTY_HEART
}










// const errorModal = document.getElementById("modal")
// errorModal.classname += `hidden`

// const likeSymbol = document.querySelector(".like-glyph")
// likeSymbol.addEventListener("click", mimicServerCall)


// mimicServerCall().then((value) => {

//   if (value = "Random server error. Try again.")
//     errorModal.className += `hidden`
//   }
// ).catch ((error) => {
//   console.error(error);

// })

//This is code that I tried to get work so the error message wouldnt appear originally on refresh

// let errorModal = document.getElementById("modal")
// errorModal.className += `hidden`
// const likeSymbol = document.querySelector(".like-glyph")
// likeSymbol.addEventListener("click", mimicServerCall)


// mimicServerCall().then((value) => {
//   errorModal = document.getElementById("modal")

//   if (value = "Random server error. Try again."){
//     errorModal.classList.remove("hidden")
// }}
// ).catch ((error) => {
//   console.error(error);

// })

// mimicServerCall().then(function(value) {
//   console.log(value);
//   throw new Error(`oh, no!`);
// }).catch(function(e) {
//   console.error(e.message);
//   errorModal.className -+ `hidden`
// }).then(function(){
//   console.log(`after a catch the chain is restores`);
// }, function () {
//   console.log(`Not fired due to the catch`);
// });

// function emptyHeart() {
// if (likeSymbol.addEventListener("click", mimicServerCall) = "Random server error. Try again.") {
//   mimicServerCall.catch(() => {});
//   const modalDelete = document.getElementsByClassName("delete")
//   modalDelete.classList.remove("delete")
// }

// }
// console.log(emptyHeart)