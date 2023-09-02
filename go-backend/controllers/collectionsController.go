package controllers

import (
	"gif-wizard-backend/database/models"
	"gif-wizard-backend/initializers"

	"github.com/gin-gonic/gin"
)


func CreateCollection (c *gin.Context){
	var body struct{
		Name string
	}

	c.Bind(&body)

	newCollection := models.Collection{Name: body.Name}

	result := initializers.DB.Create(&newCollection)

	if result.Error != nil{
		c.Status(400)
		return
	}

	c.JSON(200,gin.H{"response":newCollection})

}

func GetCollections (c *gin.Context) {
	var collections []models.Collection
	initializers.DB.Preload("Gifs").Find(&collections)

	c.JSON(200,gin.H{"response":collections})
}

func GetCollectionByID (c *gin.Context) {
	id := c.Param("id")

	var collection models.Collection
	initializers.DB.Preload("Gifs").First(&collection,id)

	c.JSON(200,gin.H{"response":collection})
	
}