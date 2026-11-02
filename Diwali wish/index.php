<?php require_once 'db.php';$bad=false;
if($_SERVER['REQUEST_METHOD']==='POST'&&isset($_POST['name'])){
 $n=trim(preg_replace('/\s+/u',' ',$_POST['name']));
 if(csrf_ok()&&mb_strlen($n)>=1&&mb_strlen($n)<=40){session_regenerate_id(true);$_SESSION['user']=$n;header('Location: index.php');exit;}
 $bad=true;}
$user=$_SESSION['user']??null;$J=JSON_HEX_TAG|JSON_HEX_AMP|JSON_HEX_APOS|JSON_HEX_QUOT|JSON_UNESCAPED_UNICODE; ?>
<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Diwali Wishes | தீபாவளி வாழ்த்துகள்</title><link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🪔</text></svg>">
<script>document.documentElement.dataset.theme=localStorage.theme||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light')</script>
<link rel="stylesheet" href="style.css"></head><body>
<header class="top"><b class="logo">🪔 <span class="rb" data-t="title"></span></b><div class="ctl">
<button id="lang" title="Language">தமிழ் / EN</button><button id="theme" title="Theme"></button><button id="snd" title="Sound">🔊</button>
<?php if($user): ?><button id="song" data-t="song"></button><a href="logout.php" class="lo" data-t="logout"></a><?php endif; ?></div></header>
<div id="float"></div><canvas id="fx"></canvas>
<main class="wrap">
<?php if(!$user): ?>
<section class="card login pop"><div class="diya">🪔</div><h1 class="rb" data-t="title"></h1><p data-t="enter"></p>
<?php if($bad)echo '<p class="er" data-t="bad"></p>'; ?>
<form method="post"><input type="hidden" name="t" value="<?=csrf()?>"><input name="name" maxlength="40" required autofocus data-p="name"><button class="btn" data-t="start"></button></form></section>
<?php else: ?>
<section class="hero"><h1><span data-t="hello"></span>, <span class="rb"><?=e($user)?></span> 🎆</h1></section>
<section class="card pop"><h2 data-t="compose"></h2>
<div id="chips" class="chips"></div><div id="prev" class="prev"></div>
<div class="f2"><input id="to" maxlength="40" data-p="to"></div>
<textarea id="msg" rows="6" maxlength="600"></textarea>
<div class="row"><button id="send" class="btn" data-t="send"></button><a id="wa" class="btn alt" target="_blank" rel="noopener" data-t="share"></a><span id="ok" class="ok"></span></div></section>
<section class="card pop"><h2 data-t="crackers"></h2><p class="mut" data-t="tap"></p>
<div class="row" id="ck"></div>
<div id="sky" class="sky"><span class="star"></span></div>
<div class="row"><button id="auto" class="btn alt" data-t="auto"></button></div></section>
<section id="wall-section"><h2 class="st"><span class="rb" data-t="wall"></span></h2><div id="wall" class="wall"></div></section>
<?php endif; ?></main>
<script>const USER=<?=json_encode($user,$J)?>,TOK=<?=json_encode(csrf(),$J)?>;</script>
<script src="app.js"></script></body></html>
