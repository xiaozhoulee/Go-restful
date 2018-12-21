package controllers

import (
	"clothes/models"
	"encoding/json"
	"fmt"
	"time"

	"github.com/astaxie/beego"
)

type SchoolController struct {
	beego.Controller
}

/*
	method:get
	url:http://id/wechat/schools
*/
func (c *SchoolController) Get() {
	c.Data["json"] = models.GetAllSchools()
	c.ServeJSON()
}

/*
	method:post
	url:http://id/wechat/schools
	request-body:{
		"name":"测试高中2",
		"type":"high",
		"is_unified":1
	}
*/
func (c *SchoolController) Post() {
	var school models.Schools
	json.Unmarshal(c.Ctx.Input.RequestBody, &school)
	school.Created_at = time.Now()
	school.Updated_at = time.Now()
	fmt.Printf("school%v", school)
	c.Data["json"] = models.InsertSchool(&school)
	c.ServeJSON()
}

/*
	method:put
	url:http://id/wechat/schools/:id
	request-body:{
		"id":2,
		"name":"测试高中2",
		"type":"high",
		"is_unified":1
	}
*/
func (c *SchoolController) Put() {
	var school models.Schools
	json.Unmarshal(c.Ctx.Input.RequestBody, &school)
	// id := c.Ctx.Input.Param(":id") //获取\:id的参数
	school.Created_at = time.Now()
	school.Updated_at = time.Now()
	c.Data["json"] = models.UpdateSchool(&school)
	c.ServeJSON()
}

/*
	method:delete
	url:http://id/wechat/schools
	request-body:{id:n}
*/
func (c *SchoolController) Delete() {
	var v map[string]int
	json.Unmarshal(c.Ctx.Input.RequestBody, &v)
	id := v["id"]
	c.Data["json"] = models.DeleteSchool(id)
	c.ServeJSON()
}

/*
	method:get
	url:http://id/wechat/schools/:id
*/
func (c *SchoolController) Show() {
	id := c.Ctx.Input.Param(":id") //获取\:id的参数
	fmt.Printf("Show方法id:%v", id)
}
