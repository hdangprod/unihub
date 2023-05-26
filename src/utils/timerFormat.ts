function TimerFormat(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const formattedSeconds = remainingSeconds % 60;

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const reformattedSeconds = String(formattedSeconds).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${reformattedSeconds}`;
}
export { TimerFormat };
