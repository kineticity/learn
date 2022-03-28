<?php

$host= "localhost";

$user="root";

$pass="";

$db="kia";

$conn = mysqli_connect($host,$user,$pass,$db);

if($conn)
{
    echo "success";
}
else{
    echo "fail";
}

?>