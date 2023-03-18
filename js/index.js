let url_paht = "../controllers/index.php";

const init = () => {

    $("#btn_detalle").on("click", () => {
        $("#modal_detalle").modal("show");
    });

    get_list_user();

}

const get_list_user = () => {


    $("#table_usuarios").dataTable({
            aProcessing: true,
            aServerSide: true,
            "processing": true,
            language: {
                url: "",
                processing: `<div class="loader"></div>`
            },
            dom: "Bfrtip",
            responsive: true,
            lengthChange: false,
            autoWidth: false,
            buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],
            ajax: {
                url: url_paht,
                type: "post",
                data: {accion:"get_list_user"},
                dataType: "json",
                error: function (e) {
                    // console.log(e.responseText);
                },
            },
            bDestroy: true,
            iDisplayLength: 10, //paginacion
            order: [[0, "desc"]], //ordenar (columna , orden)
        })
        .dataTable();
}

init();
