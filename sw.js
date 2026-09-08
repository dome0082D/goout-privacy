//  L'addetto ai servizi del sito, ridotto all'osso.
//
//  Serve a una cosa sola: senza di lui il browser non propone di
//  installare GoOut. Non mette niente in cache di proposito -- un sito
//  che si mette in cache da solo, quando cambia, continua a mostrare la
//  versione di ieri a chi ce l'ha gia' aperto, e il modo di accorgersene
//  e' che qualcuno segnala una cosa che tu hai gia' corretto.
//
//  L'ascoltatore di 'fetch' e' vuoto apposta: non risponde, quindi ogni
//  richiesta va in rete come se lui non ci fosse.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
