import {Directive, ElementRef} from 'angular2/core';

import 'prismjs/components/prism-vim';

@Directive({
  selector: 'codeblock[vim]'
})
export class Vim {

  codeblock:any;

  constructor(private el:ElementRef) {  }

  ngOnInit() {
    // get the host
    this.codeblock = (<any>this.el).internalElement.componentView.context;
    this.codeblock.language = 'vim';
  }

}