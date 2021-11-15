import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { newsMock } from '../mocks/news.mocks'; 
import { Observable,of } from 'rxjs';
  
@Injectable()
export class NewsService {

  constructor() {}

  public getData(): Observable<NewsItemDTO[]> {
    return of(newsMock);
  }

}
