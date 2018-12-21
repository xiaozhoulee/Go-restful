package models

import (
	"fmt"
	"time"

	"github.com/astaxie/beego/orm"
)

type Schools struct {
	Id         int
	Name       string
	Type       string
	Is_unified int
	Created_at time.Time
	Updated_at time.Time
}

func init() {
	orm.RegisterModel(new(Schools)) //不注册模型，不能访问该表
}

func GetAllSchools() map[string][]*Schools {
	schools := make(map[string][]*Schools)
	var primary []*Schools
	var middle []*Schools
	var high []*Schools
	o := orm.NewOrm()
	o.QueryTable("schools").Filter("type", "primary").All(&primary)
	o.QueryTable("schools").Filter("type", "middle").All(&middle)
	o.QueryTable("schools").Filter("type", "high").All(&high)
	schools["primary"] = primary
	schools["middle"] = middle
	schools["high"] = high
	return schools
}

func InsertSchool(school *Schools) bool {
	o := orm.NewOrm()
	_, err := o.Insert(school)
	if err == nil {
		return true
	} else {
		fmt.Printf("format:%v", err)
		return false
	}
}

func UpdateSchool(school *Schools) bool {
	o := orm.NewOrm()
	if o.Read(&Schools{Id: school.Id}) == nil {
		//设置属性值的对应关系...
		if _, err := o.Update(school); err == nil {
			return true
		} else {
			fmt.Printf("error:%v", err)
			return false
		}
	}
	return false
}

func DeleteSchool(id int) bool {
	o := orm.NewOrm()

	if num, err := o.Delete(&Schools{Id: id}); err == nil {
		fmt.Printf("id的值是：%v", num)
		//num为0，说明没有删除数据
		return true
	} else {
		return false
	}

}

// func GetAllSchools() []*Schools {

// o := orm.NewOrm()
// school := Schools{Id: 1}
// o.Read(&school)
// fmt.Println(school.Name, school.Type)
//通过表名获取QuerySeter对象
// var schools []*Schools
// qs := o.QueryTable("schools")
// num, err := o.QueryTable("schools").All(&schools)
// fmt.Printf("Returned Rows Num: %v, %s \n", num, err)
// fmt.Printf("Returned Rows Num: %v", schools[0])
// return schools
//也可以直接使用对象获取QuerySeter对象
// school := new(Schools)
// qs = o.QueryTable(school)
// }
