import Link from 'next/link';
import { Fragment } from 'react';

function NewsPage() {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href='/news/greate-fw'>
            NextJS Is Great Framework
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;