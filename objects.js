var playlist = {
  Queen: "Bohemian Rhapsody"
}

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign(playlist, {artistName: songTitle});
  return playlist;
}
