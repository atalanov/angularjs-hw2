import angular from 'angular';
import AddArticleComponent from './add-article.component';

export default angular
    .module('article.add',[])
    .component('addArticle', AddArticleComponent)
    .name;