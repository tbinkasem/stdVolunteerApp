<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    include("config.php");

    $userdata = file_get_contents("php://input");
    $getdata = json_decode($userdata);

    $getuser = $getdata->user;
    $getpass = $getdata->pass;

    $sql = "SELECT * FROM users WHERE username = '$getuser' AND password = '$getpass'";
    $result = mysqli_query($con, $sql);
    //echo $result;
    $numdata = mysqli_num_rows($result);
    // echo "num : ".$numdata;

    if($numdata == 1){
        $arrdata = array();
        while($rowdata = mysqli_fetch_array($result)){
            $arrdata[] = $rowdata;
        }
        echo json_encode($arrdata);
        mysqli_close($con);
    }else{
        echo "null";
    }

?>