import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

const apiRouter = (): Router => {

  router.get('/test', async (req, res, next) => {
    try {
      return res.status(200).json({ message: 'ok' });
    } catch (err) {
      return next(err);
    }
  });

  return router;
};

export { apiRouter };