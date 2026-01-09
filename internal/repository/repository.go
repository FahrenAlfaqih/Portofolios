package repository

import (
	"database/sql"
	"portofolio/internal/database"
	"portofolio/internal/model"
)

func GetProfile() (model.Profile, error) {
	var profile model.Profile

	query := `
	SELECT id, name, title, summary, email, github, linkedin
	FROM profile
	LIMIT 1`

	row := database.DB.QueryRow(query)
	err := row.Scan(
		&profile.ID,
		&profile.Name,
		&profile.Title,
		&profile.Summary,
		&profile.Email,
		&profile.Github,
		&profile.Linkedin,
	)

	if err != nil {
		if err == sql.ErrNoRows {
			return profile, nil
		}
		return profile, err
	}

	return profile, nil
}

func GetExperiences() (model.Experiences, error) {
	var experiences model.Experiences

	query := `
	SELECT id, company, role, start_date, end_date, description
	FROM experiences
	LIMIT 1`

	row := database.DB.QueryRow(query)
	err := row.Scan(
		&experiences.ID,
		&experiences.Company,
		&experiences.Role,
		&experiences.Start_date,
		&experiences.End_date,
		&experiences.Description,
	)

	if err != nil {
		if err == sql.ErrNoRows {
			return experiences, nil
		}
		return experiences, err
	}

	return experiences, nil
}

func GetProjects() (model.Projects, error) {
	var projects model.Projects

	query := `
	SELECT id, name, description, tech_stack, repo_url, live_url
	FROM projects
	LIMIT 1`

	row := database.DB.QueryRow(query)
	err := row.Scan(
		&projects.ID,
		&projects.Name,
		&projects.Description,
		&projects.Tech_stack,
		&projects.Repo_url,
		&projects.Live_url,
	)

	if err != nil {
		if err == sql.ErrNoRows {
			return projects, nil
		}
		return projects, err
	}

	return projects, nil
}

func GetSkills() (model.Skills, error) {
	var skills model.Skills

	query := `
	SELECT id, name, level
	FROM skills
	LIMIT 1`

	row := database.DB.QueryRow(query)
	err := row.Scan(
		&skills.ID,
		&skills.Name,
		&skills.Level,
	)

	if err != nil {
		if err == sql.ErrNoRows {
			return skills, nil
		}
		return skills, err
	}

	return skills, nil
}
