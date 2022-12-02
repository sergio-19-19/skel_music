import { Component, ViewEncapsulation } from '@angular/core';
import { SkelMusicService } from '../services/skel-music.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular/';
import { SongsModalPage } from '../songs-modal/songs-modal.page';

@Component({
  selector: 'app-homeapp',
  templateUrl: './homeapp.page.html',
  styleUrls: ['./homeapp.page.scss'],
})
export class HomeappPage {
  slideOps = {
    initialSlide: 2,
    slidesPerView: 4,
    centeredSlides: true,
    speed: 400
  };
  songs: any[] = [];
  albums: any[] = [];
  artists: any[] = [];

  song:{
    preview_url: string;
    playing: boolean;
    name: string;} = {
      preview_url: "",
      playing: false,
      name: "" }
    currentSong: any = {};
    newTime: any;

  constructor(private musicService: SkelMusicService,
    private router: Router,
    private modalController:ModalController) {}

  returnin(){
    this.router.navigateByUrl("/menu")
  }

  // renderiza cambios en la entrada directamente en la vista
  ionViewDidEnter() {
    this.musicService.getNewReleases().then(newReleases => {
      this.musicService.getArtists();
      console.log(this.artists);
      this.songs = newReleases.albums.items.filter(
        e => e.album_type == "single"
      );
      this.albums = newReleases.albums.items.filter(
        e => e.album_type == "album"
      );
    });
  }

  async showSongs(artist) {
    const songs = await this.musicService.getArtistTopTracks(artist.id);
    const modal = await this.modalController.create({
      component: SongsModalPage,
      componentProps: {
        songs: songs.tracks,
        artist: artist.name
      }
    });

    modal.onDidDismiss().then(dataReturned=>{
      this.song = dataReturned.data;
    });

    return await modal.present();
  }

  play(){
    const urlSong = this.song.preview_url;
    if(urlSong===null){
      this.song.name = 'cancion no disponible aun💔';
      return;
    }
    this.currentSong = new Audio(this.song.preview_url);
    this.currentSong.play();
    this.currentSong.addEventListener('timeupdate', () => {
      this.newTime = (this.currentSong.currentTime * (this.currentSong.duration / 10)) / 100;
    });
    this.song.playing = true;
  }

  pause(){
    this.currentSong.pause();
    this.song.playing=false;
  }
  parseTime(time: number){
    if(time){
      const partTime = parseInt(time.toString().split(".")[0],10);
      let minutes = Math.floor(partTime/60).toString();
      if(minutes.length ==1 ){
        minutes = "0"+ minutes;
      }
      let seconds = (partTime % 60).toString();
      if (seconds.length == 1){
        seconds = "0" + seconds;
      }
      return minutes + ":" + seconds;
    }
  }

}
