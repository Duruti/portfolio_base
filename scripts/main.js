const cards = document.querySelector('.cards')
let result =  await fetch("data/top10.json")
.then(json => json.json())
.then(data => data )



console.log(cards)
result.forEach(data => {
   createCard(cards,data)
});

function createCard(parent,data){
   const card = document.createElement('a')
   card.href = data.link
   card.target = "_blank"
   card.classList.add('card')
  
   const type = document.createElement('h4')
   type.innerText = data.type
   type.classList.add('cardType')
   card.appendChild(type)

   const img = document.createElement('img')
   img.src = data.image
   img.classList.add('cardImage')
   card.appendChild(img)
  
   const title = document.createElement('h3')
   title.innerText = data.title
   title.classList.add('cardTitle')
   card.appendChild(title)
  
   const description = document.createElement('p')
   description.innerText = data.description
   description.classList.add('cardDescription')
   card.appendChild(description)
  
   const specs = document.createElement('p')
   specs.innerText = data.specs.join(" ")
   specs.classList.add('cardSpecs')
   card.appendChild(specs)
  
   parent.appendChild(card)
   console.log(card)
}