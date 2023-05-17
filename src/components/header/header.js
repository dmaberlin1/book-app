import {DivComponent} from "../../common/div-component.js";
import './header.css'

export class Header extends DivComponent{
    constructor(appState) {
        super();
        this.appState=appState;
    }
    render() {
        this.el.classList.add('header')
        this.el.innerHTML=`
        <div>
        <a target='_blank' href="https://github.com/dmaberlin1">
        <img src="/static/logo-no-background.svg" alt="logo"/>
         </a>
</div>
<div class="menu">
    <a class="menu__item" href="#">
    <img src="/static/search.svg" alt="find"/>
        Поиск книг
    </a>
    <a class="menu__item" href="#favorites">
    <img  src="/static/favorites.svg" alt="favorites"/>
        Избранное
        <div class="menu__counter">
        ${this.appState.favorites.length}
</div>
    </a>
</div>
        `;
        return this.el
    }
}