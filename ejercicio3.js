const songs = [
    { title: 'Bohemian Rhapsody', genre: 'Rock', duration: 5.55 },
    { title: 'Stairway to Heaven', genre: 'Rock', duration: 7.58 },
    { title: 'Billie Jean', genre: 'Pop', duration: 4.54 },
    { title: 'Hotel California', genre: 'Rock', duration: 6.31 },
    { title: 'Sweet Child o Mine', genre: 'Rock', duration: 5.56 },
    { title: 'Smells Like Teen Spirit', genre: 'Rock', duration: 5.01 },
    { title: 'Comfortably Numb', genre: 'Rock', duration: 6.23 },
    { title: 'Wish You Were Here', genre: 'Rock', duration: 5.34 },
    { title: 'Black Dog', genre: 'Rock', duration: 4.54 },
    { title: 'Thunderstruck', genre: 'Rock', duration: 4.52 },
    { title: 'Crazy Love', genre: 'Pop', duration: 3.52 },
  ];
  const rockPlaylist = []
  
  // Añade tu código de bucle aquí
  
  
for (let i = 0; i <songs.length; i++)   {

    const currentSong = songs[i]

    if (currentSong.genre === "Rock" && currentSong.duration > 5) {

        rockPlaylist.push(currentSong)

    }


}

console.log("Canciones Rock de más de 5 minutos:", rockPlaylist.map(song => `${song.title} (${song.duration})`))