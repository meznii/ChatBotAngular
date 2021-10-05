import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import {ChatbotComponent} from './component/chatbot/chatbot.component';
//import {AttenteComponent} from './component/type/attente/attente.component';
import {ImportFichierComponent} from './component/CRM/import-fichier/import-fichier.component';
import {DedoublonnageComponent} from './component/CRM/dedoublonnage/dedoublonnage.component';
import {LectureCrmComponent} from './component/CRM/lecture-crm/lecture-crm.component';
import {ReceptionNFComponent} from './component/CRM/reception-nf/reception-nf.component';
import {CadreProblemComponent} from './component/CRM/cadre-problem/cadre-problem.component';
import {ItemsComponent} from './component/CRM/items/items.component';
import {TypeProblemComponent} from './component/typeProblem/type-problem/type-problem.component';
import {BillingComponent} from './component/billing/billing/billing.component';
import {VoiceComponent} from './component/voice/voice/voice.component';
import {CrVoiBillingComponent} from './component/cr-voi-billing/cr-voi-billing.component';
import {FicheMuettesComponent} from './component/CRM/fiche-muettes/fiche-muettes.component';
import {DecalageFichAppelComponent} from './component/CRM/decalage-fich-appel/decalage-fich-appel.component';
import {AgendaComponent} from './component/CRM/agenda/agenda.component';
import {ChercherContactComponent} from './component/CRM/chercher-contact/chercher-contact.component';
import {FicheAppelComponent} from './component/CRM/fiche-appel/fiche-appel.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './component/login/login.component';
import {ViceItemsComponent} from './component/voice/vice-items/vice-items.component';
import {ProblemSonComponent} from './component/voice/problem-son/problem-son.component';
import {CopurAppelComponent} from './component/voice/copur-appel/copur-appel.component';
import {ConnexionEchoueComponent} from './component/voice/connexion-echoue/connexion-echoue.component';
import {AuthGuard} from './guard/auth.guard';
import { ItemsBbillingComponent } from './component/billing/items-bbilling/items-bbilling.component';
import { WhiteListeComponent } from './component/billing/white-liste/white-liste.component';
import { BlackListeComponent } from './component/billing/black-liste/black-liste.component';
import { AchatComponent } from './component/billing/achat/achat.component';
import { AttenteComponent } from './component/CRM/attente/attente.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatbotComponent,
    AttenteComponent,
    ImportFichierComponent,
    DedoublonnageComponent,
    LectureCrmComponent,
    ReceptionNFComponent,
    CadreProblemComponent,
    ItemsComponent,
    TypeProblemComponent,
    BillingComponent,
    VoiceComponent,
    CrVoiBillingComponent,
    FicheMuettesComponent,
    DecalageFichAppelComponent,
    AgendaComponent,
    ChercherContactComponent,
    FicheAppelComponent,
    LoginComponent,
    ViceItemsComponent,
    ProblemSonComponent,
    CopurAppelComponent,
    ConnexionEchoueComponent,
    ItemsBbillingComponent,
    WhiteListeComponent,
    BlackListeComponent,
    AchatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
