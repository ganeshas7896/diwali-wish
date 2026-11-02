<?php require_once 'db.php';header('Content-Type: application/json; charset=utf-8');
$a=$_GET['a']??$_POST['a']??'';
if($a==='list'){echo json_encode($pdo->query('SELECT id,sender,receiver,message,created_at FROM wishes ORDER BY id DESC LIMIT 50')->fetchAll(),JSON_UNESCAPED_UNICODE);exit;}
if($a==='send'&&$_SERVER['REQUEST_METHOD']==='POST'){
 $u=$_SESSION['user']??'';$m=trim($_POST['message']??'');$r=mb_substr(trim($_POST['receiver']??''),0,40);
 if(!$u||!csrf_ok()||$m===''||mb_strlen($m)>600){http_response_code(400);echo '{"ok":false}';exit;}
 if(time()-($_SESSION['last']??0)<3){http_response_code(429);echo '{"ok":false,"wait":true}';exit;}
 $_SESSION['last']=time();
 $pdo->prepare('INSERT INTO wishes(sender,receiver,message) VALUES(?,?,?)')->execute([$u,$r,$m]);
 echo '{"ok":true}';exit;}
http_response_code(404);echo '{}';
