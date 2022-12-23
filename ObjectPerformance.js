// Validate assign in object with any condition
let i, x;

console.time("object assign - create object with spread");
for (i = 0; i < 1e2; i++)
  x = {
    prop: "default",
    ...(true && { prop2: "texto aqui" }),
  };
console.timeEnd("object assign - create object with spread");

console.time(
  "object assign - create object with property and condition to fill value"
);
for (i = 0; i < 1e2; i++)
  x = {
    prop: "default",
    prop2: true ? "texto aqui 2" : undefined,
  };
console.timeEnd(
  "object assign - create object with property and condition to fill value"
);

console.time("object assign - create object with Object.assign default");
let tempData = {
  prop2: true ? "texto aqui 3" : undefined,
};
for (i = 0; i < 1e2; i++)
  Object.assign(
    {
      prop: "default",
    },
    tempData
  );
console.timeEnd("object assign - create object with Object.assign default");

console.time(
  "object assign - create property with condition after initial object is created"
);
for (i = 0; i < 1e2; i++) {
  x = {
    prop: "default",
  };
  if (tempData.prop2) {
    x.prop2 = tempData.prop2;
  }
}
console.timeEnd(
  "object assign - create property with condition after initial object is created"
);
