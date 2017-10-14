import * as _ from "lodash";

export class ChainExample {

  private complexObject: object;

  constructor(complexObject: object) {
    this.complexObject = complexObject;
  }

  public getPropertyAndRemoveValues (properties : String [], reject:Function){
    return _.chain(this.complexObject)
      .get(properties)
      .reject(reject)
      .thru((adresses:object[])=>{
        return adresses[0]
      })
      .value();
  }

  public getMapFilterAndSort (path : String, map : Function, filter:Function, sort :Function){
    return _.chain(this.complexObject)
      .get(path)
      .value();
  }
}






