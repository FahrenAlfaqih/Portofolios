export const getExperiences = async () => {
  const res = await fetch("http://localhost:8080/api/v1/experiences");
  if (!res.ok) throw new Error("Failed");
  return res.json();
};

export const getProjects = async () => {
  const res = await fetch("http://localhost:8080/api/v1/projects");
  if (!res.ok) throw new Error("Failed");
  return res.json();
};