



class Playlist {
  constructor(title) {
      // Your code here
      this.title = title;
      this.songs = [];     
  }
  getTitle() {
      // Returns the title
      return this.title;
  }
  addSong(song) {
      // Your code here
      this.songs.push(song);

  }
  getTotalLength() {
      // Your code here
      
      let totalTime = 0;
      for ( let i = 0; i< this.songs.length; i++) {
        totalTime = totalTime + this.songs[i].getDuration();
      }
      let hours = Math.floor(totalTime / 3600).toString().padStart(2, '0');
      let minutes = Math.floor((totalTime - (hours * 3600)) / 60).toString().padStart(2, '0');;
      let seconds = totalTime - (hours * 3600) - (minutes * 60).toString().padStart(2, '0');;
      return `${hours}:${minutes}:${seconds}`;
    }
  }
class Song {
  constructor(artist, name, duration) {
      // Your code here
      this.artist = artist;
      this.name = name;
      this.duration = duration;
  }
  setName(name) {
      // Your code here
      this.name = name;
  }
  getName() {
      // Your code here
      return this.name;
  }
  setArtist(artist) {
      // Your code here
      this.artist = artist;
  }
  getArtist() {
      // Your code here
      return this.artist;
  }
  setDuration(duration) {
      // Your code here
      this.duration = duration;
  }
  getDuration() {
      // Your code here
      return this.duration;
  }
}

let playlist = new Playlist("Best of 2021");
let song = new Song("Ursus Factory", "ANO", 219);
playlist.addSong(song);
song = new Song("Queen", "Bohemian Rhapsody", 354);
playlist.addSong(song);
song = new Song("Styx", "Boat On The River", 190);
playlist.addSong(song);
process.stdout.write("Total length of playlist " + playlist.getTitle() + " is " + playlist.getTotalLength());