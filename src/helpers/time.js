export const secondToTime = timeInSeconds => {
  const pad = (num, size) => {
    return ('000' + num).slice(size * -1);
  };
  const time = parseFloat(timeInSeconds).toFixed(3);
  const hours = Math.floor(time / 60 / 60);
  const minutes = Math.floor(time / 60) % 60;
  const seconds = Math.floor(time - minutes * 60);

  return `${pad(hours, 2) !== '00' ? `${pad(hours, 2)}h` : ''} ${pad(
    minutes,
    2,
  )}mn ${pad(seconds, 2)}s`;
};
