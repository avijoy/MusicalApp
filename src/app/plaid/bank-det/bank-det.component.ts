import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BankDetails } from '../bank-details';

@Component({
  selector: 'app-bank-det',
  templateUrl: './bank-det.component.html',
  styleUrls: ['./bank-det.component.css']
})
export class BankDetComponent implements OnInit {

  constructor() { 
    this.select = new EventEmitter();
  }
  value:String
  showflag : boolean;
  @Output() select : EventEmitter<String>;
  //@Output select: EventEmitter<>;
  
 // bankdets : String[] = ["BankName","BankDet","BankName","Bankder"]
 //bankdets : BankDetails[] 
 @Input() bankdets= [new BankDetails("HDFC","123456"),new BankDetails("Axis","1156456")];
  ngOnInit(): void {
    this.showflag = false
  }
  showDet(value){
    /* if(this.showflag === true)
       this.showflag=false
     else  
       this.showflag=true*/
       console.log(value)
      // this.select.emit(value)
      this.value=value
   }
}
