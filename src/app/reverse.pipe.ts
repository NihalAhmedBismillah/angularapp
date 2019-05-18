import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverse"
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...arg): any {
    console.log(value, arg);
    if(arg[1]){
      if (arg[0] === "capital") {
        return value
          .split("")
          .reverse()
          .join("")
          .toLocaleUpperCase();
      } else {
        return value
          .split("")
          .reverse()
          .join("");
      }
    }else{
      return value;
    }
  }
}
