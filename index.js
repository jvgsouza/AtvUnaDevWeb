db = {};

db.init = function(callback) {
    $.getJSON('db/db.data.json', function(data) {
        db.data = data;
        if(callback) {
            callback();
        }
    })
}

function initSelect() {
    var select = $('#topic-select');
    $.each(db.data, function(index, item) {
        select.append($('<option>', {
            value: item.id,
            text: item.titulo,
            disabled: item.disable,
            selected: item.selected
        }));
    });
}

$(document).on('change','#topic-select',function(){
    var id = $(this).val();
    var item = db.data.find(function(item) {
        return item.id == id;
    });
    $('#description-input').text(item.descricao);
});

db.init(initSelect);