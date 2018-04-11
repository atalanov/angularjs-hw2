import controller from './article-list.controller';
import template from './article-list.html';

const ArticleListComponent = {
    controller,
    template,
    bindings:{
        articles: '<',
        onAction: '&' 
    }
};

export default ArticleListComponent;