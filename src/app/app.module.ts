import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { HomeComponent } from './home/home.component';
import { ChartBaseComponent } from './charts/chart-base/chart-base.component';
import { EmochartComponent } from './charts/emochart/emochart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import { SidebarComponent } from './main-grid/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SubscriptionsComponent } from './main-grid/pages/subscriptions/subscriptions.component';
import { LikedVideosComponent } from './main-grid/pages/liked-videos/liked-videos.component';
import { EmographComponent } from './main-grid/pages/emograph/emograph.component';
import { FeaturedComponent } from './main-grid/pages/featured/featured.component';
import { VideoCardComponent } from './main-grid/pages/video-card/video-card.component';
import { VideoGridComponent } from './main-grid/pages/video-grid/video-grid.component';
import {MatChipsModule} from '@angular/material/chips';
import { EmotionDetailsComponent } from './main-grid/pages/emotion-details/emotion-details.component';
import { AnalyticsCanvasComponent } from './home/analytics-canvas/analytics-canvas.component';
import { DefaultModule } from './home/analytics-canvas/layouts/default/default.module';
import { SharedModule } from './home/analytics-canvas/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    DoughnutChartComponent,
    HomeComponent,
    ChartBaseComponent,
    EmochartComponent,
    SidebarComponent,
    SubscriptionsComponent,
    LikedVideosComponent,
    EmographComponent,
    FeaturedComponent,
    VideoCardComponent,
    VideoGridComponent,
    EmotionDetailsComponent,
    AnalyticsCanvasComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatChipsModule,
    DefaultModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
