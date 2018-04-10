import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import AppComponent from './app.component';
import Components from './components';
import 'angular-route';
import 'angular-resource';
import HomeComponent from './components/home/home.component';
import ArticlesService from './services/articles.service';
import AddArticleComponent from './components/add-article/add-article.component';

const root = angular
    .module('app', [
        Components,
        'ngRoute',
        'ngResource'
    ]);
root.component('app', AppComponent)
    .config(function($routeProvider){
        $routeProvider
        .when("/", HomeComponent)
        .when("/articles/add/", AddArticleComponent)
    })
    .service('ArticlesService', ArticlesService);

export default root;