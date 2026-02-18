import { useReducer } from 'react';
import { checkInReducer } from '../reducers/checkInReducer';
import type { CheckIn } from '../components/MoodBadge'; 

export function useCheckIns() {
    const [checkIns, dispatch] = useReducer(checkInReducer, []); 

   const addCheckIn = (checkIn: Omit<CheckIn, 'id' | 'timestamp'>) => {
       dispatch({ type: 'ADD_CHECK_IN', payload: checkIn });
   };

   const removeCheckIn = (id: string) => {
       dispatch({ type: 'REMOVE_CHECK_IN', payload: { id } });
   };

   const clearDay = (date: string) => {
       dispatch({ type: 'CLEAR_DAY', payload: { date } });
   };

   return { checkInActions: { addCheckIn, removeCheckIn, clearDay }, checkIns };
}
