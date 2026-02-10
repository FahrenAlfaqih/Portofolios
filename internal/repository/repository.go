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

func GetExperiences() ([]model.Experiences, error) {
	var experiences []model.Experiences

	query := `
	SELECT id, company, role, start_date, end_date, description
	FROM experiences ORDER BY start_date DESC`

	rows, err := database.DB.Query(query)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	for rows.Next() {
		var exp model.Experiences
		err := rows.Scan(
			&exp.ID,
			&exp.Company,
			&exp.Role,
			&exp.Start_date,
			&exp.End_date,
			&exp.Description,
		)

		if err != nil {
			return nil, err
		}

		experiences = append(experiences, exp)
	}

	if err = rows.Err(); err != nil {
		return nil, err
	}

	return experiences, nil
}

func GetProjects() ([]model.Projects, error) {
	var projects []model.Projects

	query := `
	SELECT id, name, description, tech_stack, repo_url, live_url, image_url
	FROM projects ORDER BY id ASC`

	rows, err := database.DB.Query(query)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	for rows.Next() {
		var proj model.Projects
		err := rows.Scan(
			&proj.ID,
			&proj.Name,
			&proj.Description,
			&proj.Tech_stack,
			&proj.Repo_url,
			&proj.Live_url,
			&proj.Image_url,
		)

		if err != nil {
			return nil, err
		}

		projects = append(projects, proj)
	}

	if err = rows.Err(); err != nil {
		return nil, err
	}

	return projects, nil
}

func GetSkills() ([]model.Skills, error) {
	var skills []model.Skills

	query := `
	SELECT id, name, level
	FROM skills ORDER BY id ASC`

	rows, err := database.DB.Query(query)

	if err != nil {
		return nil, err
	}

	defer rows.Scan()

	for rows.Next() {
		var skl model.Skills
		err := rows.Scan(
			&skl.ID,
			&skl.Name,
			&skl.Level,
		)

		if err != nil {
			return nil, err
		}

		skills = append(skills, skl)
	}
	if err = rows.Err(); err != nil {
		return nil, err
	}

	return skills, nil
}
