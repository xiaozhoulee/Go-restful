package main

import (
	_ "clothes/routers"
	"fmt"

	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	_ "github.com/go-sql-driver/mysql"
)

func init() {
	orm.RegisterDriver("mysql", orm.DRMySQL)
	//错误提示：must have one register DataBase alias named `default`
	//原因：RegisterDataBase方法返回错误，并没有成功注册default
	err := orm.RegisterDataBase("default", "mysql", "root@/clothes?charset=utf8")
	// orm.RunSyncdb("default", false, true) 创建表
	if err != nil {
		fmt.Println("未成功注册default")
	}
}

func main() {
	if beego.BConfig.RunMode == "dev" {
		beego.BConfig.WebConfig.DirectoryIndex = true
		beego.BConfig.WebConfig.StaticDir["/swagger"] = "swagger"
	}
	beego.Run()
}
