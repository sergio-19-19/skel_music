import { Component } from '@angular/core';
import { Icon } from 'ionicons/dist/types/components/icon/icon';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOps = {
    initialSlide: 0,
    slidesPerview:1,
    centeredSlides:true,
    speed:400
  };
  constructor() {}
}


/*
			▶skel_music⏸
swipe y usando *nfor ="para iterar todos los slice en diferentes slices"
<ion-slide *ngfor="let slide of slides" >

 {{slide.title}}
<h2>{{slide.subTitle}}</h2>
<p> {{slide.description}}</p>	
<ion-slide name={
 /* slides= [
   {
     title:"disfrute la musica cuando quieras",
     subTitle:"y en donde quieras que sea🔛",
     description:" podras escuchar los mejores artistas,albumes, y las mejores canciones a todas horas."
 },
   { 
    title:"reproduce todo tipo de musica",
    subTitle:"es un reproductor dinamico✅",
    description:"skel_music es la app que estabas esperando con una interfaz limpia y amigable enfocada para todo,tipo de publico."
  
   },
   {
    title:"la app de reproduccion de musica mas facil y sencilla de usar",
    subTitle:"es un reproductor genial✅",
    description:"skel_music se crea pensando en brindarles a los usuarios de este producto una app que permita la reproduccion de todo tipo de musica. "
     
   }
 ];
  */



