package models

import (
	"fmt"
	"time"

	"github.com/astaxie/beego/orm"
)

type Students struct {
	Id         int
	Name       string
	Parent_tel string
	Sex        string
	Grade      string
	Clazz      string
	Is_unified int
	Openid     string
	Created_at time.Time
	Updated_at time.Time
	School_id  int
}

func init() {
	orm.RegisterModel(new(Students))
}

func GetAllStudents() []*Students {
	var students []*Students
	o := orm.NewOrm()
	o.QueryTable("students").All(&students)
	return students
}

func InsertStudent(student *Students) bool {
	o := orm.NewOrm()
	fmt.Printf("传入的学生对象是：%v", student)
	_, err := o.Insert(student)
	if err == nil {
		return true
	} else {
		return false
	}

}

func UpdateStudent() bool {
	return true
}

func DeleteStudent() bool {

	return true
}
