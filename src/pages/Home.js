import supabase from "../supabaseClient"
import { useEffect, useState } from "react"

const Home = () => {

  const[fetchError, setError] = useState(null);
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      const { data, error } = await supabase
        .from('countries')
        .select()
        .eq('continent', 'Africa');

        if (error) {
          setError('Could not GET countries');
          setCountries(null);
          console.log(error);
        }

        if (data) {
          setCountries(data);
          setError(null);
        }
    }

    fetchCountries();
  }, [])

  return (
    
    <div className="page home">
      <h1>Countries of Africa</h1>
      {fetchError && (<p>{fetchError}</p>)}
      {countries && (
        <div className="countries">
          {countries.map(country => (
            <p>{country.name}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home