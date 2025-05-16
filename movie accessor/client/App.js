useEffect(() => {
  fetch('http://localhost:5000/api/sites')
    .then(res => res.json())
    .then(data => setSites(data));
}, []);
