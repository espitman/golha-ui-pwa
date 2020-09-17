export const state = () => ({
  programs: [],
  currentTrack: {}
});

export const mutations = {
  setPrograms(state, programs) {
    state.programs = programs;
  },
  setCurrentTrack(state, track) {
    state.currentTrack = track;
  }
};
