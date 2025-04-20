const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
  
  function findMutantByPower(mutants, power) {
    // insert code

    let foundMutants = []
  
    for (let i = 0; i < mutants.length; i++) {
      if (mutants[i].power === power) {
        foundMutants.push(mutants[i].name)
      }
    }
  
    if (foundMutants.length > 0) {
      return `Mutantes con el poder '${power}': ${foundMutants.toString()}`
    } 
    
    else {
      return `No se encontraron mutantes con el poder '${power}'`
    }
  }
  
  const result = findMutantByPower(mutants, "telekinesis")
  console.log(result)
  
  const result2 = findMutantByPower(mutants, "invisibility")
  console.log(result2)
  