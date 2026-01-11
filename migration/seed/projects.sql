INSERT INTO projects (name, description, tech_stack, repo_url, live_url)
VALUES(
    'HelpDesk',
    'Sistem Helpdesk berbasis web dan ticketing yang memusatkan serta menyederhanakan permintaan layanan dari seluruh departemen, khususnya untuk menangani permasalahan IT dan General Affair (GA)',
    'CodeIgniter 4, Mysql',
    'https://github.com/FahrenAlfaqih/helpdeskapps',
    ''
)


-- psql -U postgres -d golang_api -f migration/seed/projects.sql
