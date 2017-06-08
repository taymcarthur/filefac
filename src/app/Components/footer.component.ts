import { Component } from '@angular/core';

@Component({
    selector: 'footer',
    template: `
    <section>
        <div class="footerColumn">
            <p><strong>SUPERIOR SERVICE AT AN UNBEATABLE PRICE</strong></p>
            <p>You've worked hard to make your business successful, so it's important to work with a company that treats it as such. At Filefac, you're not treated as another number in the system; we value your business and want to build a lasting relationship with our clients. By choosing Filefac, you can rest assured knowing your business is in great hands.</p>
        </div>
        <div class="footerColumn">
            <p><strong>HELPFUL LINKS</strong></p>
                <ul id="footerList">
                    <li class="footerListItem"><a href=""><i class="fa fa-angle-right" aria-hidden="true"></i> Registered Agent Services</a></li>
                    <li class="footerListItem"><a href=""><i class="fa fa-angle-right" aria-hidden="true"></i> Incorporation/Formation</a></li>
                    <li class="footerListItem"><a href=""><i class="fa fa-angle-right" aria-hidden="true"></i> Name Availability Check</a></li>
                </ul>
        </div>
        <div class="footerColumn">
            <p>LET'S TALK BUSINESS</p>
            <p>Save time and money by hiring Filefac to legally register your business with the appropriate licensing agencies and more. Get Started by clicking below.</p>
            <a href="">File Now!</a>

        </div>
`

})

export class FooterComponent {}