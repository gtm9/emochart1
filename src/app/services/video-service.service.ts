import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IYoutubeSearchResult } from '../main-grid/models/youtube-search-list.model';
import { IYoutubeSearchParams } from '../main-grid/models/youtube.service.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private httpClient: HttpClient) { }

  public getMostPopularVideos(): Observable<IYoutubeSearchResult> {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=`;
    return this.httpClient.get<IYoutubeSearchResult>(url);
  }

  public getChannel(ids: string): Observable<IYoutubeSearchResult> {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=`+ids+`&key=`;
    return this.httpClient.get<IYoutubeSearchResult>(url);
  }
}
