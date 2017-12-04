import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';


import * as stat from "simple-statistics";
import * as math from "mathjs";

@Component({
  selector: 'page-bernoulli',
  templateUrl: 'bernoulli.html'
})
export class BernoulliPage {
  public prueba;
  public bernoulli;
  //public formulae : String ;
  public def_text : String ;
  public par_text: String;
  public res_text: String;
  public visible: Boolean;
  public buttonDisabled = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {
    this.prueba = formBuilder.group({
      p: ['', Validators.compose([Validators.required])]
    });

    //this.formulae="`sum_(i=1)^n i^3=((n(n+1))/2)^2`";
    this.def_text="<p>La distribución Bernoulli, cuyo nombre se debe al científico Suizo Jakob Bernoulli, es un modelo de probabilidad para una variable aleatoria discreta y de característica dicotómica.</p><p>Es una distribución basal para la distribución Binomial. Caracteriza experimentos que pueden ser asociados al experimento de lanzar una moneda, en la cual hay solo dos opciones posibles. Para la determinación de probabilidades en un punto x, ya sea distribución o cuantía, es necesario especificar un parámetro, que denominaremos p y que representa la probabilidad de éxito o de obtención del resultado de interés en un experimento dicotómico. En este contexto se dirá que la variable aleatoria de estudio se distribuye Bernoulli de parámetro $p$.</p><p style='text-align: center;'>$X \\sim  Ber(p)$</p>";
    this.par_text = "$p$: Representa una probabilidad de éxito, por tanto es un valor entre $0$ y $1$, ambos incluidos.";
  }

  public lineChartData:Array<any> = [
    {data: [0.3,0.9], label: 'Bernoulli'},
   
  ];
  public lineChartLabels:Array<any> = [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1];
  public lineChartOptions:Array<any> = [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1];

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }
  bernoulliCalc(){
    var strToInt = Number(this.prueba.value.p);
    //strToArr.stringByTrimmingCharactersInSet(NSCharacterSet.whitespaceCharacterSet());
    this.bernoulli = stat.bernoulliDistribution(strToInt);

    if(math.isNaN(strToInt)){
      let alert = this.alertCtrl.create({
        title: "Error de Cálculo",
        message: 'Debe ingresar un valor entre 0 y 1 inclusive',
        buttons: ['OK']
      });
      alert.present();
    }else{
      this.visible = true;
      this.res_text = "<p>$p: " + parseFloat(this.bernoulli[1]).toFixed(3) + "$</p><p>$q: " +  parseFloat(this.bernoulli[0]).toFixed(3) + "$</p>";
      this.buttonDisabled = true;
    }

  }

}

