import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'figma-into-mui';

  dinosaur: string;
  material: string;
  artStyle: string;

  constructor() {
    this.dinosaur = "";
    this.material = "";
    this.artStyle = "";
  }

  getDinosaur(dinosaur: string) {
    this.dinosaur = dinosaur;
    console.log("Your favourite dinosaur:", this.dinosaur);
  }

  getMaterial(material: string) {
    this.material = material;
    console.log("Your favourite material:", this.material);
  }

  getArtStyle(artStyle: string) {
    this.artStyle = artStyle;
    console.log("Your favourite art style:", this.artStyle);
  }

  doTheSubmission(buttonClick: string) {
    console.log("buttonClick:", buttonClick);
    const submission = `Form submitted with: 
    ${this.dinosaur} 
    ${this.material}
    ${this.artStyle}`;
    
    console.log("submission",submission);
    if (this.dinosaur && this.material && this.artStyle) {
      alert(submission);
      return
    }
    alert("Please fill out all fields before submitting.")
  }
}
