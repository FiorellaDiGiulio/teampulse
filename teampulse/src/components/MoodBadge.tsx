
export type Mood = "Good" | "Great" | "Okay" | "Tired" | "Stressed";

export type EnergyLevel = 1 | 2 | 3 | 4 | 5;

export interface CheckIn {
    id: string,
    name: string,
    mood: Mood,
    energyLevel: EnergyLevel,
    comment?: string,
    timestamp: Date
}

export interface DayStats {
    averageEnergy: number,
    moodDistribution: Record<Mood, number>,
    totalCheckIns: number
}

