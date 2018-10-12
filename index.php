<?php
require '../TestProject/vendor/autoload.php';
require_once '../TestProject/app/Model.php';
//var_dump($_REQUEST);
$index = file_get_contents('../TestProject/templates/index.html');

$html =  $index;

$product = file_get_contents('../TestProject/templates/product.html');

$html = str_replace('{products}', $product, $html);

echo $html;

//$db = DB::getInstance();
//$mysqli = $db->getConnection(); 
//Создаём экземпляр класса модель. Я сделал в классе DB конструктор и $_connection protected для того чтобы дописать функционал в классе Model.   
//Если есть POST запрос - фильтруем данные по нему, если нет - возвращпем все записи
//var_dump($_POST);
$result = new Model;
if($_POST){
	$result = $result->read($_POST);
}else{
	$result = $result->read_all();
}




