import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface  Emotion {
    emotion: string;
    color: string;
    value: number;
}

export interface EmotionData {
  count: [number];
  emotions: [Emotion];
  maxEmo: [number];
}

@Injectable({
  providedIn: 'root'
})
export class EmotionDataService {

  title = 'json-read-example';
  emotionData: any;
  url: string = '../../../assets/emoChart.json';

  constructor(private http: HttpClient) {}

  public getEmotionData(): Observable<EmotionData> {
    return this.http.get<EmotionData>(this.url);
  }
}
