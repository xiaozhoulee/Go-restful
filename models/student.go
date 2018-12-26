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

func GetStudentsBySchool(school_id int) []*Students {
	//通过school_id和openid获取学生
	var students []*Students
	o := orm.NewOrm()
	//openid需要获取用户的openid
	o.QueryTable("students").Filter("school_id", school_id).Filter("openid", "123123").All(&students)
	return students
}

func InsertStudent(student *Students) bool {
	o := orm.NewOrm()
	_, err := o.Insert(student)
	if err == nil {
		return true
	} else {
		return false
	}

}

func UpdateStudent(student *Students) bool {
	o := orm.NewOrm()
	if o.Read(&Students{Id: student.Id}) == nil {
		if _, err := o.Update(student); err == nil {
			return true
		} else {
			fmt.Printf("error is : %v", err)
			return false
		}
	}
	return false
}

func DeleteStudent(id int) bool {
	o := orm.NewOrm()
	if _, err := o.Delete(&Students{Id: id}); err == nil {
		return true
	} else {
		fmt.Printf("error is : %v", err)
		return false
	}
}
