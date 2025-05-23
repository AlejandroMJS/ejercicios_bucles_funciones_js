const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
  ];
  
  // Añade tu código de bucle aquí
  


    const groupedByGenre = {}

    for (let i = 0; i < tracks.length; i++) {

        const currentSong = tracks[i]

        const genre = currentSong.genre

        if (!groupedByGenre[genre]) {

            groupedByGenre[genre] = []
        }

        groupedByGenre[genre].push(currentSong.title)

    }

    console.log(groupedByGenre)