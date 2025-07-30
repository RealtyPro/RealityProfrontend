import { useQuery} from '@tanstack/react-query'
import { fetchTestimonialsList } from './TestimonialServices';
export const useTestimonialsList = (page:number) => {
    return useQuery({ queryKey: ['testimonialslist', ], queryFn: () =>  
      fetchTestimonialsList(page) });
  };