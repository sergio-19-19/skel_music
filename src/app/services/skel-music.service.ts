import { Injectable } from "@angular/core";
import * as dataArtists  from "./artists.json";

@Injectable({
  providedIn: "root"
})
export class SkelMusicService {
  constructor() {}

  getArtists() {
    return dataArtists;
  }

  getNewReleases() {
    return fetch(`https://platzi-music-api.herokuapp.com/browse/new-releases`,{
       mode: 'no-cors', headers: { 'Access-Control-Allow-Origin': '*', }
       }).then(
       response => response.json()
     );
   }

  async getArtistTopTracks(artistId) {
    return fetch(
      `https://platzi-music-api.herokuapp.com/artists/${artistId}/top-tracks?country=CO`, {
        mode: 'cors', headers: { 'Access-Control-Allow-Origin': '*', }
      }).then(
      response=> response.json()
      );
  }

}
