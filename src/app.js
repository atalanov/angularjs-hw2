import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import AppComponent from './app.component';
import Components from './components';
import 'angular-route';
import 'angular-resource';
import HomeComponent from './components/home/home.component';
import ArticleService from './services/articles.service';
import AddArticleComponent from './components/add-article/add-article.component';
import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

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
    .service('ArticleService', ArticleService);

export default root;