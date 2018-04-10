import angular from 'angular';
import HomeComponent from './home.component';
import ArticleList from '../articles-list';
import ArticleView from '../article-view';
import AddArticle from '../add-article';

export default angular
    .module('home', [ArticleList, ArticleView, AddArticle])
    .component('home', HomeComponent)
    .name;