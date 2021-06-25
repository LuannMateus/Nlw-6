import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUsersController } from './controllers/ListUsersController';
import { ListUserReceiverComplimentsController } from './controllers/ListUserReceiverComplimentsController';
import { ListUserSenderComplimentsController } from './controllers/ListUserSenderComplimentsController';

const router = Router();

import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const listUsersController = new ListUsersController();
const createUserController = new CreateUserController();

const listTagsController = new ListTagsController();
const createTagController = new CreateTagController();

const authenticateUserController = new AuthenticateUserController();

const createComplimentController = new CreateComplimentController();
const listUserReceiverComplimentsController =
  new ListUserReceiverComplimentsController();
const listUserSenderComplimentsController =
  new ListUserSenderComplimentsController();

router
  .get('/users', ensureAuthenticated, listUsersController.handle)
  .post('/users', createUserController.handle);

router
  .get('/tags', ensureAuthenticated, listTagsController.handle)
  .post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);

router.post('/login', authenticateUserController.handle);

router
  .get(
    '/users/compliments/send',
    ensureAuthenticated,
    listUserSenderComplimentsController.handle
  )
  .get(
    '/users/compliments/receive',
    ensureAuthenticated,
    listUserReceiverComplimentsController.handle
  )
  .post('/compliments', ensureAuthenticated, createComplimentController.handle);

export { router };
