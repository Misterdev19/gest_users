let url_paht = "../controllers/index.php";

const init = () => {

    get_list_user();

    $("#table_usuarios").on("click", '.btn_detalle' ,  function() {
         let id  =  $(this).data("id");
         detalle(id);
    });


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

const detalle  = (id)=>{ 
    
    $.post(url_paht ,  {accion : "detalle" ,  id:id} , (rps)=>{
        // {"street":"Rex Trail","suite":"Suite 280","city":"Howemouth","zipcode":"58804-1099","geo":{"lat":"24.8918","lng":"21.8984"}}
        let datos = JSON.parse(rps);
        let  list  = "<ul>"
        const  datos_array  = [datos];

        datos_array.forEach( (element , index) => {

            list += `<li>street : ${element.street}</li>`;
            list += `<li>suite : ${element.suite}</li>`;
            list += `<li>city : ${element.city}</li>`;

        });

        list  += "</ul>";
        
        $("#dom_body_modal").html(list);
    });


    $("#modal_detalle").modal("show");
}

init();
