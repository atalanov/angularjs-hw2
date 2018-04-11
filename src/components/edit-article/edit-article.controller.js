export default class EditArticleController{
    onSubmit(form){
        if(form.$valid)
        this.onEdit({
            $event:{
                article: this.article
            }
        });
        else
            this.showError = true;
    }
}