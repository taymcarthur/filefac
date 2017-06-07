import { Component } from '@angular/core'

@Component({
    selector: 'navbar',
    template: `
    <section id="nav">
        <div class="navbar">
            <ul class="navlist">
                <li class="navListItem">
                    <p class="navText">Connect With Us:</p>
                </li>

                <li class="navListItem">
                        <a href={{facebookLink}}>
                        <p class="navText">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                        </p>
                    </a>
                </li>
                
                    <li class="navListItem">
                        <a href={{googleLink}}>
                        <p class="navText"> 
                            <i class="fa fa-google" aria-hidden="true"></i>
                        </p>
                    </a>
                </li>
                <li class="navListItem">
                    <a href={{twitterLink}}>
                    <p class="navText"> 
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                    </p>
                    </a>
                </li>
            </ul>
        </div>`
})

export class NavBarComponent{
    facebookLink = 'https://facebook.com/filefac';
    twitterLink = 'https://twitter.com/filefac';
    googleLink = 'https://google.com';
}