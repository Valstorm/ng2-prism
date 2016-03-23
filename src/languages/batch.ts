import {Directive, ElementRef} from 'angular2/core';

import 'prismjs/components/prism-batch';

@Directive({
  selector: 'codeblock[batch]'
})
export class Batch {

  codeblock:any;

  constructor(private el:ElementRef) {  }

  ngOnInit() {
    // get the host
    this.codeblock = (<any>this.el).internalElement.componentView.context;
    this.codeblock.language = 'batch';
  }

}