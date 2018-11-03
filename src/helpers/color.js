export default class ColorHelpers {
  static palette = [
    '#EA7423', // orange
    '#264653', // navy
    '#0FA3B1', // teal
    '#EF2D56', // pink
    '#7DDF64' // green
  ];

  static getRandomColor() {
    const rando = Math.floor(Math.random() * this.palette.length);

    return this.palette[rando];
  }
}
