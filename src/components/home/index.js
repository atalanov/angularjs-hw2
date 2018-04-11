import angular from 'angular';
import HomeComponent from './home.component';
import ArticleList from '../articles-list';
import ArticleView from '../article-view';
import AddArticle from '../add-article';
import EditArticle from '../edit-article';

export default angular
    .module('home', [ArticleList, ArticleView, AddArticle, EditArticle])
    .component('home', HomeComponent)
    .name;