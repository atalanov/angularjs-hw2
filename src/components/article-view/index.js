import angular from 'angular';
import ArticleViewComponent from './article-view.component';

const ArticleView = angular
    .module('articleView', [])
    .component('articleView', ArticleViewComponent)
    .name;

export default ArticleView; 