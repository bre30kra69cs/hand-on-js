export const slice = (target = '', start?: number, end?: number): string => {
  let result = '';
  let parsedStart = start ?? 0;
  let parsedEnd = end ?? target.length;

  if (isNaN(parsedStart)) {
    parsedStart = 0;
  }

  if (!Number.isFinite(parsedStart) && parsedStart > 0) {
    parsedStart = target.length;
  }

  if (!Number.isFinite(parsedStart) && parsedStart < 0) {
    parsedStart = 0;
  }

  if (parsedStart > 0) {
    parsedStart = Math.floor(parsedStart);
  } else if (parsedStart < 0) {
    parsedStart = Math.ceil(parsedStart);
  } else {
    parsedStart = 0;
  }

  if (parsedStart < 0) {
    parsedStart = target.length + parsedStart;
  }

  if (parsedStart <= 0) {
    parsedStart = 0;
  }

  if (isNaN(parsedEnd)) {
    parsedStart = 0;
  }

  if (!Number.isFinite(parsedEnd) && parsedEnd > 0) {
    parsedEnd = target.length;
  }

  if (!Number.isFinite(parsedEnd) && parsedEnd < 0) {
    parsedEnd = 0;
  }

  if (parsedEnd > 0) {
    parsedEnd = Math.floor(parsedEnd);
  } else if (parsedEnd < 0) {
    parsedEnd = Math.ceil(parsedEnd);
  } else {
    parsedEnd = 0;
  }

  if (parsedEnd < 0) {
    parsedEnd = target.length + parsedEnd;
  }

  if (parsedEnd <= 0) {
    parsedEnd = 0;
  }

  if (parsedStart >= parsedEnd) {
    return '';
  }

  for (let i = parsedStart; i <= parsedEnd - 1; i += 1) {
    if (target[i]) {
      result += target[i];
    } else {
      break;
    }
  }

  return result;
};
