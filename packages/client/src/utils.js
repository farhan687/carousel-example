export const getNextIndex = (activeIndex, total) => (
  total > activeIndex + 1 ? activeIndex + 1 : 0
);

export const getPrevIndex = (activeIndex, total) => (
  activeIndex > 0 ? activeIndex - 1 : total - 1
);

export const groupDataInBatch = (data, size) => (
  data.reduce((batches, item) => {
    const previousBatch = batches[batches.length - 1];
    const hasSpace = previousBatch.length < size;
    if (hasSpace) {
      previousBatch.push(item);
      return batches;
    }
    return [
      ...batches,
      [item],
    ];
  }, [[]])
);

export default getNextIndex;
