import Link from "next/link";
import Layout from "../components/Layout";
import HomeLayout from "../components/Layout/HomeLayout";
import { ProductGeneral } from "../interfaces";

type Props = {
  productList: [ProductGeneral];
};

const IndexPage = ({ productList }: Props) => {
  return (
    <Layout title="heloo">
      <h1>Hello Next.js1 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <HomeLayout productList={productList} />
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://min-shop.herokuapp.com/rest/product");
  const data = await res.json();
  const productList = data.data;
  return {
    props: {
      productList,
    },
  };
}

export default IndexPage;
