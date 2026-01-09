package router

import (
	"portofolio/internal/config"
	"portofolio/internal/handler"

	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	api := r.Group("/api/v1")
	{
		api.GET("/profile", handler.GetProfile)
		api.GET("/experiences", handler.GetExperiences)
		api.GET("/projects", handler.GetProjects)
		api.GET("/skills", handler.GetSkills)
	}

	r.Run(":" + config.GetEnv("APP_PORT", "8080"))

	return r
}
