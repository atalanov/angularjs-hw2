import angular from 'angular';
import ArticleListComponent from './article-list.component';
import ArticleView from '../article-view';

export default angular
    .module('articleList', [ArticleView])
    .component('articleList', ArticleListComponent)
    .name;