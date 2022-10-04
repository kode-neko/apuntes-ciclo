import { Request, Response } from 'express';
import {
  docsAdmin, slidesAdmin, docsDev, slidesDev, INote,
} from '../config';

function getMain(req: Request, res: Response): void {
  res.render('main');
}

function getSubject(req: Request, res: Response): void {
  const { type } = req.params;
  let docs: INote[];
  let slides: INote[];
  if (type === 'dev') {
    docs = docsDev as INote[];
    slides = slidesDev as INote[];
  } else {
    docs = docsAdmin as INote[];
    slides = slidesAdmin as INote[];
  }
  res.render('subject', {
    subject: type, title: `title.${type}`, docs, slides,
  });
}

export {
  getMain,
  getSubject,
};
