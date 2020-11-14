import Head from "next/head";

interface IProps {
  seoTitle: string;
  title: string;
}

const MyHead = ({ seoTitle, title }: IProps) => (
  <>
    <Head>
      <title>{title} | jojiapp</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="title" content={seoTitle} />
    </Head>
    <h1
      style={{
        position: "absolute",
        top: "-99rem",
      }}
    >
      {seoTitle}
    </h1>
  </>
);

export default MyHead;
