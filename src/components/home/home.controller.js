import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from "constants";

export default class HomeController {
    constructor(ArticleService){
        this.ArticleService = ArticleService;
        this.ArticleService.get().then(response => this.articles = response);
    }
    
    AddArticle(event){
        this.ArticleService.add(event.article).then(()=>{
            this.ArticleService.get().then(response => this.articles = response);
            this.showAddForm=false;
        });
    }

    makeAction(event){
        switch(event.action){
            case 'delete':
                this.ArticleService.delete(event.id).then(()=>{
                    this.ArticleService.get().then(response => this.articles = response);
                });
                break;
            case 'update':
                this.ArticleService.update(event.article).then(()=>{
                    this.ArticleService.get().then(response => this.articles = response);
                });
                break;
            default:
                console.log(event.action);
                break;
        }
    }

    static get $inject(){
        return ['ArticleService'];
    }
}