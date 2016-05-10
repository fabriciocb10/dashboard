(function() {
  'use strict';

  angular
    .module('dashboard')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1462889878407;
    vm.showToastr = showToastr;
    vm.servicios = [{name:"compas.png", text:"Compass"},
                    {name:"tasa-cero.png", text:"Tasa Cero"},
                    {name:"pymes.png", text:"Pymes"},
                    {name:"puntos-venta.png", text:"Puntos de Venta"},
                    {name:"movilmatic.png", text:"Movilmatic"},
                    {name:"tarjeta-regalo.png", text:"Tarjeta de Regalo"},
                    {name:"booknow.png", text:"Booking Engine"},
                    {name:"sos.png", text:"SOS"},
                    {name:"seg.png", text:"SEG" }];

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
