import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NoteKeeperWeb';
  isLoading$?: Observable<boolean>;
  
  constructor(
    private loaderService: LoaderService,
    private router: Router
  ){
    this.router.events.subscribe((event: Event) =>{
      this.updateLoadingStatus(event);
    })
  }

  ngOnInit(): void {
    this.isLoading$ = this.loaderService.getLoadingStatus();
  }

  updateLoadingStatus(event: Event): void {
    if(event instanceof NavigationStart) this.loaderService.load();

    else if(
      event instanceof NavigationEnd ||
      event instanceof NavigationCancel ||
      event instanceof NavigationError
    ) this.loaderService.stop();
  }
}
