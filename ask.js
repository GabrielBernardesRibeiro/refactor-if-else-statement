const text = [
  { unit: "in", value: 11, conversionto: "cm" },
  { unit: "ft", value: 22, conversionto: "cm" },
  { unit: "in", value: 22, conversionto: "cm" },
];

let result = 0;

for (let i = 0; i < text.length; i++) {
  console.log(`Input:`);
  console.log(
    `${i} unit:${text[i].unit}, value:${text[i].value}, conversionto:${text[i].conversionto}`
  );

  const from = text[i].unit;
  const val = text[i].value;
  const to = text[i].conversionto;

  //Convert from in to other
  if (from === "in" && to === "cm") {
    result = val * 2.54;
  } else if (from === "in" && to === "ft") {
    result = val * 0.083333;
  } else if (from === "in" && to === "m") {
    result = val / 39.37;
  } else if (from === "in" && to === "in") {
    result = from;
  }

  //Convert from cm to other
  if (from === "cm" && to === "in") {
    result = val * 0.3937;
  } else if (from === "cm" && to === "ft") {
    result = val * 0.032808;
  } else if (from === "cm" && to === "m") {
    result = val / 100;
  } else if (from === "cm" && to === "cm") {
    result = from;
  }

  //Convert from Meters to other
  if (from === "m" && to === "in") {
    result = val * 39.37;
  } else if (from === "m" && to === "ft") {
    result = val * 3.2808;
  } else if (from === "m" && to === "cm") {
    result = val / 0.01;
  } else if (from === "m" && to === "m") {
    result = from;
  }

  //Convert from Feet to other
  if (from === "ft" && to === "in") {
    result = val * 12;
  } else if (from === "ft" && to === "m") {
    result = val / 3.2808;
  } else if (from === "ft" && to === "cm") {
    result = val / 0.032808;
  } else if (from === "ft" && to === "ft") {
    result = from;
  }

  console.log(`Output:`, result);
}
