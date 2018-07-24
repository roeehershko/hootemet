import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import {DocumentViewer, DocumentViewerOptions} from "@ionic-native/document-viewer";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  constructor(public navCtrl: NavController, private document: DocumentViewer) {

  }

  showDocument() {
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    };

    this.document.viewDocument('http://www.pdf995.com/samples/pdf.pdf', 'application/pdf', options)
  }
}
