export default class ArticlesService{
    constructor($http){
        this.$http = $http;
    }
    get(){
        return this.$http.get('http://localhost:8080/api/posts').then(response => response.data);
    }
    static get $inject() {return ['$http']};
    add(article){
        return this.$http.post('http://localhost:8080/api/posts', article);
    }
}