(function(){
    $(document).ready(function () {
        $('.btn-main').click(function (e) { 
            e.preventDefault();

            var filtro = $(this).attr("data-filter");

            if(filtro == "all"){
                $('.img-box').show(500);
            } else {
                $('.img-box').not("."+filtro).hide(500);
                $('.img-box').filter("."+filtro).show(500);
            }
        });
    });
}());