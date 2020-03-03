const state = {
  postIds: [],
  posts: {}
};

const mutations = {
  setPost: (state, { post }) => {
    state.postIds.push(post.id);
    state.posts = {
      ...state.posts,
      [post.id]: post
    }
  }
};

const actions = {

};

const getters = {

};


export default {
  state,
  mutations,
  actions,
  getters
}
