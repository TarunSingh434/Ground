const express = require('express');
const cors = require('.');

const app = express();
app.use(cors());

const sites = [
  { name: 'MoviesMod', url: 'https://moviesmod.email' },
  { name: 'UHDMovies', url: 'https://uhdmovies.tips' },
  { name: 'OlaMovies', url: 'https://olamovies.help' },
  { name: 'HDHub4u', url: 'https://hdhub4u.football' },
  { name: 'mkvcinemas', url: 'https://mkvcinemas.onl' }
];

app.get('/api/sites', (req, res) => {
  res.json(sites);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
