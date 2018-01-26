import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PopoverPage } from '../pages/popover/popover';
import { MateriPage } from '../pages/materi/materi';
import { IntroQuizPage } from '../pages/intro-quiz/intro-quiz';
import { UsahaPage } from '../pages/usaha/usaha';
import { DayaPage } from '../pages/daya/daya';
import { PengertianUsahaPage } from '../pages/pengertian-usaha/pengertian-usaha';
import { PengertianEnergiPage } from '../pages/pengertian-energi/pengertian-energi';
import { PengertianDayaPage } from '../pages/pengertian-daya/pengertian-daya';
import { RumusUsahaPage } from '../pages/rumus-usaha/rumus-usaha';
import { RumusDayaPage } from '../pages/rumus-daya/rumus-daya';
import { SoalUsahaPage } from '../pages/soal-usaha/soal-usaha';
import { SoalEnergiPage } from '../pages/soal-energi/soal-energi';
import { SoalDayaPage } from '../pages/soal-daya/soal-daya';
import { RumusEnergiPage } from '../pages/rumus-energi/rumus-energi';
import { EnergiPage } from '../pages/energi/energi';
import { QuizPage } from '../pages/quiz/quiz';
import { AboutPage } from '../pages/about/about';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PopoverPage,
    MateriPage,
    IntroQuizPage,
    UsahaPage,
    EnergiPage,
    DayaPage,
    PengertianUsahaPage,
    PengertianEnergiPage,
    PengertianDayaPage,
    RumusUsahaPage,
    RumusEnergiPage,
    RumusDayaPage,
    SoalUsahaPage,
    SoalEnergiPage,
    SoalDayaPage,
    QuizPage,
    AboutPage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PopoverPage,
    MateriPage,
    IntroQuizPage,
    UsahaPage,
    EnergiPage,
    DayaPage,
    PengertianUsahaPage,
    PengertianEnergiPage,
    PengertianDayaPage,
    RumusUsahaPage,
    RumusEnergiPage,
    RumusDayaPage,
    SoalUsahaPage,
    SoalEnergiPage,
    SoalDayaPage,
    QuizPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
