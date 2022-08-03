import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'n5-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  language: any = {
    value: 'EN',
    translation: 'en'
} ;

  languages: any[] = []
  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.loadData();
    const currentLanguage = sessionStorage.getItem('language');
    const findLanguage = this.languages.filter( (l: any) => l.translation === currentLanguage)[0];
    this.language = findLanguage;
    this.translate.use(findLanguage.translation);

  }

  public select(language: any){
    if(language) {
      this.loadData();
      const selectedLanguage = this.languages.filter( (l: any) => l.value === language.value)[0];
      console.log(selectedLanguage);
      sessionStorage.setItem('language',selectedLanguage.translation);
      this.translate.use(selectedLanguage.translation);
      const event = new CustomEvent('language', {
        detail: {
          answer: selectedLanguage.translation
        }
      });
      window.dispatchEvent(event);

    }
  }

  public loadData(): void{
    this.languages = [
      {
        value: 'ES',
        translation: 'es'
      },
      {
        value: 'EN',
        translation: 'en'
      },
    ]
  }

}
