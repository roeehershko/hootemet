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

    this.document.viewDocument('assets/example.pdf', 'application/pdf', options)
  }
}
