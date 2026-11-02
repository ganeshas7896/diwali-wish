<?php
require_once __DIR__.'/config.php';
session_start();
function e($s){return htmlspecialchars((string)$s,ENT_QUOTES,'UTF-8');}
try{$pdo=new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME.';charset=utf8mb4',DB_USER,DB_PASS,[PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC]);}
catch(PDOException $x){http_response_code(500);die(DEBUG?e($x->getMessage()):'Database connection failed. Check config.php');}
function csrf(){if(empty($_SESSION['t']))$_SESSION['t']=bin2hex(random_bytes(16));return $_SESSION['t'];}
function csrf_ok(){return isset($_POST['t'])&&hash_equals($_SESSION['t']??'',$_POST['t']);}
