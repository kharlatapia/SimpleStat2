
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import * as stat from "simple-statistics";
import * as math from "mathjs";

@Component({
  selector: 'page-normal',
  templateUrl: 'normal.html'
})
export class NormalPage {
  public prueba;
  public visible: Boolean;
  public def_text : String ;
  public par_text: String;
  public res_text: String;
  public text6: String;
  public text7: String;
  public text8: String;
  public buttonDisabled = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {
    this.prueba = formBuilder.group({
      media: ['', Validators.compose([Validators.required])],
      desvest: ['', Validators.compose([Validators.required])],
      x: ['', Validators.compose([Validators.required])]
    });
    //this.formulae="`sum_(i=1)^n i^3=((n(n+1))/2)^2`";
    var text1 = "<p>La distribución Normal es una de las distribuciones más importantes en estadística, debido a que muchos fenómenos se comportan bajo esta distribución.</p>";
    var text2 = "<p>La siguiente función de densidad de probabilidad define la distribución Normal Estándar:</p>";
    var text3 = "<p style='text-align: center;'> $ f(x) = \\frac{1}{\\sqrt{2\\pi}}e^\\frac{Z^2}{2} $ &nbsp;&nbsp; ; &nbsp;&nbsp; $-\\infty \\leqslant Z \\leqslant \\infty$</p>";
    var text4 = "<p>Para $P(X \\leq x) = P(Z \\leq z) = \\phi(z)$ en donde:</p>";
    var text5 = "<p style='text-align: center;'>$Z = \\frac{x - \\mu}{\\sigma}$</p>"
    var text51 = "<p style='text-align: center;'>$\\phi(z) = \\frac{1}{\\sqrt{2\\pi}}\\int_{-\\infty }^{z}e^{\\frac{-t^2}{2}}dt$</p>"

    this.def_text = text1 + text2 + text3 + text4 + text5 + text51;
    //`p(X = r) = \binom{n}{r}p^{r}(1-p)^{n-r}`//
    this.text6 = "<p>$\\mu$: Media de la distribución </p>";
    var text6 = "<p>$\\mu$: Media de la distribución </p>";

    var text7 = "<p>$\\sigma$: Desviación estándar de la distribución</p>";
    this.text7 = "<p>$\\sigma$: Desviación estándar de la distribución</p>";

    var text8 = "<p>$x$: $P(X \\leq x)$</p>";
    this.text8 = "<p>$x$: $P(X \\leq x)$</p>";
    
    this.par_text = text6 + text7 + text8;
    
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


  exponencialCalc(){
    var media = Number(this.prueba.value.media);
    var desvest = Number(this.prueba.value.desvest);
    var x = Number(this.prueba.value.x);

    if(!math.isNaN(media) && !math.isNaN(desvest) && !math.isNaN(x)){
      if(media == x){
        this.visible = true;
        this.res_text = "<p>$Z=0$</p><p>$P(X \\leq x) = \\phi(Z = 0) = 0.5$</p>";
        this.buttonDisabled = true;
      }else{
        var z = (x - media)/desvest;
        //var normal = (1/Math.sqrt(2 * Math.PI)) * Math.E(-((z^2)/2));
        var normal = stat.cumulativeStdNormalProbability(z);
        
        if(z && normal){
          this.visible = true;
          this.res_text = "<p>$Z=" + z.toFixed(3) + "$</p><p>$P(X \\leq x) = \\phi(Z = " + z.toFixed(3) + ") =" + normal.toFixed(3) + "$</p>";
          this.buttonDisabled = true;

    this.lineChartData = [
      {data: [media-desvest, media, media-desvest], label: 'x' },
      {data: [parseFloat(normal.toFixed(3))] , label:'Normal' }
    ];
        }else{
          this.visible = false;
          this.buttonDisabled = true;
          let alert = this.alertCtrl.create({
            title: "Error de Cálculo",
            message: 'Verifique que los parametrós ingresados sean coherentes para realizar el cálculo',
            buttons: ['OK']
          });
          alert.present();
        }
        
      }

    }else{
        this.visible = false;
        let alert = this.alertCtrl.create({
          title: "Error de Cálculo",
          message: 'Verifique que los parametrós ingresados sean coherentes para realizar el cálculo',
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