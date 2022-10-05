import { Request, Response } from 'express';
import i18next from 'i18next';
import {
  urls,
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

function getDoc(req: Request, res: Response): void {
  const { type, name } = req.params;
  const urlsObj = (urls as Record<string, string>);
  const url = `${urlsObj.docs}/${type}/${name}.html`;
  res.render('docs', { url });
}

function getChangeLang(req: Request, res: Response): void {
  const { lang } = req.params;
  i18next.changeLanguage(lang as string).then(() => res.redirect('/'));
}

export {
  getMain,
  getSubject,
  getDoc,
  getChangeLang,
};
