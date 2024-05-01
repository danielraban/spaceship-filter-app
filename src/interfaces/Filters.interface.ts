export interface Filters {
    colors: string[];
    colorMode: 'all' | 'any' | 'none';
    minSpeed?: number;
    maxSpeed?: number;
    hasPulseLaser?: boolean;
    speedCriteria?: 'less' | 'more' | 'between';
}