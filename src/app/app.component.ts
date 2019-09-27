import { Component } from '@angular/core';

//import { UpperCasePipe } from '@angular/common';

import { 
  UpperCasePipe, 
  LowerCasePipe, 
  SlicePipe,
  DecimalPipe,
  PercentPipe,
  DatePipe, 
  CurrencyPipe,
} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    UpperCasePipe,
    LowerCasePipe,
    SlicePipe, 
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
    DatePipe,
    
  ]
})

export class AppComponent {

  name = "Rito Eduardo García Lara is OwNer tHis siTe";
  isHide = true;
  valueInput = "";

  title = 'pipes';
  pipes = [];
  items = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  fechaSrc = '2018-02-28';
  fechaDate = new Date(2018,5,28);
  video = "mOeSfOJrUIk";

  constructor( 
    private upperCasePipe: UpperCasePipe,
    private lowerCasePipe: LowerCasePipe,
    private slicePipe: SlicePipe,
    private decimalPipe: DecimalPipe,
    private percentPipe: PercentPipe,
    private currencyPipe: CurrencyPipe
  ){
    
    this.init();
  }

  saveInput(src){
    if( this.isHide == true){
      this.valueInput = src;
    }
  }

  init(){

    
    var _self = this;
    //UpperCasePipe
    this.pipes.push({
      name: "Example",
      type: "uppercase",
      fnPipe():string{
        return this.name.toUpperCase();
      },
      fnPipeNative():string{
        return _self.upperCasePipe.transform(this.name);
      }
    });
    
    //LoweCase
    this.pipes.push({
      name: "Example",
      type: "lowercase",
      fnPipe():string{
        return this.name.toLowerCase();
      },
      fnPipeNative():string{
        return _self.lowerCasePipe.transform(this.name);
      }
    });

    //Slice
    let startSlice = 0;
    let endSlice = 4;

    this.pipes.push({
      start: startSlice,
      end: endSlice,
      name: "Example",
      type: `slice:${startSlice}:${endSlice}`,
      fnPipeNative():string{
        return _self.slicePipe.transform( <string>this.name ,this.start, this.end );
      },
      fnPipe():string{
        return this.name.slice(this.start,this.end);
      },
    });

    //Decimal Pipe
    this.pipes.push({
      name: 3.1416,
      type: 'decimal',
      fnPipeNative():string{
        return _self.decimalPipe.transform(this.name)
      },
      fnPipe():string{
        return this.name.slice(this.start,this.end);
      },
    });

    //Decimal Pipe Format

    let format = "1.0-2";

    this.pipes.push({
      name: 3.141548977,
      type: `decimal:'${format}'`,
      fnPipeNative():string{
        return _self.decimalPipe.transform(this.name, format )
      },
      fnPipe():string{
        return this.name.slice(this.start,this.end);
      },
    });

    //Porcental Pipe

    this.pipes.push({
      name: 0.2345,
      type: "percent",
      fnPipeNative():string{
        return _self.percentPipe.transform(this.name)
      },
      fnPipe():string{
        return this.name.slice(this.start,this.end);
      },
    })

     //Porcental Pipe

     let formatPercent = "2.2-2"

     this.pipes.push({
       name: 0.2345,
       type: `percent:'${formatPercent}'`,
       fnPipeNative():string{
         return _self.percentPipe.transform(this.name, formatPercent )
       },
       fnPipe():string{
         return this.name.slice(this.start,this.end);
       },
     })
 
     //Currency Pipe
     this.pipes.push({
      name: 2564.345,
      type: "currency",
      fnPipeNative():string{
        return _self.currencyPipe.transform(this.name)
      },
      fnPipe():string{
        return this.name.slice(this.start,this.end);
      },
    })

    //Currency Pipe nationality

    let formatISO = "EUR";
    
    this.pipes.push({
      name: 2564.4557787,
      type: `currency:${formatISO}:true:${format}`,
      fnPipeNative():string{
        return _self.currencyPipe.transform(this.name,formatISO,true,format)
      }
    })

    //Number and Currency Pipe nationality
    
    this.pipes.push({
      name: 2564.4557787,
      type: `currency:${formatISO}:true:${format}`,
      fnPipeNative():string{
        //let num = _self.num.
        return _self.currencyPipe.transform(this.name,formatISO,true,format)
      }
    })

  }

  valorPromesa = new Promise( (resolve,reject) =>{
    setTimeout( ()=> resolve("Llego la data") , 3000 );
  });

  public json = {
    "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
    "version": 1,
    "newProjectRoot": "projects",
    "projects": {
        "pipes": {
            "projectType": "application",
            "schematics": {},
            "root": "",
            "sourceRoot": "src",
            "prefix": "app",
            "architect": {
                "build": {
                    "builder": "@angular-devkit/build-angular:browser",
                    "options": {
                        "outputPath": "dist/pipes",
                        "index": "src/index.html",
                        "main": "src/main.ts",
                        "polyfills": "src/polyfills.ts",
                        "tsConfig": "tsconfig.app.json",
                        "aot": false,
                        "assets": [
                            "src/favicon.ico",
                            "src/assets"
                        ],
                        "styles": [
                            "src/styles.css",
                            "node_modules/bootstrap/dist/css/bootstrap.min.css"
                        ],
                        "scripts": [
                            "node_modules/jquery/dist/jquery.slim.js",
                            "node_modules/popper.js/dist/umd/popper.min.js",
                            "node_modules/bootstrap/dist/js/bootstrap.min.js"
                        ]
                    },
                    "configurations": {
                        "production": {
                            "fileReplacements": [{
                                "replace": "src/environments/environment.ts",
                                "with": "src/environments/environment.prod.ts"
                            }],
                            "optimization": true,
                            "outputHashing": "all",
                            "sourceMap": false,
                            "extractCss": true,
                            "namedChunks": false,
                            "aot": true,
                            "extractLicenses": true,
                            "vendorChunk": false,
                            "buildOptimizer": true,
                            "budgets": [{
                                    "type": "initial",
                                    "maximumWarning": "2mb",
                                    "maximumError": "5mb"
                                },
                                {
                                    "type": "anyComponentStyle",
                                    "maximumWarning": "6kb",
                                    "maximumError": "10kb"
                                }
                            ]
                        }
                    }
                },
                "serve": {
                    "builder": "@angular-devkit/build-angular:dev-server",
                    "options": {
                        "browserTarget": "pipes:build"
                    },
                    "configurations": {
                        "production": {
                            "browserTarget": "pipes:build:production"
                        }
                    }
                },
                "extract-i18n": {
                    "builder": "@angular-devkit/build-angular:extract-i18n",
                    "options": {
                        "browserTarget": "pipes:build"
                    }
                },
                "test": {
                    "builder": "@angular-devkit/build-angular:karma",
                    "options": {
                        "main": "src/test.ts",
                        "polyfills": "src/polyfills.ts",
                        "tsConfig": "tsconfig.spec.json",
                        "karmaConfig": "karma.conf.js",
                        "assets": [
                            "src/favicon.ico",
                            "src/assets"
                        ],
                        "styles": [
                            "src/styles.css"
                        ],
                        "scripts": []
                    }
                },
                "lint": {
                    "builder": "@angular-devkit/build-angular:tslint",
                    "options": {
                        "tsConfig": [
                            "tsconfig.app.json",
                            "tsconfig.spec.json",
                            "e2e/tsconfig.json"
                        ],
                        "exclude": [
                            "**/node_modules/**"
                        ]
                    }
                },
                "e2e": {
                    "builder": "@angular-devkit/build-angular:protractor",
                    "options": {
                        "protractorConfig": "e2e/protractor.conf.js",
                        "devServerTarget": "pipes:serve"
                    },
                    "configurations": {
                        "production": {
                            "devServerTarget": "pipes:serve:production"
                        }
                    }
                }
            }
        }
    },
    "defaultProject": "pipes"
}

}
