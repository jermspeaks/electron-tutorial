var picture = require('cat-picture');
var image = require('lightning-image-poly');
var remote = require('electron').remote;
var fs = require('fs');

function save() {
  remote.getCurrentWindow().webContents.printToPDF({
    portrait: true
  }, (err, data) => {
    fs.writeFile('annotation.pdf', data, err => {
      if (err) alert('error generating pdf! ' + err.message);
      else alert('pdf saved!');
    });
  });
}

var src = picture.src;
picture.remove();

var viz = new image('#visualization', null, [src], {
  hullAlgorithm: 'convex'
});

window.addEventListener('keydown', e => {
  if (e.keyCode == 80) save();
})
