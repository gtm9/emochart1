import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { HomeComponent } from './home/home.component';
import { SubscriptionsComponent } from './main-grid/pages/subscriptions/subscriptions.component';
import { LikedVideosComponent } from './main-grid/pages/liked-videos/liked-videos.component';
import { EmographComponent } from './main-grid/pages/emograph/emograph.component';
import { FeaturedComponent } from './main-grid/pages/featured/featured.component';
import { EmotionDetailsComponent } from './main-grid/pages/emotion-details/emotion-details.component';
import { DashboardComponent } from './home/analytics-canvas/modules/dashboard/dashboard.component';
import { DefaultComponent } from './home/analytics-canvas/layouts/default/default.component';
import { PostsComponent } from './home/analytics-canvas/modules/posts/posts.component';
import { BarRaceComponent } from './home/analytics-canvas/shared/widget/bar-race/bar-race.component';

// const routes: Routes = [
//   {
//     path: "", component: HomeComponent,
//     children: [
//       {path: "featured", component: FeaturedComponent,},
//       {path: "subscriptions", component: SubscriptionsComponent},
//       {path: "liked-videos", component: LikedVideosComponent},
//       {path: "emograph", component: EmographComponent},
//       {path: "emodetails", component: EmotionDetailsComponent},
//       {path: "bar", component: BarChartComponent},
//     ]
//   },
//   {path: "bar", component: BarChartComponent},
//   {path: "line", component: LineChartComponent},
//   {path: "pie", component: PieChartComponent},
//   {path: "doughnut", component: DoughnutChartComponent},
// ];

const routes: Routes = [
  {
    path: "", component: DefaultComponent,
  children: [
    {path: "featured", component: FeaturedComponent,},
    {path: "subscriptions", component: SubscriptionsComponent},
    {path: "liked-videos", component: LikedVideosComponent},
    {path: "emograph", component: EmographComponent},
    {path: "emodetails", component: EmotionDetailsComponent},
    {path: "bar", component: BarChartComponent},
    {path: 'dashboard',component: DashboardComponent,},
    {path: 'posts',component: PostsComponent},
    {path: 'barhor',component: BarRaceComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
