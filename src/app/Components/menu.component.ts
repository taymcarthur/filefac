import { Component } from '@angular/core'

@Component ({
    selector: 'menu',
    template: `
        <section id="menu">
            <img src={{logoLink}} alt="filefac" />
            </section>`
})

export class MenuComponent {
    logoLink: 'https://scontent.flas1-1.fna.fbcdn.net/v/t1.0-9/14516321_1412372952125802_4009582067977174206_n.png?oh=08aaa617360641e861fe9bee89893fa9&oe=59AFE88A'
} 