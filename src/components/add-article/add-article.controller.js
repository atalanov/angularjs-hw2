export default class AddArticleController{
    constructor() {
        this.article = {};
    }
    $onInit(){
        this.article = {};
    }
    onSubmit(form){
        console.log(form.$valid, form);
        if(form.$valid)
            this.onAdd({
                $event:{
                    article: this.article
                }
            });
        else{
            this.showError = true;
        }
    }
}