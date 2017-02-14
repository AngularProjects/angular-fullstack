'use strict';

import angular from 'angular';
import LoginController from './login.controller';

export default angular.module('angularApp.login', [])
  .controller('LoginController', LoginController)
  .name;
