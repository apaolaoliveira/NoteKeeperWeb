import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class LoaderService {
  private isLoading = new BehaviorSubject<boolean>(false);

  public getLoadingStatus(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  public load(): void {
    this.isLoading.next(true);
  }

  public stop(): void {
    this.isLoading.next(false);
  }
}