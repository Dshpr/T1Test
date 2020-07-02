import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-fronier',
  templateUrl: './frontier.component.html',
  styleUrls: ['./frontier.component.css']
})




  
export class AccountComponent {
  private ourUrl = "https://frontiercodingtests.azurewebsites.net/api/accounts/getall";
  retVal: Account[];
  actives: Account[];
  over: Account[];
  inactive: Account[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  

    http.get(this.ourUrl).subscribe(result => {
      this.retVal = result as Account[];
      this.actives = this.retVal.filter(a => a.AccountStatusId === 0);
      this.over = this.retVal.filter(a => a.AccountStatusId === 1);
      this.inactive = this.retVal.filter(a => a.AccountStatusId === 2);
    }, error => console.error(error));
  }
}

export interface Account {
  "Id": number,
  "FirstName": string,
  "LastName": string,
  "Email": string,
  "PhoneNumber": string,
  "AmountDue": number,
  "PaymentDueDate": Date,
  "AccountStatusId": number
}




