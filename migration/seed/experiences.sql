INSERT INTO experiences (company, role, start_date, end_date, description)
VALUES(
    'PT. Bumi Siak Pusako',
    'Backend Developer',
    '2024-02-08',
    '2024-06-15',
    'Mengembangkan Sistem Monitoring Anggaran Perjalanan Dinas untuk menggantikan proses manual berbasis spreadsheet dalam pengajuan anggaran, pemrosesan, dan pelaporan serta  menangani berbagai permasalahan utama seperti tidak adanya pelacakan anggaran secara real-time'
)


-- psql -U postgres -d golang_api -f migration/seed/experiences.sql
