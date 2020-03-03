import Posts from '@/store/modules/posts';

describe('SET_POST', () => {
  it('adds a post to the state', () => {
    const post = { id: 1, title: 'Post' };
    const initialState = Posts.state;

    Posts.mutations.setPost(initialState, { post });

    expect(initialState).toEqual({
      postIds: [1],
      posts: { "1": post }
    })
  })
});
