import { Component, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public captchaPassed = false;
  private captchaResponse: string;

  constructor(private http: HttpClient, private zone: NgZone) { }

  captchaResolved(response: string): void {

    this.zone.run(() => {
      this.captchaPassed = true;
      this.captchaResponse = response;
    });

  }

  sendForm(): void {

    const data = {
      captchaResponse: this.captchaResponse
    };

    this.http.post('http://localhost:8100/home', data).subscribe(res => {
      console.log(res);
    });

  }

}
