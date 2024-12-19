const state ={
listedPuppies: []
}
const main = document.querySelector("main")

const getAllPuppies =async()=>{
 const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-MT-WEB-PT/players`)
 const allPuppies = await response.json()
 state.listedPuppies = allPuppies.data.players

renderPuppies()
}
const renderPuppies =()=>{
const puppyNames = state.listedPuppies.map((puppy)=>{return `<li>${puppy.name}</li></br>`})
main.innerHTML = ` <ol> ${puppyNames.join(" ")}</ol>`

const ol = document.querySelector('ol')
ol.addEventListener('click', (event)=>{if ( event.target.tagName ="LI"){
renderSinglePuppy (event.target.innerText)
}})
}
const renderSinglePuppy =(selectedPuppy)=>{
const puppy = state.listedPuppies.find((pup)=>{return pup.name == selectedPuppy}) 
main.innerHTML = `
<div class = " div-one">
  <div>
    <img src="${puppy.imageUrl}" alt = image of ${selectedPuppy}>
  </div>
  <div class ="div-two">
    <h1><span>${selectedPuppy.toUpperCase()}</span></h1>
    <h2><span>Breed:</span> ${puppy.breed}</h2>
    <h2><span>Status:</span> ${puppy.status}</h2>
  </div>
  <div class ="div-three"> 
  <h2><span >ID</span> </br>${puppy.teamId}</h2>
  </div>
</div>
</br>
<button> Return To Puppy List</button>
`
const button = document.querySelector("button")
button.addEventListener('click', (event)=>{getAllPuppies()})

}
getAllPuppies()