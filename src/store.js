import { reactive } from "vue";

export const store = reactive({
    apiKey: '09aa4e5ff98f87f9bf29240db8b8fc87',
    queryResearch: '',
    apiResearchFilmUrl: 'https://api.themoviedb.org/3/search/movie?',
    filmTrovati: [],
    apiResearchTvUrl: 'https://api.themoviedb.org/3/search/tv?',
    tvTrovati: [],


});

// https://api.themoviedb.org/3/search/movie
// ?query=ritorno%20al%20futuro
// &include_adult=false
// &language=it-IT
// &page=1

// https://api.themoviedb.org/3/search/tv?
// ?query=ritorno%20al%20futuro
// &include_adult=false
// &language=it-IT
// &page=1