package service

import (
	"portofolio/internal/model"
	"portofolio/internal/repository"
)

func GetProfile() (model.Profile, error) {
	return repository.GetProfile()
}
func GetExperiences() (model.Experiences, error) {
	return repository.GetExperiences()
}
func GetProjects() (model.Projects, error) {
	return repository.GetProjects()
}
func GetSkills() (model.Skills, error) {
	return repository.GetSkills()
}
