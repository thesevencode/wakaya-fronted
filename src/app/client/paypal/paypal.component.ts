import { Component, OnInit, AfterViewChecked, Input, Output, EventEmitter } from '@angular/core';
import { ProducerService } from 'src/app/services/producer.service';
import Swal from 'sweetalert2';
import {UserService} from '../../services/user.service';

declare let paypal: any;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit,AfterViewChecked {
  @Input() amount: any;
  @Input() account: String;
  @Input() idProduct: String

  @Output() isPayment: boolean;
  @Output() notify = new EventEmitter();


  isEnabled: boolean = false;
  addScript: boolean = false;
  private paypalConfig: any;

  constructor(private producerService: ProducerService, private userService: UserService) { }

  ngOnInit() {

    console.log("la cantidad que queremos pagar",this.amount);

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

            let user = this.userService._getUserData();
            let data = {
              amount: this.amount,
              user : user._id ,
              _idProducto : this.idProduct
            }

            console.log("los datos ...", data);

            this.producerService.saveShop(data)
            .then(res => {
              console.log("lo que esta devolviendo");
            });
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

        console.log("asjdhiasn",this.amount);
      });
  }

  ngAfterViewChecked(): void{
    if(!this.addScript && this.isEnabled){
      this.addPaypalScript().then(()=>{
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        console.log("kdkajshdajd",this.amount);
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

      console.log("asdasdasd",this.amount);

    })
  }
}
