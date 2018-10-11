<?php

class DB
{
	private $_connection;
	private static $_instance;
	
	public static function getInstance() 
	{
		if(!self::$_instance) {
			self::$_instance = new self();
		}
		return self::$_instance;
	}
	
	private function __construct() 
	{ 
		$this->_connection = new mysqli(Config::$host, Config::$user, 
		Config::$password, Config::$database);
	

		if(mysqli_connect_error()) {
			trigger_error("Failed to conencto to MySQL: " . mysql_connect_error(),
				 E_USER_ERROR);
		}
	}
	
	private function __clone() 
	{ }

	public function getConnection() 
	{
		return $this->_connection;
	}

	public function __destruct() 
	{
		return $this->closeConnection();
	}

	public function closeConnection() 
	{
		return mysqli_close($this->_connection);

	}

}
