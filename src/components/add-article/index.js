import angular from 'angular';
import AddArticleComponent from './add-article.component';
import LengthValidator from '../../directives/length-validator.directive';

export default angular
    .module('addArticle',[])
    .component('addArticle', AddArticleComponent)
    .directive('lengthValidator', () => new LengthValidator)
    .name;