package controllers

import (
	"clothes/models"
	"encoding/json"
	"time"

	"github.com/astaxie/beego"
)

type OrderController struct {
	beego.Controller
}

func (c *OrderController) Get() {
	c.Data["json"] = models.GetAllOrders()
	c.ServeJSON()
}

/*
	{
		"Code":"D123123123",
		"Clothes_type":"冬装",
		"Clothes_size":"180",
		"State":3,
		"Name":"小明",
		"Tel":"13511112222",
		"Address":"北京市",
		"Body":"全套",
		"Quantity":2,
		"Unit_price":3.14,
		"Total_price":6.28,
		"Openid":"abc123123",
		"School_id":1,
		"Student_id":1
	}
*/
func (c *OrderController) Post() {
	var order models.Orders
	json.Unmarshal(c.Ctx.Input.RequestBody, &order)
	order.Created_at = time.Now()
	order.Updated_at = time.Now()
	c.Data["json"] = models.InsertOrder(&order)
	c.ServeJSON()
}

func (c *OrderController) Put() {
	var order models.Orders
	json.Unmarshal(c.Ctx.Input.RequestBody, &order)
	order.Created_at = time.Now()
	order.Updated_at = time.Now()
	c.Data["json"] = models.UpdateOrder(&order)
	c.ServeJSON()
}

func (c *OrderController) Delete() {
	var v map[string]int
	json.Unmarshal(c.Ctx.Input.RequestBody, &v)
	id := v["id"]
	c.Data["json"] = models.DeleteOrder(id)
	c.ServeJSON()
}

func (c *OrderController) Show() {

}
