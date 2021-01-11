import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Client } from 'src/app/types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: string='';
  clients: Client[] = [];
  constructor(private route:ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.dataService.getClients(params.userId).subscribe((data)=>{
          console.log(data);
          this.clients=data.clients})
      }
    )
  }
  

}
