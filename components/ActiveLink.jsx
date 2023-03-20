import Link from "next/link";
import { useRouter } from "next/router";

export const ActiveLink = ({ text, href }) => {

  const style = {
    color: 'blue',
    pointerEvents: 'none'
  }
  const router = useRouter();
  // const {asPath} = useRouter();


  return (
    <Link href={ href } 
      style={router.asPath === href ? style : null}>
      <span>{text}</span>
    </Link>
  );
};
