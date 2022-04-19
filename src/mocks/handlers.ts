import { rest } from 'msw';
import { RANDOM_USERS } from './randomUsers';

export const handlers = [
  rest.get('https://randomuser.me/api', (req, res, ctx) => {
    return res(
      ctx.json({
        results: RANDOM_USERS,
        info: { page: 1 },
      })
    );
  }),
];
