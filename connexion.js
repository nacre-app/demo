// Page /connexion : efface le fragment (#e=…&t=…) de la barre d'adresse et de l'historique, sans le lire ailleurs.
// Aucune requête, aucune session : la connexion se fait dans l'application (docs/v2-comptes-et-synchro.md § 3.2).
if (window.location.hash) window.history.replaceState(null, "", window.location.pathname);
