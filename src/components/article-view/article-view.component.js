import controller from './article-view.controller';
import template from './article-view.html';

const ArticleViewComponent = {
    bindings: {
      article: '<',
      onUpdate: '&',
      onDelete: '&'
    },
    controller,
    template,
    controllerAs: '$ctrl'
};

export default ArticleViewComponent;