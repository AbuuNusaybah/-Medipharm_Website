import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './shared-pages/landing/landing.component';
import { NotFoundComponent } from './shared-pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { MissionComponent } from './pages/mission/mission.component';
import { VisionComponent } from './pages/vision/vision.component';
import { CoreBusinessComponent } from './pages/core-business/core-business.component';
import { HomeComponent } from './pages/home/home.component';
import { LatestNewsComponent } from './shared-pages/landing/latest-news/latest-news.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { LoginComponent } from './cms/auth/login/login.component';
import { TemporalPageComponent } from './temporal-page/temporal-page.component';
import { TemporalTwoComponent } from './temporal-two/temporal-two.component';
import { VideoContentComponent } from './shared-pages/landing/video-content/video-content.component';

const routes: Routes = [
  // Redirect root path to Landing Page
  // { path: '', redirectTo: '/temporal-two', pathMatch: 'full' },
  // { path: '', redirectTo: '/temporal', pathMatch: 'full' },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  // Define the Landing page route
  { path: 'landing', component: LandingComponent },
  // Define any other known routes here below
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: OurServicesComponent },
  { path: 'core-business', component: CoreBusinessComponent },
  { path: 'latest-news', component: LatestNewsComponent },
  { path: 'temporal', component: TemporalPageComponent },
  { path: 'temporal-two', component: TemporalTwoComponent },
  { path: 'news', component: LatestNewsComponent },
  {path: 'video-content', component: VideoContentComponent},
  // Wildcard route to handle undefined paths and redirect to Not Found page
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
