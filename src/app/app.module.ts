import { KnowledgeViewPage } from './../pages/knowledge-view/knowledge-view';
import { ComponentsModule } from './../components/components.module';
import { TestService } from './../service/test.service';
import { ViewExaminePage } from './../pages/view-examine/view-examine';
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProfilePage } from '../pages/profile/profile';
import { Avatar } from '../pages/avatar/avatar';
import { Name } from '../pages/name/name';
import { Password } from '../pages/password/password';
import { About } from '../pages/about/about';
import { Favorites } from '../pages/favorites/favorites';
import { Reflection } from '../pages/reflection/reflection';
import { Mistakenote } from '../pages/mistakenote/mistakenote';
import { Diagnosis } from '../pages/diagnosis/diagnosis';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { KatexModule } from 'ng-katex';

import { ChoiceQuestions } from '../pages/choice-questions/choice-questions';
import { Test } from '../pages/test/test';
import { Start } from '../pages/start/start';
import { Discover } from '../pages/discover/discover';
import { TopList } from '../pages/top-list/top-list';
import { SolutionReflect } from '../pages/solution-reflect/solution-reflect';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { BookShop } from '../pages/book-shop/book-shop';
import { ChapterList } from '../pages/chapter-list/chapter-list';
import { Answer } from '../pages/answer/answer';
import { Hint } from '../pages/hint/hint';

import { SignupPage } from "../pages/signup/signup";
import { CustomFormsModule } from 'ng2-validation'
import { Storage, IonicStorageModule } from "@ionic/storage";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MathJaxDirective } from '../directives/Mathjax.directive';
import { AuthService } from './../service/auth-service';

import { QuestionService } from '../service/QuestionService';
import { MyBooksService } from '../service/MyBooksService';

import { AuthProvider } from "../providers/auth/auth";
import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig, JwtHelper } from
  'angular2-jwt/angular2-jwt';
import { ExaminePage } from '../pages/examine/examine';
import { ExamineService } from '../service/examine.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { YouChoiceComponent } from '../components/you-choice/you-choice.component';
import { YouChoiceOptionComponent } from '../components/you-choice-option/you-choice-option.component';
import { YouChoiceOptionlistComponent } from '../components/you-choice-optionlist/you-choice-optionlist.component';
import { YouImgComponent } from '../components/you-img/you-img';
import { YouKatexComponent } from '../components/you-katex/you-katex';
import { TransCourseStatus } from '../components/enum/trans.course.status';
import { TransChoiceOption } from '../components/enum/trans.choice.option';
import { AbilityAnalysisPage } from '../pages/ability-analysis/ability-analysis';
import { EchartsNg2Module } from 'echarts-ng2';
import { YouShortanswerComponent } from '../components/you-shortanswer/you-shortanswer';
import { MyAnswersheetPage } from '../pages/my-answersheet/my-answersheet';
import { YouFillblankComponent } from '../components/you-fillblank/you-fillblank.component';
import { AnalysisTestService } from '../service/Analysis.test';

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    Avatar,
    Name,
    Password,
    About,
    Favorites,
    Reflection,
    Mistakenote,
    Diagnosis,
    HomePage,
    ChoiceQuestions,
    Test,
    Start,
    Discover,
    TopList,
    SolutionReflect,
    Login,
    SignupPage,
    Register,
    BookShop,
    ChapterList,
    Answer,
    Hint,
    TabsPage,
    ExaminePage,
    ViewExaminePage,
    AbilityAnalysisPage,
    MyAnswersheetPage,
    KnowledgeViewPage,

    MathJaxDirective,

    YouChoiceComponent,
    YouChoiceOptionComponent,
    YouChoiceOptionlistComponent,
    YouFillblankComponent,
    YouImgComponent,
    YouKatexComponent,
    YouShortanswerComponent,

    TransChoiceOption,
    TransCourseStatus
  ],
  imports: [
    BrowserModule,
    EchartsNg2Module,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'myapp',
      driverOrder: ['sqlite', 'indexeddb', 'websql']
    }),

    KatexModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    Avatar,
    Name,
    Password,
    About,
    Favorites,
    Reflection,
    Mistakenote,
    Diagnosis,
    HomePage,
    ChoiceQuestions,
    Test,
    Discover,
    TopList,
    SolutionReflect,
    Start,
    Login,
    SignupPage,
    Register,
    BookShop,
    ChapterList,
    Answer,
    Hint,
    TabsPage,
    ExaminePage,
    ViewExaminePage,
    AbilityAnalysisPage,
    MyAnswersheetPage,
    KnowledgeViewPage,

    YouChoiceComponent,
    YouChoiceOptionComponent,
    YouChoiceOptionlistComponent,
    YouImgComponent,
    YouKatexComponent,
    YouShortanswerComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QuestionService,
    MyBooksService,
    AuthProvider,
    AuthService,
    ExamineService,
    TestService,
    AnalysisTestService,
    AUTH_PROVIDERS,
    JwtHelper,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule { }
