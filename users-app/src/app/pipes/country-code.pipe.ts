import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name : 'countryCode'
})
export class CountryCodePipe implements PipeTransform {

  transform(value: any, countryName : string) {
    switch (countryName) {
      case 'USA':
        return "+1 "+value;
      case 'AUS':
        return "+12 "+value;
      case 'EUR':
        return "+33 "+value;
      default:
        return "+91 " + value;
    }
  }

}

// - generate the pipe with CLI tool (ng g p pipes/reverse)
// - generated pipe should be able to reverse the string
