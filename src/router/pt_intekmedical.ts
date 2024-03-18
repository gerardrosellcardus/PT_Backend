import express from 'express';

import { showUsers } from '../controllers/pt_intekmedical';

/**
 * Router description for users management.
 */
export default (router: express.Router) => {
  router.get('/pt/showUsers', showUsers);
};