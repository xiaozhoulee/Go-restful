package controllers

import (
	"clothes/models"
	"encoding/json"
	"strconv"
	"time"

	"github.com/astaxie/beego"
)

type StudentController struct {
	beego.Controller
}

/*
	method:get
	url:http://id/wechat/students
*/
func (c *StudentController) Get() {
	//通过用户和学校获取学生信息
	id := c.GetString("school_id")
	if _id, err := strconv.Atoi(id); err == nil {
		c.Data["json"] = models.GetStudentsBySchool(int(_id))
	} else {
		c.Data["json"] = "请输入正确的学校id"
	}
	c.ServeJSON()
}

/*
	method:put
	url:http://id/wechat/schools/:id
	request-body:{
			"Name" : "小明",
			"Grade" : "1",
			"Is_unified" : 1,
			"Parent_tel" : "123123123",
			"School_id" : 1,
			"Sex" : "男",
			"Clazz" : "1",
			"Openid" : "asdf121313123123123safasf12312313"
		}
*/
func (c *StudentController) Post() {
	//添加学生信息
	var student models.Students
	json.Unmarshal(c.Ctx.Input.RequestBody, &student)
	student.Created_at = time.Now()
	student.Updated_at = time.Now()
	c.Data["json"] = models.InsertStudent(&student)
	c.ServeJSON()

}

func (c *StudentController) Put() {
	var student models.Students
	json.Unmarshal(c.Ctx.Input.RequestBody, &student)
	student.Created_at = time.Now()
	student.Updated_at = time.Now()
	c.Data["json"] = models.UpdateStudent(&student)
	c.ServeJSON()
}

func (c *StudentController) Delete() {
	var v map[string]int
	json.Unmarshal(c.Ctx.Input.RequestBody, &v)
	id := v["id"]
	c.Data["json"] = models.DeleteStudent(id)
	c.ServeJSON()
}

func (c *StudentController) Show() {

}
