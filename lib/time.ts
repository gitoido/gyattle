function padStart(number: number, maxLength: number): string {
  return number.toString().padStart(maxLength, '0');
}

export function formatTime(timeInMiliseconds: number): string {
  const hours = Math.floor((timeInMiliseconds / 60 / 60 / 1000) % 24);
  const minutes = Math.floor((timeInMiliseconds / 60 / 1000) % 60);
  const seconds = Math.floor((timeInMiliseconds / 1000) % 60);

  // 00:00:00
  return `${padStart(hours, 2)}:${padStart(minutes, 2)}:${padStart(seconds, 2)}`;
}

export function elapsed(startDate: Date, endDate: Date): number {
  return endDate.getTime() - startDate.getTime();
}
