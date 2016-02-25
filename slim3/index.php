<?php
require 'vendor/autoload.php';

$app = new Slim\App();

// $verbs = array('GET', 'POST', 'PUT', 'DELETE');

// $app->map(array('PUT'),'/home',function($request,$response,$args){
//     echo 'yes';
// });


$app->put('/home',function($request,$response,$args){
    echo 'something new';
});

$app->run();
?>
