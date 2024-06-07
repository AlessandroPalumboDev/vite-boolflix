# Esercizio Boolflix
Vi lascio il link a questo documento con tutte le info, suddivise in milestone, su come procedere alla realizzazione, come visto a lezione;
https://docs.google.com/document/d/1JBwSbzVo88GBKKUwNTx6fQe7RetT_uw_PTxtGgoQPWI/edit?usp=sharing

```bash
  npm install
  npm run dev
```

## Milestone 0: &check;
- Progettare la struttura del global state sulla linea degli esercizi svolti nei giorni precedenti.

## Milestone 1: &check;
- Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
1. Titolo
2. Titolo Originale
3. Lingua
4. Voto

    ### Svolgimento
    - Installo axios
    - Creo store.js per lo state menagement esportando la mia apiKey per l'autorizzazione, url di ricerca film, una queryResearch vuota e un array vuoto per i risultati della ricerca film
    - Creo un metodo da richiamare al click del bottone (e alla digitazione di invio su inmput) che con axios richiami l'url completo dell' api di richiesta e popoli l'array

## Milestone 2: &check;
- Trasformiamo la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).
- Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)
- Qui un esempio di chiamata per le serie tv:
https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs

    ### Svolgimento
    - Scarico e importo icone di due bandiere da usare (il nome di ogni bandiera è uguale alla stringa di una lingua)
    - Sostituisco lo span all'interno del li con un img (v-bind su src e alt in modo che se l'immagine non viene trovata si visualizza come alt la stringa originale)
    - Aggiungo allo store url di ricerca delle serie e array vuoto per le serie (come per i film)
    - Creo un metodo come per la ricerca dei film ma con dati diversi presi dall API di riferimento

## Milestone 3: &cross;
- In questa milestone come prima cosa aggiungiamo la copertina del film o della serie al nostro elenco. Ci viene passata dall’API solo la parte finale dell’URL, questo perché poi potremo generare da quella porzione di URL tante dimensioni diverse. Dovremo prendere quindi l’URL base delle immagini di TMDB: https://image.tmdb.org/t/p/ per poi aggiungere la dimensione che vogliamo generare (troviamo tutte le dimensioni possibili a questo link: https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400) per poi aggiungere la parte finale dell’URL passata dall’API.
Esempio di URL:
https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
- Trasformiamo poi il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote (troviamo le icone in FontAwesome).
Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezze piene (o mezze vuote :P)

    ### Svolgimento
    - Aggiungo allo store una chiave con url base di immagine e dimensione per la copertina
    - Aggiungo list item per l'immagine e compongo l' url che mi serve
    - Divido il numero per 2 e trasformo il decimale in intero per eccesso con Math.ceil
    - Installo e importo font awesome



