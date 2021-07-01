<?php
// Start a session
session_start();
// Unset the session
session_unset();
// Delete session variables
session_destroy();
// Send the user back to the homepage
header("location: ../index.php");