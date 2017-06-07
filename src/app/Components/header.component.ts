import { Component } from '@angular/core'

@Component ({
    selector: 'header',
    template: `
    <section>
        <div id="header">
            <p id="headerText">Superior Service at an Unbeatable Price!"</p>
            <button id="headerButton" type="button">Let's Talk Business</button>
        </div>
    </section>
    `

})

export class HeaderComponent {}
