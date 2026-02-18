import { useMemo } from 'react';
import type { CheckIn, DayStats, Mood } from '../components/MoodBadge';

export function useDayStats(checkIns: CheckIn[]): DayStats {
    return useMemo(() => {
        const totalCheckIns = checkIns.length;
        const  averageEnergy = totalCheckIns > 0 ? checkIns.reduce((sum, checkIn) => sum + checkIn.energyLevel, 0) / totalCheckIns : 0;
        const  moodDistribution: Record<Mood, number> = {
            Good: 0,
            Great: 0,
            Okay: 0,
            Tired: 0,
            Stressed: 0,
        };

        checkIns.forEach(checkIn => {
            moodDistribution[checkIn.mood] = (moodDistribution[checkIn.mood] || 0) + 1;
        });

        return {
            totalCheckIns,
            averageEnergy,
            moodDistribution
        };

    }, [checkIns]);
}
