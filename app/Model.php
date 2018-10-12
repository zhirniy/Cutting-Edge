<?php
class Model extends DB{
	public $diameter;
	public $weight;
	public $pcd;
	public $brand;
	public $et;
	public $type;
	public $logo;
	public $from;
	public $to;

	public function __construct() 
	{
		parent::__construct();
	}
	/*Метод фильтрует записи по POST запросу*/
	public function read($params){
		$this->diameter = $params['diameter'];
		$this->width = $params['width'];
		$this->pcd = $params['pcd'];
		$this->brand = $params['brand'] ? $params['brand']: "barum','fulda','lassa','bridgestone";
		$this->et = $params['et'];
		$this->type = $params['type'];
		$this->logo = $params['logo'];
		$this->from = $params['from'];
		$this->to = $params['to'];

		$sql_query = "SELECT * FROM properties LEFT JOIN products_properties ON properties.id=products_properties.properti_id
        LEFT JOIN products ON products_properties.product_id=products.id
        LEFT JOIN manufacturers ON products.manufacturer_id=manufacturers.id
        LEFT JOIN ratings ON products_properties.product_id=ratings.product_id
        	WHERE 
			properties.diameter = $this->diameter AND
			properties.width = $this->width AND
			properties.pcd = $this->pcd AND
			properties.et = $this->et AND
			properties.type = $this->type AND
			properties.logo = $this->logo AND
			products.discount_price BETWEEN $this->from AND $this->to AND
			manufacturers.name_ IN ('$this->brand')
        ";
		$result = $this->_connection->query($sql_query);
		if($result->num_rows !== 0){
			$result_ = '';
			while( $result_ = $result->fetch_object() ){
				include "../TestProject/templates/products.php";
			}
		}else{
			echo '<div class="row center"><h2>Нет совпадений</h2>';
		}
	}
	/*Метод возвращает все записи*/
	public function read_all(){
		$sql_query = "SELECT * FROM properties LEFT JOIN products_properties ON properties.id=products_properties.properti_id
        LEFT JOIN products ON products_properties.product_id=products.id
        LEFT JOIN manufacturers ON products.manufacturer_id=manufacturers.id
        LEFT JOIN ratings ON products_properties.product_id=ratings.product_id";

        $result = $this->_connection->query($sql_query);
		if($result->num_rows !== 0){
			$result_ = '';
			while( $result_ = $result->fetch_object() ){
				include "../TestProject/templates/products.php";
			}
		}else{
			echo '<div class="row center"><h2>Нет совпадений</h2>';
		}

	}
}
