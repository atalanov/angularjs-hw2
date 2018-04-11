import controller from './edit-article.controller';
import template from './edit-article.html';

const EditArticleComponent = {
    controller,
    template,
    controllerAs: "$ctrl",
    bindings:{
        onEdit: '&',
        article: '<'
    }
}

export default EditArticleComponent;