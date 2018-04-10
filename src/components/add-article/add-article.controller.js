export default class AddArticleController{
    constructor($location, ArticlesService) {
        this.articlesService = ArticlesService;
        this.$location = $location;
    }
    add(){
        console.log(this.article);
        this.articlesService.add(this.article);
        this.$location.path('/');
    }
    static get $inject() {
        return ['$location', 'ArticlesService'];
    }
    
}