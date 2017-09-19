import {IModelresultData } from './imodelresult-data';
import { IModelInput } from "app/imodel-input";

// Agreed interface
export interface IModelresultActions {
    saveModel(data: IModelInput );
    getModelList(userId: number ): IModelresultData[]
}
