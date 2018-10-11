<?php
require '../TestProject/vendor/autoload.php';
require_once '../TestProject/app/Model.php';
//var_dump($_REQUEST);
$index = file_get_contents('../TestProject/templates/index.html');

$html =  $index;

$product = file_get_contents('../TestProject/templates/product.html');

$html = str_replace('{products}', $product, $html);

echo $html;

$db = DB::getInstance();
$mysqli = $db->getConnection(); 
/*$from = $_POST['from'] ? $_POST['from']:0;
$to = $_POST['to'] ? $_POST['to']:500;
$sql_query = "SELECT * FROM `products` where discount_price BETWEEN $from AND $to";
var_dump($sql_query);
$result = $mysqli->query($sql_query);
while ($product = $result->fetch_object()){
		var_dump($product);
};*/
var_dump($_POST);
$result = new Model;
$result = $result->read($mysqli, $_POST);
//var_dump($result);
//var_dump($_POST);



