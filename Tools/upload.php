<?php
if(isset($_FILES['file'])) {
    $file = $_FILES['file'];

    // File Properties
    $file_name = $file['name'];
    $file_tmp = $file['tmp_name'];
    $file_size = $file['size'];
    $file_error = $file['error'];

    // Work out File Extension
    $file_ext = explode('.', $file_name);
    $file_ext = strtolower(end($file_ext));

    // Define an array of whitelisted file extensions
    $allowed = array('json');

    // Checks to see if the $file_ext is in the $allowed array 
    if(in_array($file_ext, $allowed) && $file_error === 0 && $file_size <= 5000) {
        $file_name_new = uniqid('', true) . '.' . $file_ext;
        $file_dest = '../uploads/' . $file_name_new;
        // 
        if(move_uploaded_file($file_tmp, $file_dest)){
            
        }
    // Handle errors
    } else {
        
    }
}