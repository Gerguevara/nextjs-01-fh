import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { ActiveLinkProps } from "../interfaces/props";
import styles from  './Navbar.module.css';


export const ActiveLink: FC<ActiveLinkProps> = ({ text, href }) => {

  const router = useRouter();

  return (
    <Link href={href} className={router.asPath === href ? styles.active : undefined}>
      <span>{text}</span>
    </Link>
  );
};

// export const ActiveLink: FC<ActiveLinkProps> = ({ text, href }) => {
//   const style: CSSProperties = {
//     color: "blue",
//     pointerEvents: "none",
//   };
//   const router = useRouter();

//   return (
//     <Link href={href}>
//       <a style={router.asPath === href ? style : undefined}>{text}</a>
//     </Link>
//   );
// };