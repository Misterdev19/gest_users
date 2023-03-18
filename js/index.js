const init = () => {

    $("#btn_detalle").on("click", () => {
        $("#modal_detalle").modal("show");
    });

    get_list_user();

}

const get_list_user = () => {


    $("#table_usuarios")
        .dataTable({
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
                url: "",
                // xhr: function() {

                //    console.log("se cancelo");

                // },
                type: "post",
                data: {},
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
