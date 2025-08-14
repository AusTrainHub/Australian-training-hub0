@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

body {
  background: linear-gradient(-45deg, #004080, #0066cc, #00b3cc, #80e0ff);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  margin: 0;
}
