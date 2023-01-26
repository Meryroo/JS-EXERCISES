
const getCharacters = async () => {
    const data = await fetch("https://api.sampleapis.com/futurama/characters");
    const characters = await data.json();

    mapCharacters(characters)
  };
  
  const mapCharacters = (characters) =>{
    const mappedCharacters = characters.map((character =>({
        name: character.name.first +" "+ character.name.middle +" "+ character.name.last,
        species:character.species,
        location: character.homePlanet,
        image: character.images.main,
    }))) 
    
    printCharacter(mappedCharacters)
  }

  const printCharacter = (mappedCharacters) =>{
    const container = document.querySelector("#container")
    container.innerHTML = ""
    for (const character of mappedCharacters){
        const figure = document.createElement("figure");
        figure.innerHTML = `
        <img src=${character.image} alt=${character.name}/>
        <h2>${character.name}</h2>
        <h3>${character.species}</h3>
        <h3>${character.location}</h3>
        `
        container.appendChild(figure) 
    } 
    
  }
  
  getCharacters()
 
//FILTRO HUMANOS

  const humanCharacters = async () => {
    const list = await fetch("https://api.sampleapis.com/futurama/characters");
    const newHumanCharacters = await list.json();
    const filterHuman = newHumanCharacters.filter((humanCharacter) =>humanCharacter.species == "Human" )
    console.log(filterHuman)
    mapHumanCharacters(filterHuman)
  };
  

  const mapHumanCharacters = (filterHuman) =>{
    const mappedHumanCharacters = filterHuman.map((character =>({
        name: character.name.first +" "+ character.name.middle +" "+ character.name.last,
        species:character.species,
        location: character.homePlanet,
        image: character.images.main,

    }))) 
  
    printHumanCharacter(mappedHumanCharacters)
  };
    
    const printHumanCharacter = (mappedHumanCharacters) =>{
      const container = document.querySelector("#human")
      container.innerHTML = ""
      for (const character of mappedHumanCharacters){
          const figure = document.createElement("figure");
          figure.innerHTML = `
          <img src=${character.image} alt=${character.name}/>
          <h2>${character.name}</h2>
          <h3>${character.species}</h3>
          <h3>${character.location}</h3>
          `
          container.appendChild(figure) 
      } 
      
    }
    
  const human = document.querySelector(".humanbtn")
  human.addEventListener ("click", ()  => {
    container.innerHTML = ""
    humanCharacters()
  })


  //FILTRO NO HUMANOS

  const noHumanCharacters = async () => {
    const list = await fetch("https://api.sampleapis.com/futurama/characters");
    const newHumanCharacters = await list.json();
    const filterNoHuman = newHumanCharacters.filter((noHumanCharacter) =>noHumanCharacter.species !== "Human" )
    console.log(filterNoHuman)
    mapHumanCharacters(filterNoHuman)
  };
  

  const mapNoHumanCharacters = (filterNoHuman) =>{
    const mappedNoHumanCharacters = filterNoHuman.map((character =>({
        name: character.name.first +" "+ character.name.middle +" "+ character.name.last,
        species:character.species,
        location: character.homePlanet,
        image: character.images.main,

    }))) 
  
    printHumanCharacter(mappedNoHumanCharacters)
  };
    
    const printNoHumanCharacter = (mappedNoHumanCharacters) =>{
      const container = document.querySelector("#nohuman")
      container.innerHTML = ""
      for (const character of mappedNoHumanCharacters){
          const figure = document.createElement("figure");
          figure.innerHTML = `
          <img src=${character.image} alt=${character.name}/>
          <h2>${character.name}</h2>
          <h3>${character.species}</h3>
          <h3>${character.location}</h3>
          `
          container.appendChild(figure) 
      } 
      
    }
    
  const noHuman = document.querySelector(".noHumanBtn")
  noHuman.addEventListener ("click", ()  => {
    container.innerHTML = ""
    noHumanCharacters()
  })

  //FILTRO SEARCH
  
  


