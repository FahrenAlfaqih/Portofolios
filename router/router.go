package router

import (
	"portofolio/internal/config"
	"portofolio/internal/handler"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:5173"},
		AllowMethods: []string{"GET", "OPTIONS"},
		AllowHeaders: []string{"Origin", "Content-Type"},
	}))

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
