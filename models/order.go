package models

import (
	"fmt"
	"time"

	"github.com/astaxie/beego/orm"
)

type Orders struct {
	Id           int
	Code         string
	Clothes_type string
	Clothes_size string
	/*
		state:
		* 0 补丁 未选择送货or自取【 请填写地址】
		* 1 补丁 邮寄【去支付】 有地址信息
		* 2 补丁 自取【去支付】 无地址信息
		* 3 统购【 去支付】     无地址信息
	*/
	State       int
	Name        string
	Tel         string
	Address     string
	Body        string
	Quantity    int
	Unit_price  float32
	Total_price float32
	Openid      string
	Created_at  time.Time
	Updated_at  time.Time
	School_id   int
	Student_id  int
}

func init() {
	orm.RegisterModel(new(Orders))
}

func GetAllOrders() []*Orders {
	var orders []*Orders
	o := orm.NewOrm()
	o.QueryTable("orders").Filter("openid", "123123").All(&orders)
	return orders
}

func InsertOrder(order *Orders) bool {
	o := orm.NewOrm()
	if _, err := o.Insert(order); err == nil {
		return true
	} else {
		fmt.Printf("error is : %v", err)
		return false
	}
}

func UpdateOrder(order *Orders) bool {
	o := orm.NewOrm()
	if o.Read(&Orders{Id: order.Id}) == nil {
		if _, err := o.Update(order); err == nil {
			return true
		} else {
			fmt.Printf("error is : %v", err)
			return false
		}
	}
	return false
}

func DeleteOrder(id int) bool {
	o := orm.NewOrm()
	if _, err := o.Delete(&Orders{Id: id}); err == nil {
		return true
	} else {
		fmt.Printf("error is : %v", err)
		return false
	}
}
