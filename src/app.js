import {MainView} from "./views/main/main.js";

class App{
    routes=[
        {path:'',view:MainView}
    ];
    appState={
        favorites:[]
    }

    constructor() {
        //важно сбиндить его на текущий контекст, чтобы этот контекст не потерять
        //конструктор который обрататывает смену хеша
        window.addEventListener('hashchange',this.route.bind(this))
        this.route()
    }
    route(){
        if(this.currentView){
            this.currentView.destroy();
        }
        const view=this.routes.find(r=>r.path==location.hash).view
        this.currentView=new view(this.appState);
        this.currentView.render();
    }
}
new App();