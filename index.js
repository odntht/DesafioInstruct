$(document).ready(function () {

    $.get("http://jsonplaceholder.typicode.com/users", function (data, status) {
        list(data);
    });
});


function list(data) {
    // console.log(list[0])
    $(data).each(function (i, e) {
        // console.log(Object.keys(e).length);
        console.log(e);
        // $(e).each(function (a, b) { console.log(a) });
        $("#teste").append(`
            <div id=` + e.id + `>Name: ` + e.name + `</div> <br>
            <div id=` + e.id + `>Username: ` + e.username + `</div> <br>
            <div id=` + e.id + `>E-mail: ` + e.email + `</div> <br>
            <div id=` + e.id + `>E-mail: ` + e.phone + `</div> <br>
            <div id=` + e.id + `>Website: ` + e.website + `</div> <br>
            <div id=` + e.id + `>Address: ` + e.address.street + `, ` + e.address.suite + ` - ` + e.address.city + `</div> <br>
            `
        );
    });
}
