import { Component } from '@angular/core'

@Component({
   selector: 'quote',
   template: `
       <section>
           <div id="quoteSection">
               <div id="quoteContainer">
                   <p id="quoteIcon"><i class="fa fa-quote-right" aria-hidden="true"></i></p>
                   <p id="quoteText">Whether you need assistance incorporating or you’re looking to capitalize on the benefits associated with hiring us as your registered agent, Filefac is your best option for attaining comprehensive and reliable corporate services at a <strong>great price</strong>!</p>
               </div>
           </div>
           <div class="hRule"></div>
       </section>
   `
})

export class QuoteComponent {}