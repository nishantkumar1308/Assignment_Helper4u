const express = require("express");
const router = express.Router();

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// router.get("/", (req, res, next) => {
//   res.json({
//     message: "Hello",
//   });
// });

router.get("/:n", (req, res) => {
  const n = parseInt(req.params.n);

  // Create a list of all the prime numbers up to n
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) primes.push(i);
  }

  res.send({ primes });
});

module.exports = router;
