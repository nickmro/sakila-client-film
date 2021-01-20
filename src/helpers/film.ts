export const filmDuration = (duration: number): string => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return `${hours}h ${minutes}m`;
};

export default {
  filmDuration,
};
