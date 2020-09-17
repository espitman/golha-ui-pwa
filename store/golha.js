export const state = () => ({
  programs: [],
  currentTrack: {},
  isPlaying: false
});

export const mutations = {
  setPrograms(state, programs) {
    state.programs = programs;
  },
  setCurrentTrack(state, track) {
    state.currentTrack = track;
  },
  setIsPlaying(state, status) {
    state.isPlaying = status;
  }
};
