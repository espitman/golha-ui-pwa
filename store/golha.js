export const state = () => ({
  programs: []
});

export const mutations = {
  setPrograms(state, programs) {
    state.programs = programs;
  }
};
