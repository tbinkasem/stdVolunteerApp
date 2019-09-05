<?php
    //get_student.php
    include "conf.php";
    header("Access-Control-Allow-Origin:*");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    mysqli_set_charset($con, 'utf8');
    $sql = "SELECT * FROM std";
    //echo $sql;
    $result = mysqli_query($con, $sql);
    $stdList = array();
    while($data = mysqli_fetch_assoc($result)){
        $stdList[] = $data;
    }
    echo json_encode($stdList);

?>