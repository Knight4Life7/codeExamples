$(document).ready(function(){

    $('form').submit(function(e) {

        if(!$(this).find('[data-input=mobile]').val()){
            alert('Вы забыли указать контактный телефон')
        } else {
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "../mailer/smart.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                $('form').trigger('reset');
            });
            location.href = "thanks.html"
            return false;
        }
    });

});

