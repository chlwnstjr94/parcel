console.log('Hello Parcel!');

async function text() {
  const promise = Promise.resolve(123);
  console.log(await promise);
};
text();