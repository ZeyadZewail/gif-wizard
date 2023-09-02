package models

import (
	"gorm.io/gorm"
)

type Gif struct{
	gorm.Model
	Name string
	Link string
	Collections []Collection `gorm:"many2many:collections_gifs;"`
	Tags []Tag `gorm:"many2many:gif_tags;"`
}