<?php
    session_start();
    if(!isset($_SESSION['username'])){
        header('Location: Login.php');
    }
    else{
        echo "<p style='padding: 20px 0px 0px 0px ';>" ."Welcome!"."  ".$_SESSION['username']."</p>" ;
    }
?>

<!DOCTYPE HTML>
<html>
 <head> <title> HOME </title>
    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
 	<link href="new1.css" rel="stylesheet">
</head>
    <body>
        <div class="header1" >
    		<a href="home.php" > WEB DEVELOPMENT </a>
    	</div>
        <div>
            <ul>
                <li>
                    <a href="/test/home.php" title="home"> <i class="material-icons" style="font-size:31px" >home</i> </a>
                </li>
                <li>
                    <a href="/test/html.php" title="html"target="_blank"> HTML </a>
                </li>
                <li>
                    <a href="/test/css.php" title="css" target="_blank"> CSS </a>
                </li>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn"> MENU &#8711;</a>
                    <div class="dropdown-content">
                        <a href="/test/js.php" title="js" target="_blank"> JAVASCRIPT </a>
                        <a href="/test/php.php" title="php" target="_blank"> PHP </a>
                        <a href="/test/sql.php" title="sql" target="_blank"> SQL </a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="borderimage">
            <p id="course"> HTML </p>
            <p> With HTML you can create your own Web site.</p>
            <p> This tutorial teaches you everything about HTML.</p>
            <p> HTML is easy to learn - You will enjoy it. </p>
        </div>
    <div>
       <a class="w3-btn w3-margin-bottom" href="html.php" target="_blank">Try HTML &raquo;</a>
    </div>

    <div class="borderimage">
        <p id="course"> CSS </p>
        <p> CSS is a language that describes the style of an </p>
        <p> HTML document.</p>
        <p> CSS describes how HTML elements should be displayed.</p>
        <p> This tutorial will teach you CSS from basic to advanced.</p>
    </div>
    <div>
        <a class="w3-btn w3-margin-bottom" href="css.php" target="_blank">Try CSS &raquo;</a>
    </div>
    <div class="borderimage">
        <p id="course"> JAVASCRIPT </p>
        <p> JavaScript is the programming language of HTML and the Web.</p>
        <p> JavaScript is easy to learn.</p>
        <p> This tutorial will teach you JavaScript from basic to advanced.</p>
    </div>
    <div>
        <a class="w3-btn w3-margin-bottom" href="js.php" target="_blank">Try JAVASCRIPT &raquo;</a>
    </div>
    <div class="borderimage">
        <p id="course"> PHP </p>
        <p> PHP is a server scripting language, and a powerful tool</p>
        <p> for making dynamic and interactive Web pages.</p>
        <p> PHP is a widely-used, free, and efficient alternative to</p>
        <p> competitors such as Microsoft's ASP.</p>
    </div>
    <div>
        <a class="w3-btn w3-margin-bottom" href="php.php" target="_blank">Try PHP &raquo;</a>
    </div>
    <div class="borderimage">
        <p id="course"> SQL </p>
        <p> SQL is a standard language for storing, manipulating</p>
        <p> and retrieving data in databases.</p>
        <p> Our SQL tutorial will teach you how to use SQL in: </p>
        <p> MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, </p>
        <p> Postgres, and other database systems.</p>
    </div>
    <div>
        <a class="w3-btn w3-margin-bottom" href="sql.php" target="_blank">Try SQL &raquo;</a>
    </div>
    <br /><br /><br /><br />
    </body>
</html>
