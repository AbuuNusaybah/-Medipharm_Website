import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { FooterComponent } from './shared-pages/footer/footer.component';
import { HeaderComponent } from './shared-pages/header/header.component';
import { LandingComponent } from './shared-pages/landing/landing.component';
import { NotFoundComponent } from './shared-pages/not-found/not-found.component';
import { LatestNewsComponent } from './shared-pages/landing/latest-news/latest-news.component';
import { TopNavBarComponent } from './shared-pages/header/top-nav-bar/top-nav-bar.component';
import { OurTeamComponent } from './shared-pages/landing/our-team/our-team.component';
import { WelcomeNoteComponent } from './pages/welcome-note/welcome-note.component';
import { VisionComponent } from './pages/vision/vision.component';
import { MissionComponent } from './pages/mission/mission.component';
import { TemporalPageComponent } from './temporal-page/temporal-page.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { LocationActivitiesComponent } from './shared-pages/landing/location-activities/location-activities.component';
import { MapComponent } from './shared-pages/landing/map/map.component';
import { CoreBusinessComponent } from './pages/core-business/core-business.component';
import { MovingImagingComponent } from './shared-pages/moving-imaging/moving-imaging.component';
import { TemporalTwoComponent } from './temporal-two/temporal-two.component';
import { LoginComponent } from './cms/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoContentComponent } from './shared-pages/landing/video-content/video-content.component';
import { CmsFooterComponent } from './cms/pages/shared/cms-footer/cms-footer.component';
import { CmsHeaderComponent } from './cms/pages/shared/cms-header/cms-header.component';
import { CmsSidenavComponent } from './cms/pages/shared/cms-sidenav/cms-sidenav.component';
import { CmsTopnavComponent } from './cms/pages/shared/cms-topnav/cms-topnav.component';
import { CmsLandingComponent } from './cms/pages/cms-landing/cms-landing.component';
import { CmsHomeComponent } from './cms/pages/cms-home/cms-home.component';
import { CmsPagesComponent } from './cms/pages/cms-pages/cms-pages.component';
import { CmsImagesComponent } from './cms/pages/cms-images/cms-images.component';
import { CmsInfoComponent } from './cms/pages/cms-info/cms-info.component';
import { CmsSettingsComponent } from './cms/pages/cms-settings/cms-settings.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    FooterComponent,
    HeaderComponent,
    LandingComponent,
    NotFoundComponent,
    LatestNewsComponent,
    TopNavBarComponent,
    OurTeamComponent,
    WelcomeNoteComponent,
    VisionComponent,
    MissionComponent,
    TemporalPageComponent,
    OurServicesComponent,
    LocationActivitiesComponent,
    MapComponent,
    CoreBusinessComponent,
    LoginComponent,
    MovingImagingComponent,
    TemporalTwoComponent,
    VideoContentComponent,
    CmsFooterComponent,
    CmsHeaderComponent,
    CmsSidenavComponent,
    CmsTopnavComponent,
    CmsLandingComponent,
    CmsHomeComponent,
    CmsPagesComponent,
    CmsImagesComponent,
    CmsInfoComponent,
    CmsSettingsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule, // Add MatIconModule here
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
