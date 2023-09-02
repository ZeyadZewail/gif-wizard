package controllers

import (
	"gif-wizard-backend/database/models"
	"gif-wizard-backend/initializers"
	"strconv"

	"github.com/gin-gonic/gin"
)


func CreateGif (c *gin.Context){
	var body struct{
		Name string
		Link string
		Collection string
	}

	c.Bind(&body)

	newGif := models.Gif{Name: body.Name,Link: body.Link}

	result := initializers.DB.Create(&newGif)
	var associatedCollection models.Collection

	collectionID,err := strconv.Atoi(body.Collection)
	if err != nil {
        // ... handle error
        panic(err)
    }

	initializers.DB.First(&associatedCollection,collectionID)
	initializers.DB.Model(&associatedCollection).Association("Gifs").Append(&newGif);
	initializers.DB.Preload("Collections").First(&newGif,newGif.ID)

	if result.Error != nil{
		c.Status(400)
		return
	}

	c.JSON(200,gin.H{"response":newGif})

}

func GetGifs (c *gin.Context) {
	var Gifs []models.Gif
	initializers.DB.Preload("Collections").Find(&Gifs)

	c.JSON(200,gin.H{"response":Gifs})
}

func GetGifByID (c *gin.Context) {
	id := c.Param("id")

	var gif models.Gif
	initializers.DB.Preload("Collections").First(&gif,id)

	c.JSON(200,gin.H{"response":gif})
	
}