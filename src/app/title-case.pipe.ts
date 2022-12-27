import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if(!value) return null

    let words = value.split(' ')



    for(let i = 0;i<words.length; i ++){
      if(i > 0 && this.isPrepositions(words[i])){
        words[i] = words[i].toLowerCase()
      }
      else {
        words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1).toLowerCase()
      }

    }

    return words.join(' ')
  }

  private isPrepositions(word:string):boolean{
    let prepositions = [
      'of',
      'the'
    ]

    return prepositions.includes(word.toLowerCase())
  }

}
