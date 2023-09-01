package initializers

import (
	"gif-wizard-backend/database/models"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectToDB(){
  var err error
  DB, err = gorm.Open(sqlite.Open("./database/db.db"), &gorm.Config{})

  if err != nil {
    panic("failed to connect database")
  }else {
    println("DB connected")
  }

  DB.AutoMigrate(&models.Collection{},&models.Gif{},&models.Tag{})

}