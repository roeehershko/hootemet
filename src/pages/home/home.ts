import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import pdfjsLib from 'pdfjs-dist'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    var loadingTask = pdfjsLib.getDocument('assets/example.pdf');
    loadingTask.promise.then(function(pdf) {
      console.log('PDF loaded');
      pdfjsLib.workerSrc = 'assets/pdf.worker.js';

      // Fetch the first page
      var pageNumber = 1;
      pdf.getPage(pageNumber).then(function(page) {
        console.log('Page loaded');

        // Prepare canvas using PDF page dimensions
        var canvas = <HTMLCanvasElement> document.getElementById('the-canvas');
        var viewport = page.getViewport(canvas.width / page.getViewport(1.0).width);

        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        var renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        var renderTask = page.render(renderContext);
        renderTask.then(function () {
          console.log('Page rendered');
        });
      });
    }, function (reason) {
      // PDF loading error
      console.error(reason);
    });
  }

}
