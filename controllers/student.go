package controllers

import (
	"clothes/models"

	"github.com/astaxie/beego"
)

type StudentController struct {
	beego.Controller
}

func (c *StudentController) Get() {

	c.Data["json"] = models.GetAllStudents()
	c.ServeJSON()
}

func (c *StudentController) Post() {
	//添加学生信息
	// var student models.Students
	// student.Name = "test"
	// student.Grade = "1"
	// student.Is_unified = 1
	// student.Parent_tel = "123123123"
	// student.School_id = 1
	// student.Sex = "男"
	// student.Clazz = "1"
	// student.Openid = "asdf121313123123123safasf12312313"
	// student.Created_at = time.Now()
	// student.Updated_at = time.Now()
	// r := models.InsertStudent(&student)
}

func (c *StudentController) Put() {

}

func (c *StudentController) Delete() {

}

func (c *StudentController) Show() {

}
