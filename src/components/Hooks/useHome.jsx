import { useQuery } from "@tanstack/react-query";

const useHome = () => {
    const {product, isFetching,error,refetch} = useQuery({
        queryKey:['user'],
        queryFn: async () =>{
            const product = await fetch('https://hi-tech-server-weld.vercel.app/product')
            return await product.json()
        }
    })
    
    return {product,isFetching,error,refetch}
        
   
}

export default useHome