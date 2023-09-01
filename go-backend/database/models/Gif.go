package models

import (
	"gorm.io/gorm"
)

type Gif struct{
	gorm.Model
	Name string
	Link string
	Tags []Tag `gorm:"many2many:gif_tags;"`
}