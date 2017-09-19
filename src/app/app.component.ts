import { Component, OnInit } from '@angular/core';
import { IModelresultData } from "app/imodelresult-data";
import { IModelresultActions } from "app/imodelresult-actions";

import {FormControl, Validators} from '@angular/forms';
import { IModelInput } from "app/imodel-input";


class ModelresultData implements  IModelresultData
{
    userId: number;
    refDate: Date;
    bench1: number;
    bench2: number;
}



// This class runs the model and returns a list of model runs
class ModelresultActions implements IModelresultActions
{
    list: Array<ModelresultData>;

    constructor()
    {
      this.list = new Array<ModelresultData>();
    }

    saveModel(data: IModelInput )
    { 
        let cal1 = data.retention * data.limit * data.exnum * 10;
        let cal2 = data.retention * data.limit * data.exnum * 15;

        let dat: ModelresultData = new ModelresultData ();
        dat.refDate = new Date();
        dat.bench1 = cal1;
        dat.bench2 = cal2;

        this.list.push(dat);

    }

    getModelList(userId?: number ): ModelresultData[] 
    { 
      return this.list;
    }
}
   
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
  
  retention: number;
  limit: number;
  exnum: number;

  data: ModelresultData;
  modelActions: ModelresultActions;
  list: Array<ModelresultData>;

  constructor() {}

 ngOnInit() {

     this.modelActions = new ModelresultActions();
     this.list = new Array<ModelresultData>();
   
     this.exnum = 1;
  }

  calculate()
  {
    let data = new ModelresultData();
 
    let modInput: IModelInput = {
                                  limit: this.limit,
                                  retention:this.retention, 
                                  exnum: this.exnum
                                };

    this.modelActions.saveModel(modInput);

    this.list = this.modelActions.getModelList();


  
}

}

