export function formatToHourMinute(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    const hourPart = hours > 0 ? `${hours}h` : '';
    const minutePart = minutes > 0 ? `${minutes}m` : hours === 0 ? '0s' : '';
    
    return `${hourPart} ${minutePart}`;
}
