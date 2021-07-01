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
        <h2>Sign Up</h2>
        <form action="includes/signup.inc.php" method="post">
            <input type="text" name="name" placeholder="Full Name..."><br>
            <input type="text" name="uid" placeholder="Username..."><br>
            <input type="text" name="email" placeholder="Email..."><br>
            <input type="password" name="pwd" placeholder="Password..."><br>
            <input type="password" name="pwdrepeat" placeholder="Password Again..."><br>
            <button type="submit" name="submit">Sign Up</button>
        </form>
        <?php
            if (isset($_GET["error"])) {
                if ($_GET["error"] == "emptyinput") {
                    echo "<p>A field was left empty. Please fill in all fields.</p>";
                } else if ($_GET["error"] == "invaliduid") {
                    echo "<p>Please enter a proper username.</p>";
                } else if ($_GET["error"] == "invalidemail") {
                    echo "<p>Please enter a proper email.</p>";
                } else if ($_GET["error"] == "passwordsdontmatch") {
                    echo "<p>Passwords don't match.</p>";
                } else if ($_GET["error"] == "stmtfailed") {
                    echo "<p>Something went wrong. Please try again.</p>";
                } else if ($_GET["error"] == "usernametaken") {
                    echo "<p>Username already taken. Please enter a different username.</p>";
                } else if ($_GET["error"] == "none") {
                    echo "<p>Sign up successful!</p>";
                }
            }
        ?>
    </main>
</body>  
</html>