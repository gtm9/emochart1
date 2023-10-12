import { Component, Input } from '@angular/core';
import { IYoutubeSearchItem } from '../../models/youtube-search-list.model';

@Component({
  selector: 'app-video-grid',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.css']
})
export class VideoGridComponent {
  @Input() title!: string;
  @Input() cardDetails: { video: IYoutubeSearchItem; channel: IYoutubeSearchItem | undefined; }[] = [];

  video = [];
}
