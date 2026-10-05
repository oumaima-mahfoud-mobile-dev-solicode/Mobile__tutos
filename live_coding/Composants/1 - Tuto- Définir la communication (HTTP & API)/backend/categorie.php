<?php
header("Content-Type: application/json");
$json = [
    ["id"=> 1 , "nom" =>"oumaima"]
] ;
echo json_encode($json) ;
