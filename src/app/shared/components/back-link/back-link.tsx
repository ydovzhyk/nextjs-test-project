"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import s from "./back-link.module.scss";

const BackLink = () => {
  const searchParams = useSearchParams();
  const backLinkHref = searchParams.get('from') || '/';

  return (
    <Link href={backLinkHref} passHref>
        <button type="button" className={s.btnContent}>
            Go back
        </button>
    </Link>
  );
};

export default BackLink;