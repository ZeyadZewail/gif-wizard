package main

import (
	"C"
	"gif-wizard-backend/controllers"
	"gif-wizard-backend/initializers"

	"github.com/gin-gonic/gin"
)




func init(){
	initializers.LoadEnvVariables();
	initializers.ConnectToDB();
}

func main() {
	r := gin.Default()

	r.GET("/collections", controllers.GetCollections)
	r.POST("/collections/create",controllers.CreateCollection)
	r.GET("/collections/:id",controllers.GetCollectionByID)

	r.Run(); // listen and serve on 0.0.0.0:PORT
}