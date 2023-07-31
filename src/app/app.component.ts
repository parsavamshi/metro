import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'metrochem';
  // constructor(private translate: TranslateService){
  //   translate.addLangs(['en','ta']),
  //   translate.setDefaultLang('en')

  //   const browserLang = translate.getBrowserLang();
  //   translate.use(browserLang.match(/en|fr/) ? browserLang : 'en')
  // }







  // browserLang:any

  // constructor(public translate: TranslateService) {
  //   translate.addLangs(['en', 'fr']);
  //   translate.setDefaultLang('en');

  //   this.browserLang = translate.getBrowserLang();
  //   translate.use(this.browserLang.match(/en|fr/) ? this.browserLang : 'en');
  // }


   googleTranslateElementInit() {
    // new google.translate.TranslateElement(
    // {
    //   pageLanguage: 'ko',
    //   includedLanguages: 'en',
    //   layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT,
    //   autoDisplay: false
    // },'google_translate_element');}

  }

  public selectLanguage(event: any){

  }
}
