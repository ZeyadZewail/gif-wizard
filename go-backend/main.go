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

	r.GET("api/collections", controllers.GetCollections)
	r.POST("api/collections/create",controllers.CreateCollection)
	r.GET("api/collections/:id",controllers.GetCollectionByID)

	r.GET("api/gifs", controllers.GetGifs)
	r.POST("api/gifs/create",controllers.CreateGif)
	r.GET("api/gifs/:id",controllers.GetGifByID)

	r.Run(); // listen and serve on 0.0.0.0:PORT
}