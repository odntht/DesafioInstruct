
$.get("http://jsonplaceholder.typicode.com/users", function (result, status) {
    data = result;
    list(data);
});


// Fazendo uma requisição GET
// Criação dinâmica dos dados de cada usuário recebendo os dados do JSON e também passivel de receber um outro dado de filtragem
function list(data, filter = null) {
    // Caso a variável filter seja vazia
    if (!filter) {
        // Apaga tudo dentro da div de id cards
        $("#cards").html("");
        //Varre o array data e gera os cards
        $(data).each(function (i, e) {
            $("#cards").append(`
            <div  id= `+ e.id + `>
                <div class="card front">
                    <div class="blue"></div>
                    <div class="yellow"></div>
                    <div class="pink"></div>
                    <div class="dots"></div>
                    <div class="personal-intro">
                        <p>` + e.name + `</p>
                    </div>
                 </div >
                <div class="card back hide">
                    <div class="yellow"></div>
                    <div class="top dots"></div>
                    <div class="personal-info">
                        <p>` + e.name + `</p>
                        <p>` + e.username + `</p>
                        <p>` + e.address.street + `, ` + e.address.suite + `</p>
                        <p>` + e.address.city + `</p>
                        <p> ` + e.phone + `</p>
                        <p>` + e.email + `</p>
                        <p>` + e.website + `</p>
                    </div>
                    <div class="bottom dots"></div>
                    <div class="pink"></div>
                </div>
            </div>
                `
            );

            $("#" + e.id).click(function () {
                $('#' + this.id + ' .back').toggleClass("hide");
                $('#' + this.id + ' .front').toggleClass("hide");

            })
        });
        //Caso a variável filter não esteja vazia
    } else {
        // Apaga tudo dentro da div de id cards
        $("#cards").html("");
        //Varre o array data
        $(data).each(function (i, e) {
            // Pega dentro o array data o campo e-mail e divide em partes que tenham a string .
            let tempEmail = e.email.split(".");
            //Pega a ultima parte desse novo array tempEmail e o seta com o nome de domain
            let domain = tempEmail[(tempEmail.length) - 1];
            console.log(domain);
            //Verifica o valor digitado na barra de pesquisa (filter) contém nesse ponto do array.
            let check = domain.includes(filter);
            // Se tiver, gera o card normalmente, se não tiver simplesmente pula pra proxima key
            if (check) {
                $("#cards").append(`
            <div  id= `+ e.id + `>
                <div class="card front">
                    <div class="blue"></div>
                    <div class="yellow"></div>
                    <div class="pink"></div>
                    <div class="dots"></div>
                    <div class="personal-intro">
                        <p>` + e.name + `</p>
                    </div>
                 </div >
                <div class="card back hide">
                    <div class="yellow"></div>
                    <div class="top dots"></div>
                    <div class="personal-info">
                        <p>` + e.name + `</p>
                        <p>` + e.username + `</p>
                        <p>` + e.address.street + `, ` + e.address.suite + `</p>
                        <p>` + e.address.city + `</p>
                        <p> ` + e.phone + `</p>
                        <p>` + e.email + `</p>
                        <p>` + e.website + `</p>
                    </div>
                    <div class="bottom dots"></div>
                    <div class="pink"></div>
                </div>
            </div>
                `
                );

                $("#" + e.id).click(function () {
                    $('#' + this.id + ' .back').toggleClass("hide");
                    $('#' + this.id + ' .front').toggleClass("hide");

                })
            }
        });
    }
};

// Monitora o input de pesquisa "search" para cada interação, seja digitar, copiar, apagar...
$('#search').on('input', function (e) {
    // Salva em uma varilavel o valor digitado e remove espaços vazios no inicio e fim da string
    let filter = $(this).val().trim();
    // Chama a função list com ambos os parametros, permitindo filtar os nomes
    list(data, filter);
});
