// import { useEffect, useState } from "react";
// import { getExperiences } from "../services/api";

// export function useExperiences() {
//       const [experiences, setExperiences] = useState([]);
//       const [loading, setLoading] = useState(true);
//       const [error, setError] = useState(null);

//       useEffect(() => {
//         const FetchExperiences = async () => {
//             try {
//                 setLoading(true);
//                 const json = await getExperiences();
//                 setExperiences(Array.isArray(json.data) ? json.data : []);
//             }catch (err){
//             console.error(err)
//             setError(err.message)
//             } finally {
//                 setLoading(false)
//             }
//         };

//         FetchExperiences();
//       }, []);

//       return { experiences, loading, error}
// }

import { useEffect, useState } from "react";
import { experiences as staticExperiences } from "../data/experiences";

export function useExperiences() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    // setLoading(true);
    setTimeout(() => {
      setExperiences(staticExperiences);
      setLoading(false);
    }, 300);
  }, []);

  return { experiences, loading, error };
}
