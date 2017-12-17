import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import * as jstat from "jStat";
import * as math from "mathjs";

@Component({
  selector: 'page-tstudent',
  templateUrl: 'tstudent.html'
})
export class TstudentPage {
  public prueba;
  public visible: Boolean;
  public def_text : String ;
  public par_text: String;
  public res_text: String;
  public text3 = "";
  public text4 = "";
  public buttonDisabled = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {
    this.prueba = formBuilder.group({
      binx: ['', Validators.compose([Validators.required])],
      bindof: ['', Validators.compose([Validators.required])],
    });
    var text1 = "<p>Es una distribución para variables aleatorias Continuas, con soporte real. Gráficamente es similar a la campana de Gauss o modelo normal, sin embargo su diferencia recae en el peso de sus colas, se dice distribución de colas pesadas, en el sentido de acumular mayor probabilidad, que la normal, en estas. Para la determinación de probabilidades es necesario de la especificación del tamaño muestral o los grados de libertad ($\\nu$).</p>";
    this.def_text = text1;

    this.text3 = "<p>$x$</p>";
    this.text4 = "<p>$\\nu$: Grados de Libertad</p>";
    this.par_text = this.text4 + this.text3;
  }
  public lineChartData:Array<any>;
  
  public lineChartLabels:Array<any> = [-10,0,10];
  public lineChartOptions:Array<any> = [-10,0,10];

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.😎'
    },
    
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


  tCalc(){

    var x = Number(this.prueba.value.binx);
    var dof = Number(this.prueba.value.bindof);
    var t = NaN;

    if((x>=0) && !math.isNaN(x) && !math.isNaN(dof)){
      t = jstat.jStat.studentt.pdf(x, dof);

      if(!math.isNaN(t)){
        this.visible = true;
        this.res_text = "<p>$p(X\\leq" + x + ")=" + t.toFixed(3) + "$</p>";
        this.buttonDisabled = true;

        this.lineChartData = [
          {data: [x,dof,x, parseFloat(t.toFixed(3))]}
        ];

      }else{
        this.visible = false;
        let alert = this.alertCtrl.create({
          title: "Error de Cálculo",
          message: 'Revise los parámetros',
          buttons: ['OK']
        });
        alert.present();
      }
    }else{
      this.visible = false;
      let alert = this.alertCtrl.create({
        title: "Error de Cálculo",
        message: 'Debe ingresar un valor entre `0` y `1` inclusive',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  reset(){
    this.prueba.reset();
    this.buttonDisabled = false;
    this.visible = false;
    this.res_text = null;
  }



}
