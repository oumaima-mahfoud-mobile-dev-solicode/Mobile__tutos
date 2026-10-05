<?php 
header("Content-type: aplication/json") ;
$json = [
    ["id" => 1 , "name" =>"robes"],
    ["id" => 2 , "name" =>"sacs"]
] ;
$data = json_encode($json) ;
echo $data ;