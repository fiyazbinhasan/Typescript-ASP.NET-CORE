module App.Controller {
    interface IControllerModel {
        title: string;
    }

    class AppController implements IControllerModel {
        title: string;

        static $inject = [];

        constructor() {
            this.title = "Configuring Typescript for ASP.NET Core App";
        }
    }

    angular
        .module("app")
        .controller("AppController", AppController);
}
