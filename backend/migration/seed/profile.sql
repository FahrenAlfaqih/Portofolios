INSERT INTO profile (name, title, summary, email, github, linkedin)
VALUES (
    'Fahren Al Faqih',
    'Backend Engineer',
    'Backend engineer focusing on Go, clean archi, and scalable API',
    'fahren66@gmail.com',
    'https://github.com/FahrenAlfaqih',
    'https://www.linkedin.com/in/fahren-alfaqih/'
);



-- psql -U postgres -d golang_api -f migration/seed/profile.sql
