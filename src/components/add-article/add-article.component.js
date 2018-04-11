import controller from './add-article.controller';
import template from './add-article.html';

const AddArticleComponent = {
    controller,
    template,
    controllerAs: "$ctrl",
    bindings:{
        onAdd: '&'
    }
}

export default AddArticleComponent;