console.log("okk");

function ajaxWithGenerateSheet(ajaxOptions){
    let deferred = new $.Deferred;
    
    $.ajax(ajaxOptions).done(function(data){
        deferred.resolve(data); // resolve()でdoneメソッドを呼び出す
    }).fail(function(data){
        deferred.reject(data); // reject()でfailメソッドを呼び出す
    });
    
    return deferred.promise(); // 戻り値はpromiseにする
}

function CreateSheet(){
    let url = 'http://localhost:8000/';

    ajaxWithGenerateSheet({
        url: url + 'api/sheet',
        type: 'get',
        }).done(function(data) {
            let dataTr1 = data.slice(0, 5);
            let dataTr2 = data.slice(5, 10);
            let dataTr3 = data.slice(10, 15);
            let dataTr4 = data.slice(15, 20);
            let dataTr5 = data.slice(20, 25);

            $('#row1 td').remove();
            $('#row2 td').remove();
            $('#row3 td').remove();
            $('#row4 td').remove();
            $('#row5 td').remove();

            dataTr1.forEach(function(num) {
                $('#row1').append('<td>' + num + '</td>');
            });
              
            dataTr2.forEach(function(num) {
                $('#row2').append('<td>' + num + '</td>');
            });
              
            dataTr3.forEach(function(num) {
                $('#row3').append('<td>' + num + '</td>');
            });
              
            dataTr4.forEach(function(num) {
                $('#row4').append('<td>' + num + '</td>');
            });
              
            dataTr5.forEach(function(num) {
                $('#row5').append('<td>' + num + '</td>');
            });

        });
}