export default class ArticleListController {
    constructor() {
    }
    $onInit() {
        
    }
    $onChanges(changes){
        if (changes.articles) {
            this.articles = angular.copy(changes.articles.currentValue);
        }
    }
    updateArticle(event){
        this.onAction({
            $event:{
                action: 'update',
                article: event.article
            }
        })
    }
    deleteArticle(event){
        this.onAction({
            $event:{
                action: 'delete',
                id: event.id
            }
        });
    }
    static get $inject() { return [] };
}