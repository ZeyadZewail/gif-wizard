package models

import "gorm.io/gorm"

type Collection struct{
	gorm.Model
	Name string
}