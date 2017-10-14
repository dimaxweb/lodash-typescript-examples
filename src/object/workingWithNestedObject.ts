import * as  lodash  from "lodash";

export class WorkingWithNestedObjectExample{

  get(param : object,path:string,defaultValue? :string){
    return lodash.get(param,path,defaultValue);
  }

  pick(param : object,paths:string []){
    return lodash.pick(param,paths);
  }

  omit(param : object,paths:string []){
    return lodash.omit(param,paths);
  }
  at(param  :any [],paths :string []){
    return lodash.at(param,paths)
  }


}
