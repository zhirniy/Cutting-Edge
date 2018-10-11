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
		$this->brand = $params['brand'];
		$this->et = $params['et'];
		$this->type = $params['type'];
		$this->logo = $params['logo'];
		$this->from = $params['from'];
		$this->to = $params['to'];

		$sql_query = "SELECT * FROM `properties` WHERE 
			diameter = $this->diameter AND
			width = $this->width AND
			pcd = $this->pcd AND
			et = $this->et AND
			type = $this->type AND
			logo = $this->logo
		";

		$result = $connect->query($sql_query);
		if($result->num_rows !== 0){
		$result_ = '';
		while( $result_ = $result->fetch_object() ){
					echo $result_->id;
					echo $result_->name;
					echo $result_->diameter;
					echo $result_->width;
					echo $result_->pcd;
					echo $result_->et;
					echo $result_->type;
					echo $result_->logo;
					echo '<br>';
		}
	}else{
		echo "Нет совпадений";
	}


	}
}
