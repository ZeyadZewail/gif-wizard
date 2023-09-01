package models

import (
	"gorm.io/gorm"
)

type Collection struct{
	gorm.Model
	Name string
	Gifs []Gif `gorm:"many2many:collection_gifs;"`
}