import angular from 'angular';
import EditArticleComponent from './edit-article.component';
import LengthValidator from '../../directives/length-validator.directive';

export default angular
    .module('editArticle',[])
    .component('editArticle', EditArticleComponent)
    .directive('lengthValidator', () => new LengthValidator)
    .name;