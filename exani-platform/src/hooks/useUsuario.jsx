import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../supabase.js"



function useUsuario(){
    const [usuario,setUsuario] = useState(null)
    const navigate = useNavigate()

    useEffect(() => 
    {
        async function cargarAlgo()
         {
            const { data } = await supabase.auth.getSession()
            if (data.session) 
            {
                setUsuario(data.session.user)
            } 
            else 
            {
                
            }
        }
        cargarAlgo()

        const{data:listener} = supabase.auth.onAuthStateChange((evento,session) => {
            setUsuario(session ? session.user :null)
        })

        return () => listener.subscription.unsubscribe()
    }, [])


    return usuario


}


export default  useUsuario
