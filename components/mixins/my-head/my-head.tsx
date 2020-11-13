import Head from "next/head";

interface IProps {
  title: string;
}

const MyHead = ({ title }: IProps) => (
  <Head>
    <title>{title} | jojiapp</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default MyHead;
