// @APIVersion 1.0.0
// @Title beego Test API
// @Description beego has a very cool tools to autogenerate documents for your API
// @Contact astaxie@gmail.com
// @TermsOfServiceUrl http://beego.me/
// @License Apache 2.0
// @LicenseUrl http://www.apache.org/licenses/LICENSE-2.0.html
package routers

import (
	"clothes/controllers"

	"github.com/astaxie/beego"
)

func init() {
	ns := beego.NewNamespace("/wechat",
		beego.NSNamespace("/schools",
			beego.NSRouter("/", &controllers.SchoolController{}),
			beego.NSRouter("/:id", &controllers.SchoolController{}, "get:Show"),
		),
		// beego.NSRouter("/schools", &controllers.SchoolController{}),
		// beego.NSRouter("/schools/:id", &controllers.SchoolController{}, "get:Show"),
		beego.NSRouter("/orders", &controllers.OrderController{}),
		beego.NSRouter("/students", &controllers.StudentController{}),
	)
	beego.AddNamespace(ns)
}
