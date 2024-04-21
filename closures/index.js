function outerFunc() {
  let count = 0;

  function innerFunc() {
    console.log("count inc to " + count++);
  }
  return innerFunc;
}

const closure = outerFunc();

closure();
closure();
closure();
closure();
