const Posts = ({ posts }) => {
  return (
    <section>
      <h2>My Posts</h2>
      {
        posts.length ? (
          posts.map(post => {
            return (
              <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </article>
            )
          })
        ) : (
          <p>No posts yet. Why not create one now!</p>
        )
      }
    </section>
  );
};

export default Posts;