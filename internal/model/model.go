package model

type Profile struct {
	ID       int    `json:"id"`
	Name     string `json:"name"`
	Title    string `json:"title"`
	Summary  string `json:"summary"`
	Email    string `json:"email"`
	Github   string `json:"github"`
	Linkedin string `json:"linkedin"`
}

type Experiences struct {
	ID          int    `json:"id"`
	Company     string `json:"company"`
	Role        string `json:"role"`
	Start_date  string `json:"start_date"`
	End_date    string `json:"end_date"`
	Description string `json:"description"`
}

type Projects struct {
	ID          int    `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Tech_stack  string `json:"tech_stack"`
	Repo_url    string `json:"repo_url"`
	Live_url    string `json:"live_url"`
}

type Skills struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Level string `json:"Level"`
}
