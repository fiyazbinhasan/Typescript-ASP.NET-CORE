var App;
(function (App) {
    var Controller;
    (function (Controller) {
        var AppController = (function () {
            function AppController() {
                this.title = "Configuring Typescript for ASP.NET Core App";
            }
            AppController.$inject = [];
            return AppController;
        }());
        angular
            .module("app")
            .controller("AppController", AppController);
    })(Controller = App.Controller || (App.Controller = {}));
})(App || (App = {}));

//# sourceMappingURL=controller.js.map
