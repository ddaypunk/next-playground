import type { NextPage } from "next"
import styles from "../styles/Home.module.css";
import {Layout} from "../components/Layout";

const Inputs: NextPage = () => {
    return (
        <Layout>
            <h1 className={styles.title}>
                Check out these inputs!
            </h1>
        </Layout>
    )
}

export default Inputs