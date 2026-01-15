package handler

import (
	"net/http"
	"portofolio/internal/service"

	"github.com/gin-gonic/gin"
)

func GetProfile(c *gin.Context) {

	profile, err := service.GetProfile()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "failed to fetch profile",
		})

		return
	}

	c.JSON(http.StatusOK, profile)
}

func GetExperiences(c *gin.Context) {
	experiences, err := service.GetExperiences()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "failed to fetch experiences",
		})

		return
	}
	c.JSON(http.StatusOK, gin.H{
		"data": experiences,
	})
}

func GetProjects(c *gin.Context) {
	projects, err := service.GetProjects()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "failed to fetch projects",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"data": projects,
	})

}

func GetSkills(c *gin.Context) {
	skills, err := service.GetSkills()

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "failed to fetch skills",
		})

		return
	}

	c.JSON(http.StatusOK, skills)
}
