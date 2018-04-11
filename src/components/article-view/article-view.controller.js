export default class ArticleViewController {
    constructor(ArticleService) {
        this.ArticleService = ArticleService;
        this.view = true;
    }
    $onInit() {
        
    }
    delete(id){
        this.onDelete({
            $event:{
                id: id
            }
        });
    }
    edit(event){
        this.onUpdate({
            $event:{
                article: event.article
            }
        });
        this.view = true;
    }
    static get $inject(){
        return ['ArticleService'];
    }
}