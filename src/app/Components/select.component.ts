import { Component } from '@angular/core';

@Component({
    selector: 'selectState',
    template: `
    <section>
        <div>
            <p id="selectTitle">National Registered Agent Services in All 50 States!</p>
            <p id="selectText">Select the number of state(s) that you would like to purchase a <strong>Registered Agent</strong> in and then click the “Order now” button to be directed to PayPal to pay. Once the purchase has been completed you will be redirected to a special form page to fill in your business and contact details.</p>
        <form id="selectForm">
            <select id="selectState">
                <option selected disabled>Select </option>
                    <option value="1">1 State</option>
                    <option value="2">2 States</option>
                    <option value="3">3 States</option>
                    <option value="4">4 States</option>
                    <option value="5">5 States</option>
                    <option value="6">6 States</option>
                    <option value="7">7 States</option>
                    <option value="8">8 States</option>
                    <option value="9">9 States</option>
                    <option value="10">10 States</option>
                    <option value="11">11 States</option>
                    <option value="12">12 States</option>
                    <option value="13">13 States</option>
                    <option value="14">14 States</option>
                    <option value="15">15 States</option>
                    <option value="16">16 States</option>
                    <option value="17">17 States</option>
                    <option value="18">18 States</option>
                    <option value="19">19 States</option>
                    <option value="20">20 States</option>
                    <option value="21">21 States</option>
                    <option value="22">22 States</option>
                    <option value="23">23 States</option>
                    <option value="24">24 States</option>
                    <option value="25">25 States</option>
                    <option value="26">26 States</option>
                    <option value="27">27 States</option>
                    <option value="28">28 States</option>
                    <option value="29">29 States</option>
                    <option value="30">30 States</option>
                    <option value="31">31 States</option>
                    <option value="32">32 States</option>
                    <option value="33">33 States</option>
                    <option value="34">34 States</option>
                    <option value="35">35 States</option>
                    <option value="36">36 States</option>
                    <option value="37">37 States</option>
                    <option value="38">38 States</option>
                    <option value="39">39 States</option>
                    <option value="40">40 States</option>
                    <option value="41">41 States</option>
                    <option value="42">42 States</option>
                    <option value="43">43 States</option>
                    <option value="44">44 States</option>
                    <option value="45">45 States</option>
                    <option value="46">46 States</option>
                    <option value="47">47 States</option>
                    <option value="48">48 States</option>
                    <option value="49">49 States</option>
                    <option value="50">50 States</option>
        </select>
            <button id="selectButton" type="button">Order Now</button>
        </form>
    </div>
</section>
    `
})

export class SelectComponent {}
