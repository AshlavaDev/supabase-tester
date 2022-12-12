import { useEffect, useState } from "react"
import supabase from "../supabaseClient";

const Homemade = () => {
  const[fetchError, setError] = useState(null);
  const[solarSystem, setSolarSystem] = useState(null);

  useEffect(() => {
    const fetchSolarSystem = async () => {
      const { data, error } = await supabase
        .from('solar_system')
        .select()

        if (error) {
          setError('Could not GET things in space');
          setSolarSystem(null);
          console.log(error);
        }

        if (data) {
          setSolarSystem(data);
          setError(null);
        }
    }

    fetchSolarSystem();
  }, [])

  return (
    <div className="page homemade">
      <h1>Solar System Bodies</h1>
      {fetchError && (<p>{fetchError}</p>)}
      {solarSystem && (
        <div className="solar-system">
          {solarSystem.map(body => (
              <p className={body.Type}>{body.Name}</p>
          ))}
        </div>
      )}

    </div>
  )

}

export default Homemade