const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };
  


  function getCapital(country) {
    // insert code


    if (capitals[country]) {
        return capitals[country]
    }

    else {
        return "Este país y su respectiva capital, no están en la lista"

    }


  }

  const capital = getCapital("Brazil")
  
  console.log(capital)