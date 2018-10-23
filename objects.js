var playlist = {
  Queen: "Bohemian Rhapsody"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist.assign({artistName: songTitle});
  return playlist;
}
