import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import { notification } from 'antd';

const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onError: (err, variables, _context, mutation) => {
      notification.error({
        message: `Something went wrong`,
        description: 'Something in this request dont work correctly',
      });
      console.log('error', err, variables, _context, mutation);
    },
  }),
  queryCache: new QueryCache({
    onError: (err, query) => {
      notification.error({
        message: `Something went wrong`,
        description: 'Something in this request dont work correctly',
      });
      console.log('error', err, query);
    },
  }),
});

export default queryClient;
