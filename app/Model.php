<?php
class Model{
	public $connect;
	public $diameter;
	public $weight;
	public $pcd;
	public $brand;
	public $et;
	public $type;
	public $logo;
	public $from;
	public $to;

	public function read($connect, $params){
		$this->connect = $connect;
		$this->diameter = $params['diameter'];
		$this->width = $params['width'];
		$this->pcd = $params['pcd'];
		$this->brand = $params['brand'] ? $params['brand']: "barum','fulda','lassa','bridgestone";
		$this->et = $params['et'];
		$this->type = $params['type'];
		$this->logo = $params['logo'];
		$this->from = $params['from'];
		$this->to = $params['to'];
		//var_dump($this->brand);

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
       // var_dump($sql_query);
		$result = $connect->query($sql_query);
		if($result->num_rows !== 0){
		$result_ = '';
		while( $result_ = $result->fetch_object() ){
					/*echo $result_->id;
					echo $result_->name;
					echo $result_->diameter;
					echo $result_->width;
					echo $result_->pcd;
					echo $result_->et;
					echo $result_->type;
					echo $result_->logo;
					echo '<br>';*/
					var_dump($result_);
		}
	}else{
		echo "Нет совпадений";
	}


	}
}
