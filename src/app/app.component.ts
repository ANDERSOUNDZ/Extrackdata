import { Component, OnInit } from '@angular/core';
import { Puerta, Rueda, Motor, Auto } from './model/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  ngOnInit() {
    
    var puerta1 = new Puerta();
    puerta1.tamaño = "1.50 cm";
    puerta1.ventana = "Polarizado";
    puerta1.tipoMaterial = "Aluminio";

    var puerta2 = new Puerta();
    puerta2.tamaño = "1.60 cm";
    puerta2.ventana = "Normal";
    puerta2.tipoMaterial = "Metalico";

    var rueda = new Rueda();
    rueda.color = "negro";
    rueda.Tamaños = "185 Centimetros de diametro.";
    rueda.Neumático = "cuerdas de acero conectadas al caucho";

    var motor = new Motor();
    motor.caballosDeFuerza = 380;
    motor.velMax = 280;
    
    var auto = new Auto();
    auto.puertas = [puerta1,puerta2];
    
    console.log(auto.puertas[0].tamaño);
    console.log(auto.puertas[0].tipoMaterial);
    console.log(auto.puertas[0].ventana);

    console.log(auto.puertas[1].tamaño);
    console.log(auto.puertas[1].tipoMaterial);
    console.log(auto.puertas[1].ventana);
    
    //auto.puertas = puerta;
    auto.ruedas = rueda;
    auto.motores = motor;
    auto.modelo = "KIA"
    console.log(auto.modelo)
    
    /*console.log(auto.puertas.ventana);
    console.log(auto.puertas.tipoMaterial);*/
    console.log(auto.ruedas.Neumático);
    console.log(auto.ruedas.Tamaños);
    console.log(auto.ruedas.color);
    console.log(auto.motores.caballosDeFuerza);
    console.log(auto.motores.velMax);
    console.log(auto);    
    
    
    
    //console.log('Modelo de Auto: '+auto.modelo,'Caracteristicas:'+puerta.tamaño+puerta.tipoMaterial+puerta.ventana);

    //console.log(JSON.stringify(auto));

    //console.log(auto.puertas);

    //console.log(auto.ruedas);

    //console.log(auto.motores);

    //console.log(auto);

    //console.log(puerta);    

    //console.log(puerta.tamaño); 

    //console.log(puerta.ventana); 

    //console.log(puerta.tipoMaterial);

    //console.log(rueda); 

    //console.log(rueda.color);

    //console.log(rueda.Tamaños);

    //console.log(rueda.Neumático);

    //console.log(rueda); 

    //console.log(motor);

    //console.log(motor.caballosDeFuerza);

    //console.log(motor.velMax);

    //console.log(motor);



    
    //Hacer funcionar:
    //auto.puertas.tamaño = puerta.tamaño;
    //auto.puertas.tipoMaterial = puerta.tipoMaterial;
    //auto.puertas.ventana = puerta.ventana;

    //auto.ruedas.color = rueda.color;
    //auto.ruedas.Tamaños = rueda.Tamaños;
    //auto.ruedas.Neumático = rueda.Neumático;
    //auto.motores.caballosDeFuerza = motor.caballosDeFuerza;
    //auto.motores.velMax; 

  }
    
}


/*

var puerta = new Puerta();
    console.log(puerta);
    puerta.tamaño = item;
    puerta.ventana = item;
    console.log(puerta);

    var rueda = new Rueda();
    console.log(rueda);
    rueda.color = item;
    console.log(rueda);

    var motor = new Motor();
    console.log(motor);
    motor.caballosDeFuerza = item2;
    console.log(motor);


*/