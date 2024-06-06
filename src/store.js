import { reactive } from "vue";

export const store = reactive({
    apiKey: "09aa4e5ff98f87f9bf29240db8b8fc87",
    apiResearchFilmUrl: "https://api.themoviedb.org/3/search/movie?",
    queryResearch: '',
    filmTrovati: [],

});

// https://api.themoviedb.org/3/search/movie
// ?query=ritorno%20al%20futuro
// &include_adult=false
// &language=it-IT
// &page=1