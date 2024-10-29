import { getAllArticles } from './(server)/api';
import { AppLink } from './shared/components/app-link/app-link';
import { ArticlePreview } from './shared/components/article-preview/ArticlePreview';

import s from './page.module.scss';
const ARTICLES_PER_PAGE = 10;

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
  }) {
  const page = Number.parseInt(searchParams['page'] ?? 1);
  const allArticles = await getAllArticles();

  const articles = allArticles.slice(
    (page - 1) * ARTICLES_PER_PAGE,
    page * ARTICLES_PER_PAGE
  );

  const nextPageUrl = {
    search: new URLSearchParams({
      page: (page + 1).toString(),
    }).toString(),
  };

  return (
    <div className={s.home}>
      <div className='container'>
        <div className={s.home__content}>
          <h1 className={s.home__title}>Drag13 blog, page {page}</h1>
          <ul className={s.home__listWrapper}>
            {articles.map((article) => (
              <li key={article.name} className={s.home__list}>
                <ArticlePreview name={article.name} text={article.header} />
              </li>
            ))}
        </ul>
        <AppLink href={nextPageUrl}>Next</AppLink>
        </div>
        </div>
    </div>
  );
}


