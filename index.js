"use strict";

module.exports = {
  downloadCoordinatesFile: function(coords) {
    import { saveAs } from 'file-saver';
    var coordsAsText = "";
    coords.map(function(coord, i) {
      if (i < coords.length - 1) {
        coordsAsText +=  coord[0] + " " +  coord[1] + " " +  coord[2] + "\n";
      } else if (i === coords.length - 1) {
        coordsAsText +=  coord[0] + " " +  coord[1] + " " +  coord[2];
      }
    });

    var blob = new Blob([coordsAsText], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "trafo_coordinates.txt");
  }
}