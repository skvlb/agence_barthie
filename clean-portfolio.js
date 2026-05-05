import fs from 'fs';
import path from 'path';

const portfolioFile = path.resolve('src/pages/portfolio/portfolio.js');

// 1. Lire le fichier portfolio.js
let content = fs.readFileSync(portfolioFile, 'utf8');

// 2. Extraire la liste des images qui existent vraiment dans le dossier public
const publicDir = path.resolve('public');

console.log("Vérification des images du portfolio...");

// Trouver toutes les lignes de portfolioItems
const lines = content.split('\n');
let newLines = [];
let deletedCount = 0;

for (let line of lines) {
  // Si la ligne correspond à un item du portfolio
  if (line.includes("image: '/assets/images/portfolio/")) {
    const match = line.match(/image:\s*'([^']+)'/);
    if (match && match[1]) {
      const imagePath = path.join(publicDir, match[1]);
      // Vérifier si le fichier image existe sur le disque
      if (!fs.existsSync(imagePath)) {
        console.log(`Image supprimée détectée et retirée du code : ${match[1]}`);
        deletedCount++;
        continue; // On ne garde pas cette ligne
      }
    }
  }
  newLines.push(line);
}

// 3. Sauvegarder le fichier mis à jour
fs.writeFileSync(portfolioFile, newLines.join('\n'));

console.log(`\nTerminé ! ${deletedCount} images manquantes ont été retirées du code du portfolio.`);
