const bouton = document.getElementById('bouton'); // selection du bouton annee
const resultat = document.getElementById('resultat'); // zone pour afficher le resultat

function isAnneeBissextile(annee) { // fonction test bissextile
    return (annee % 400 === 0) || (annee % 4 === 0 && annee % 100 !== 0);
}

bouton.addEventListener('click', function() { // evenement au clic sur le bouton
    const valeur = prompt("Saisissez une année :"); // boite de saisie
    if (valeur === null) return; // arreter si annulation

    const annee = valeur.trim(); // supprimer espaces
    const marge = /^\d{1,4}$/; // 1 a 4 chiffres

    if (!marge.test(annee)) { // verification format
        alert("Erreur : la valeur doit contenir uniquement entre 1 à 4 chiffres).");
        return;
    }

    const num = Number(annee); // conversion nombre
    const message = isAnneeBissextile(num)
        ? `${num} est une année bissextile`
        : `${num} n’est pas une année bissextile`;

    resultat.textContent = message; // affichage du resultat
});

const formulaire = document.getElementById('formulaire'); // selection formulaire

formulaire.addEventListener('submit', function(event) { // evenement soumission formulaire
    event.preventDefault(); // empeche l'envoi classique

    const client = { // creation objet client
        civilite: document.getElementById('civilite').value,
        nom: document.getElementById('nom').value.trim(),
        prenom: document.getElementById('prenom').value.trim(),
        email: document.getElementById('email').value.trim(),
        telephone: document.getElementById('tel').value.trim(),
        presentation: function() { // methode pour afficher une presentation
            alert(`Bonjour, je suis ${this.civilite} ${this.prenom} ${this.nom}, vous pouvez me contacter sur ${this.email} ou au ${this.telephone}`);
        }
    };

    console.log(client); // affichage objet dans la console
    client.presentation(); // Execution de la methode presentation
});
