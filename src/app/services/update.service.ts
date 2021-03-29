import {Injectable} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private updateEvent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private swUpdate: SwUpdate) {
    this.swUpdate.available.subscribe(evt => {
      this.updateEvent.next(true);
    });
  }

  public get updateEvent$(): Observable<boolean> {
    return this.updateEvent.asObservable().pipe(
      filter(ev => ev === true)
    );
  }

  public resetUpdateEvent(): void {
    this.updateEvent.next(false);
  }
}
