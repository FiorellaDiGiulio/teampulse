import type{ CheckIn } from '../components/MoodBadge'; 

export type CheckInAction = 
| { type: 'ADD_CHECK_IN', payload: Omit<CheckIn, 'id' | 'timestamp'> }
| { type: 'REMOVE_CHECK_IN', payload: { id: string } }
| { type: 'CLEAR_DAY', payload: { date: string } }

export function checkInReducer(state: CheckIn[], action: CheckInAction): CheckIn[] {
    switch (action.type) {
      
        case 'ADD_CHECK_IN':
            return [...state, { ...action.payload, id: generateId(), timestamp: new Date() }];

        case 'REMOVE_CHECK_IN':
            return state.filter(checkIn => checkIn.id !== action.payload.id);

        case 'CLEAR_DAY':
            return state.filter(checkIn => checkIn.timestamp.toDateString() !== action.payload.date);

        default:
            return state;
    }
};
