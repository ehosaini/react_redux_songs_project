// Reducers

const songListReducer = () => {
  return [
    { title: 'song1', duration: '5:06' },
    { title: 'song2', duration: '4:06' },
    { title: 'song3', duration: '3:00' },
    { title: 'song4', duration: '5:00' },
    { title: 'song5', duration: '4:34' },
    { title: 'song6', duration: '3:55' }
  ]
}

const selectSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SELECT_SONG') {
    return action.payload
  }

  return selectedSong
}
