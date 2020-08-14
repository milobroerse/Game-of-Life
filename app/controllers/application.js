import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  rects = [];

  constructor() {
    super(...arguments);
    let width = 80;
    let height = 60;
    for(let y = 0; y < height; y++){
      for(let x = 0; x < width; x++){
          let perlinNoise = Math.round(Math.random());
          let object = {'noise': perlinNoise, 'x': x, 'y': y}
          this.rects[x+y*width] = object
      }
    }
  }
}
