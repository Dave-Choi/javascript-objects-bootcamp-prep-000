var playlist = {
  Queen: "Bohemian Rhapsody"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}
