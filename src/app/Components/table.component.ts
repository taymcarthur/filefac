import { Component } from '@angular/core'

@Component({
    selector: 'table',
    template: `
    <section>
        <div id="tableSection">
            <div class="table">
                <p class="tableTitle">REGISTERED AGENT</p>
                <p class="tableText">We’ll ensure you’re adequately informed upon the receipt of any legal notice.</p>
                <img class="tableImage" src="http://filefac.com/wp-content/uploads/2016/08/RA-300x200.jpg" /><br />
                <a class="tableLink" href=""><i class="fa fa-gavel" aria-hidden="true"></i> Learn More</a>
            </div>

            <div class="table">
                <p class="tableTitle">BUSINESS INCORPORATION</p>
                <p class="tableText">We’ll form your corporation or LLC with the Secretary of State in MINUTES!</p>
                <img class="tableImage" src="http://filefac.com/wp-content/uploads/2016/08/incorporate-300x200.jpg" /><br />
                <a class="tableLink" href="" ><i class="fa fa-gavel" aria-hidden="true"></i> Learn More</a>
            </div>

            <div class="table">
                <p class="tableTitle">ENTITY MANAGEMENT</p>
                <p class="tableText">We’ll make sure you’re compliant & remain in good standing with the Secretary of State.</p>
                <img class="tableImage" src="http://filefac.com/wp-content/uploads/2016/08/paperwork-300x203.jpg" /><br />
                <a class="tableLink" href=""><i class="fa fa-gavel" aria-hidden="true"></i> Learn More</a>
            </div>

        </div>
        <div class="hRule">
        </div>
    </section>
    `
})

export class TableComponent {}
