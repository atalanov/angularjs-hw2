import angular from 'angular';
import ArticleView from './article-view';
import ArticleList from './articles-list';
import Home from './home';

const Components = angular
  .module('app.components', [
    ArticleView,
    ArticleList,
    Home
  ])
  .name;

export default Components;