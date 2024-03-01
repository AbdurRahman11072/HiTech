import { useQuery } from "@tanstack/react-query";

const manageuserHook = () => {
    const {data, isFetching,error,refetch} = useQuery({
        queryKey:['user'],
        queryFn: async () =>{
            const data = await fetch('https://hi-tech-server-weld.vercel.app/user')
            return await data.json()
        }
    })
    
    return {data,isFetching,error,refetch}
        
   
}

export default manageuserHook

// https://hi-tech-server-weld.vercel.app/user