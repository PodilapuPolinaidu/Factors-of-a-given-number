const num = prompt("Enter the value");
document.write(`The factors of ${num}<br>`);
for (let i = 1; i <= num; i++)
{
  if (num % i == 0) {
    document.write(`${i}<br>`);
  }
}
