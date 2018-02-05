<?php
$naam2 = $_POST['user'];
$score = $_POST['scoreUser'];



$dbc = mysqli_connect('localhost','root','root','25173_db','3306') or die('error connecting');


    $query = "INSERT into highscore 
              VALUES ('$naam2', '$score',0)";
    $result = mysqli_query($dbc, $query) or die("error querying database");
    mysqli_close($dbc);

header("Location: index.php");
?>    