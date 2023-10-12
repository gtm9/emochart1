import { Component } from '@angular/core';
import { Observable, forkJoin, of, switchMap } from 'rxjs';
import { VideoService } from 'src/app/services/video-service.service';
import { IYoutubeSearchItem, IYoutubeSearchResult } from '../../models/youtube-search-list.model';
import { createCardData } from '../../utils/helper.util';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent  {

  popularVideo!: Observable<IYoutubeSearchResult>;
  items: IYoutubeSearchItem[] = [];
  channelDetails: IYoutubeSearchItem[] = [];
  cardDetails: { video: IYoutubeSearchItem; channel: IYoutubeSearchItem | undefined; }[] = [];
  
  constructor(private videoService: VideoService) {
  }

  ngOnInit() {
    // this.videoService.getMostPopularVideos().subscribe(response => {
    //   if (response.items !== undefined) {
    //     this.items = response.items;
    //   }
    //   console.log(this.items);
    // });

    // this.videoService.getMostPopularVideos().pipe(
    //   switchMap((response) => {
    //     if (response.items !== undefined) {
    //       this.items = response.items;
    //     }
    //     let ids = this.makeChannelIds(this.items);
    //     console.log('ids',ids);
    //     return this.videoService.getChannel(ids);
    //   })
    // ).subscribe(response => {
    //     if (response.items !== undefined) {
    //       this.channelDetails = response.items;
    //       this.cardDetails = createCardData(this.items, this.channelDetails);
    //     }
    //     console.log(response);
    //     console.log(this.cardDetails);
    //   }
    // )
  }

  makeChannelIds(items: IYoutubeSearchItem[]) {
    let channelIds = "";
    const len = items.length;
    for (let i=0;i<len;i++) {
      channelIds = channelIds + items[i]['snippet']['channelId'];
      if (i < len-1) {
        channelIds = channelIds + ",";
      }
    }
    return channelIds;
  }
}
