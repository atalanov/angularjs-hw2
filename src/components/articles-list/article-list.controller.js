export default class ArticleListController {
    constructor(ArticlesService) {
      this.articlesService = ArticlesService;
    }
    $onInit() {
        this.articles = [];
        this.articlesService.get().then(response => {this.articles = response; console.log(this.articles)});
    }
    static get $inject() { return ['ArticlesService'] };
}