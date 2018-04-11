export default class ArticleService{
    constructor($http){
        this.$http = $http;
    }
    get(){
        return this.$http.get('http://localhost:8080/api/posts').then(response => response.data);
    }
    add(article){
        return this.$http.post('http://localhost:8080/api/posts', article);
    }
    delete(id){
        return this.$http.delete(`http://localhost:8080/api/posts/${id}`);
    }
    update(article){
        return this.$http.put(`http://localhost:8080/api/posts/${article._id}`, article)
    }
    static get $inject() {return ['$http']};
}