<?php

require_once '../models/Index.php';

$usuario  =  new  Usuarios();

$accion  = $_POST['accion'];

switch ($accion) {

    case 'get_list_user':
        get_list_user();
        break;
}


function  get_list_user()
{

    global $usuario;

    $rps = $usuario->getListUser();
    $list_usuarios  =  json_decode(json_encode($rps));
    $data = array();
    foreach ($list_usuarios as $key) {

        $data[] = array(
            "0" => $key->id,
            "1" => $key->name,
            "2" => $key->username,
            "3" => $key->email,
            "4" => ""
        );
    }

    $results = array(
        "eEcho" => 1, //information of datatable
        "iTotalRecors" => count($data), //we send all of records
        "iTotalDisplayRescors" => count($data), //we senf el total of records to be viewed
        "aaData" => $data //data 
    );
    
    echo json_encode($results);
}
