import { useEffect, useState } from "react";
import { getProjects } from "../services/api";

export function useProjects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProjects = async() => {
            try{
                setLoading(true)
                const json = await getProjects()
                setProjects(Array.isArray(json.data) ? json.data : [])
            }catch(err){
                console.error(err)
                setError(err.message)
            }finally{
                setLoading(false)
            }
        };

        fetchProjects();
    }, []);

    return {projects, loading, error}
}