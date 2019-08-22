import { Component, OnInit, AfterViewChecked, Input, Output, EventEmitter } from '@angular/core';
import { ProducerService } from 'src/app/services/producer.service';
import Swal from 'sweetalert2';

declare let paypal: any;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit,AfterViewChecked {
  @Input() amount: number;
  @Input() account: String;

  @Output() isPayment: boolean;
  @Output() notify = new EventEmitter();


  isEnabled: boolean = false;
  addScript: boolean = false;
  private paypalConfig: any;

  constructor(private producerService: ProducerService) { }

  ngOnInit() {

    this.paypalConfig ={
      env: 'sandbox',
      client: {
        sandbox: null,//producer account id
        production: '<production-key here>'
      },
      commit: true,
      payment: (data, actions) =>{
        return actions.payment.create({
          payment: {
            transactions: [
              { amount: { total: this.amount, currency: 'USD'} }
            ]
          }
        });
      },
      onAuthorize: (data, actions) => {
        return actions.payment.execute().then((payment)=>{
            this.notify.emit("compra realizada");
        });
      }
    };

    this.getIdPaypal();

  }

  getIdPaypal(){
    this.producerService.getById(this.account)
      .then(res => {
        let account_producer = res['item'].account;
        this.paypalConfig.client.sandbox = account_producer.id;
        this.isEnabled = true;
      });

  }

  ngAfterViewChecked(): void{
    if(!this.addScript && this.isEnabled){
      this.addPaypalScript().then(()=>{
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
      })
    }
  }

  addPaypalScript(){
    this.addScript = true;
    return new Promise( (resolve, reject) =>{
      let scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);

    })
  }



}
