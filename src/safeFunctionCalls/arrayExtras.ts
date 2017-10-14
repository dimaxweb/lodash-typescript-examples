import * as  lodash  from "lodash";

export class ArrayExtrasExample
{
  filterWithLodash(param :any ,functionName:Function){
    return lodash.filter(param,functionName);
  }
  filterWithoutLodash(param:any, functionName:Function){
    return param.filter(functionName);
  }

  mapWithLodash(param :any ,functionName:Function){
    return lodash.map(param,functionName);
  }
  mapWithoutLodash(param:any, functionName:Function){
    return param.map(functionName);
  }
}
