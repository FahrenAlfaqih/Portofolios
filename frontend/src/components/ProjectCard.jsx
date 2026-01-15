export default function ProjectCard({ project }) {
  return (
    <div style={{ 
      marginBottom: '20px', 
      padding: '15px', 
      border: '1px solid #ddd',
      borderRadius: '8px'
    }}>
      <h3>{project.name}</h3>
      <p style={{ color: '#666', margin: '5px 0' }}>{project.description}</p>
      <p>{project.tech_stack}</p>
      <small style={{ color: '#999' }}>
      </small>
    </div>
  );
}