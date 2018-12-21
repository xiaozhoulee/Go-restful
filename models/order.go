package models

import "time"

type Orders struct {
	Id           int
	Code         string
	Clothes_type string
	Clothes_size string
	State        int
	Name         string
	Tel          string
	Address      string
	Body         string
	Quantity     int
	Unit_price   float32
	Total_price  float32
	Openid       string
	Created_at   time.Time
	Updated_at   time.Time
	School_id    int
	Student_id   int
}

func GetAllOrders() []*Orders {
	var orders []*Orders

	return orders
}

func InsertOrder() bool {

	return true
}

func UpdateOrder() bool {

	return true
}

func DeleteOrder() bool {

	return true
}
