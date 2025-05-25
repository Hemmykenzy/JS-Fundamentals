const times = parseInt(process.argv[2]);

if (isNaN(times)) {
  console.log('Missing number of occurrences');
} else if (times > 0) {
  let count = 0;
  let output = '';
  while (count < times) {
    output += 'C is fun\n';
    count++;
  }
  console.log(output.trim());
}