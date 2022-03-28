<?php

include('conn.php');

if(isset($_POST['submit'])){

print_r($_POST);

$username=$_POST['username'];

$email=$_POST['email'];
$password=$_POST['password'];

$query1="INSERT INTO `kia`(`username`, `email`, `password`) VALUES ('$username','$email','$password')";




$res1=mysqli_query($conn,$query1);
echo($query1);
//echo '<br>'
//echo($res1)

echo('<script>alert("Registered successfully now please login")</script>');

echo('<script>window.location="login.html"</script>');

}
else{
    echo('<script>alert("Not right way")</script>');

    echo('<script>window.location="index.html"</script>');


  

}

?>
