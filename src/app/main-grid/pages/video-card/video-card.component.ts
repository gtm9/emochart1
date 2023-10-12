import { Component, Input } from '@angular/core';
import { IYoutubeSearchItem } from '../../models/youtube-search-list.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent {
  @Input() cardDetail?: { video: IYoutubeSearchItem; channel: IYoutubeSearchItem | undefined; };
  profilePic: string = "https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-464163411.jpg";
  thumbnailUrl: string = "https://material.angular.io/assets/img/examples/shiba2.jpg";
  videoTitle: string = "";
  channelTitle: string | undefined = "";

  ngOnInit(){
    const video = this.cardDetail?.video.snippet
    const channel = this.cardDetail?.channel?.snippet
    if (video !== undefined) {
      this.thumbnailUrl = video.thumbnails.high.url;
      this.videoTitle = video.title;
    }
    if (channel !== undefined) {
      this.profilePic = channel.thumbnails.high.url;
      this.channelTitle = channel.channelTitle;
    }
    
  }
}
