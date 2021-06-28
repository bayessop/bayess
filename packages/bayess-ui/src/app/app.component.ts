import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type Wallet = {
  address: string;
  private_key: string;
  public_key: string;
}

@Component({ selector: 'bayess-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss'] })
export class AppComponent implements OnInit {
    totalAngularPackages: any;
    wallet?: Wallet;

    constructor(private http: HttpClient) { }

    ngOnInit() {      
        // Simple GET request with response type <any>
        this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
            this.totalAngularPackages = data.total;
        })
    }

    generateWallet() {
      this.http.post<any>('http://localhost:8080/api/v1/wallet', {}).subscribe(data => {
        console.log(data)
        this.wallet = data;
      })
    }
}