import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts:any[] = [
    { id:1 , img:'https://myambergroup.com/assets/img/jamaica-contact.png' , adrs1:'Main Office Suite B11,Pinnacle Pointe,' , adrs2:'53 Lady Musgrave Rd, Kingston 10,' , country:'Jamaica', phn:'+1 876 616 7661'},

    { id:2 , img:'https://myambergroup.com/assets/img/coimbatore-contact.png' , adrs1:'Branch Office LGB Nagar 1st Street, Ramakrishnapuram, Sivanandhapuram,' , adrs2:'Coimbatore, TamilNadu, 641035,' , country:'India' , phn:'+91 96773 05900'},

    { id:3 , img:'https://myambergroup.com/assets/img/southafrica-contact.png' , adrs1:'Branch Office 4 Daventry Road, Kaaimans Building 5th Floor,' , adrs2:'Lynnwood BridgeOffice Park, Lynnwood Manor, 0081 South Africa,' , country:' South Africa',
    phn:'  +27 12 483 8600'}
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
