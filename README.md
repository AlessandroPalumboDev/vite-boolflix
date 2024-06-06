Vi lascio il link a questo documento con tutte le info, suddivise in milestone, su come procedere alla realizzazione, come visto a lezione;
https://docs.google.com/document/d/1JBwSbzVo88GBKKUwNTx6fQe7RetT_uw_PTxtGgoQPWI/edit?usp=sharing

  npm install
  npm run dev

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