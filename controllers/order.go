package controllers

import (
	"github.com/astaxie/beego"
)

type OrderController struct {
	beego.Controller
}

func (c OrderController) Get() {
	c.Data["json"] = "hello order"
	c.ServeJSON()
}
