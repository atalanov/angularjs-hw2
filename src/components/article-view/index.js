import angular from 'angular';
import ArticleViewComponent from './article-view.component';
import EditArticle from '../edit-article';

const ArticleView = angular
    .module('articleView', [EditArticle])
    .component('articleView', ArticleViewComponent)
    .name;

export default ArticleView; 