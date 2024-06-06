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

## Milestone 2:
- Trasformiamo la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).
- Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)
- Qui un esempio di chiamata per le serie tv:
https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs

    ### Svolgimento
    - Scarico e importo icone di due bandiere da usare (il nome di ogni bandiera è uguale alla stringa di una lingua)
    - Sostituisco lo span all'interno del li con un img (v-bind su src e alt in modo che se l'immagine non viene trovata si visualizza come alt la stringa originale)