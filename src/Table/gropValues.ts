const  groupValues = (values: string[], titlesLength: number) => {
    let temporaryArray: string[] = [];
    const groupedValues: string[][] = [];
    for (let i = 0; i <= values.length; i++) {
      if (i % titlesLength === 0 && i !== 0) {
        groupedValues.push(temporaryArray);
        temporaryArray = [];
        temporaryArray.push(values[i]);
      } else {
        temporaryArray.push(values[i]);
      }
    }
    return groupedValues;
  };
export default groupValues; 