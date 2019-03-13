// FLOW :
// [X] dans account mettre un tag active (bool) => default = false (service emailing ==> accounts)

// [X] quand le user signup, creer un account avec active = false (service accounts)

// [X] Au sign up envoyé une requete a emailing (email, username) (service accounts => emailing)

// créer un hash code (emailing)

// envoyé un email à l'adresse de l'account avec le code (service emailing)

// +++ voir si avec nodemailer, l'adresse email est valide (service emailing)
// i.e: code d'erreur <=

// quand l'user tape la route ~~~"""/activate"""~~ + code : (service accounts)
// comparer les deux codes passer le active à true et delete le code (service accounts)

// TODO
module.exports = {};
