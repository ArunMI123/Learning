import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  constructor(private commonService: CommonService) {
   }

  ngOnInit() {
      this.commonService.getData('/test').subscribe((res: any) => {
        console.log(res);
      });
  }

}
