<!DOCTYPE html> 
<html lang ="en">  
<head>  
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>GameMaster Website</title>  
    <link rel="stylesheet" href="style.css"/>
    <link rel="icon" href="favicon.ico">
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="../Global_Functions.js"></script>
</head>  
<style>
    input {
        text-align: center !important;
        width: 200px !important;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }
</style>
<body>
    <!--Navigation Panel START-->   
    <div id="nav_placeholder"></div>
    <script>$(function(){$("#nav_placeholder").load("./nav.php");});</script>
    <!--Navigation Local START-->   
    <div id="nav_local"></div>
    <script>$(function(){$("#nav_local").load("./nav_local.html");});</script>
    <main>
        <h2>Login</h2>
        <form action="includes/login.inc.php" method="post">
            <input type="text" name="uid" placeholder="Username/Email"><br>
            <input type="password" name="pwd" placeholder="Password..."><br>
            <button type="submit" name="submit">Login</button>
        </form>
        <?php
            if (isset($_GET["error"])) {
                // Handle having an empty input
                if ($_GET["error"] == "emptyinput") {
                    echo "<p>A field was left empty. Please fill in all fields.</p>";
                // Handle an incorrect password
                } else if ($_GET["error"] == "wrongPW") {
                    echo "<p>The password is incorrect..</p>";
                }
            }
        ?>
    </main>
</body>  
</html>