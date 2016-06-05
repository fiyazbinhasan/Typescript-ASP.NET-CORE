var App;
(function (App) {
    var Controller;
    (function (Controller) {
        var AppController = (function () {
            function AppController() {
                this.title = "Star Wars Characters";
            }
            AppController.$inject = [];
            return AppController;
        }());
        angular
            .module("app")
            .controller("Controller", AppController);
    })(Controller = App.Controller || (App.Controller = {}));
})(App || (App = {}));
//# sourceMappingURL=controller.js.map