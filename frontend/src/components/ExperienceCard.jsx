export default function ExperienceCard({ experience }) {
  return (
    <div style={{ 
      marginBottom: '20px', 
      padding: '15px', 
      border: '1px solid #ddd',
      borderRadius: '8px'
    }}>
      <h3>{experience.company}</h3>
      <p style={{ color: '#666', margin: '5px 0' }}>{experience.role}</p>
      <p>{experience.description}</p>
      <small style={{ color: '#999' }}>
        {new Date(experience.start_date).toLocaleDateString('id-ID')} - 
        {new Date(experience.end_date).toLocaleDateString('id-ID')}
      </small>
    </div>
  );
}