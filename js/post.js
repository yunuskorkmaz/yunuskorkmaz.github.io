/**
 * Created by Yunus on 16.06.2017.
 */

window.params = function(){
    var params = {};
    var param_array = window.location.href.split('?')[1].split('&');
    for(var i in param_array){
        x = param_array[i].split('=');
        params[x[0]] = x[1];
    }
    return params;
}();

$(function () {
    var id = window.params.id;

    var item =  localStorage.items;

    item =  JSON.parse("["+ item + "]");



    $.get( "_posts/"+item[id].filename, function( data ) {

        $('.blog-post > p').html(data);
        $('.blog-post > h3').text(item[id].baslik);
        $('.blog-post > span').text(item[id].tarih);
        
    });
    
});