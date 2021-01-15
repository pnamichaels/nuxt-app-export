import VuexPersitence from 'vuex-persist'

export default ({
  store
}) => {
  window.onNuxtReady(() => {
    new VuexPersitence({
      storage: window.localStorage
    }).plugin(store);
  });
}