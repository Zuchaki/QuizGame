import axios from 'axios';

export const freeApi = async () => {
  const { data } = await axios.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      title: 'foo',
      body: 'bar',
      userId: 1,
    },
  );
  if (data) {
    return { message: 'Post created successfully' };
  }
  return { message: 'Failed to create post' };
};
