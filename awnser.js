const arrayWithObjectsToConvert = [
  { unit: "in", value: 11, conversionTo: "cm" },
  { unit: "ft", value: 22, conversionTo: "cm" },
  { unit: "in", value: 22, conversionTo: "cm" },
]

const convert = ({ unit: from, value: currentValue, conversionTo: to }) => {
  const conversionValues = {
    m:  { cm: 100,  ft: 3.2808,   m: 1,       in: 39.37    },
    in: { cm: 2.54, ft: 0.083333, m: 39.37,   in: 1        },
    cm: { cm: 1,    ft: 0.032808, m: 0.01,    in: 0.3937   },
    ft: { cm: 2.54, ft: 0.083333, m: 0.30480, in: 30.48037 }
  }

  const currentValueToConvert = conversionValues[from][to]
  let result = currentValue * currentValueToConvert
  
  return result
}

const printConversions = (someObjectToConversions) => {
  someObjectToConversions.forEach((objectToConversion, index) => {
    console.log(
      `Input:`,
      `[ ${index} unit: ${objectToConversion.unit}, value: ${objectToConversion.value}, conversionTo: ${objectToConversion.conversionTo} ]`
    );
    let result = convert(objectToConversion)
    console.log(`Output:`, result);
  });
};

printConversions(arrayWithObjectsToConvert)
