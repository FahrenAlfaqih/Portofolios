package main

import (
	"portofolio/internal/config"
	"portofolio/internal/database"
	"portofolio/router"
)

func main() {
	config.LoadEnv()
	database.Connect()
	router.SetupRouter()

}
