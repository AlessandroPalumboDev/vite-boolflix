import { reactive } from "vue";

export const store = reactive({
    apiKey: '09aa4e5ff98f87f9bf29240db8b8fc87',
    queryResearch: '',
    apiResearchFilmUrl: 'https://api.themoviedb.org/3/search/movie?',
    filmTrovati: [],
    apiResearchTvUrl: 'https://api.themoviedb.org/3/search/tv?',
    tvTrovati: [],
    apiCopertina: 'https://image.tmdb.org/t/p/w342/',
    apiLingua: 'it-IT'


});



