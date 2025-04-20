const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
  ];
  


function findOldestXMen(xMen) {
    // insert code
  let oldestYear = xMen[0].year

  for (let i = 1; i < xMen.length; i++) {

    const currentYear = xMen[i].year
    
    if (currentYear < oldestYear) {

      oldestYear = currentYear

    }
  }


  const oldestXMen = []

  for (let i = 0; i < xMen.length; i++) {
    if (xMen[i].year === oldestYear) {

      oldestXMen.push(xMen[i])

    }
  }

  return oldestXMen
}

const oldest = findOldestXMen(xMen)
console.log('X-Men más antiguos:', oldest)



