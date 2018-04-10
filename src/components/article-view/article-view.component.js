import controller from './article-view.controller';
import template from './article-view.html';

const ArticleViewComponent = {
    bindings: {
      article: '<'
    },
    controller,
    template
};

export default ArticleViewComponent;