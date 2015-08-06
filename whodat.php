<?php

$lead = new Lead();
$lead->filter = "email";
print_r($lead->getData());

class Lead{
	private $host = "https://188-vdu-360.mktorest.com";
	private $clientId = "5ee2aa82-1cc7-4b52-bff0-ac1a5be1375e";
	private $clientSecret = "f2v0fQS9IB5pyOwzT0KTH4q0KsMOU4PA";//CHANGE ME
	public $filter;//what are we filterg
	public $fields;//array of fields to return

	public function getData(){
		$url = $this->host . "/rest/v1/leads.json?filterType=" . $this->filter . "&filterValues=webteam@davidsuzuki.org&fields=email,firstName,lastName,PostalCode&access_token=" . $this->getToken();
		$ch = curl_init($url);
		curl_setopt($ch,  CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('accept: application/json',));
		$response = curl_exec($ch);
		return $response;
	}

	private function getToken(){
		$ch = curl_init($this->host . "/identity/oauth/token?grant_type=client_credentials&client_id=" . $this->clientId . "&client_secret=" . $this->clientSecret);
		curl_setopt($ch,  CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('accept: application/json',));
		$response = json_decode(curl_exec($ch));
		curl_close($ch);
		$token = $response->access_token;
		return $token;
	}
	private static function csvString($fields){
		$csvString = "";
		$i = 0;
		foreach($fields as $field){
			if ($i > 0){
				$csvString = $csvString . "," . $field;
			}elseif ($i === 0){
				$csvString = $field;
			}
		}
		return $csvString;
	}
}
?>
