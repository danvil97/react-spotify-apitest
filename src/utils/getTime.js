export function getTimeFromMs(trackLengthInMs) {
  const trackLengthInSec = trackLengthInMs / 1000;
  const minutes = Math.trunc(trackLengthInSec / 60);
  const seconds = Math.round(trackLengthInSec - minutes * 60);

  return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}
