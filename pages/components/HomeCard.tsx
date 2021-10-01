import React, { FunctionComponent } from "react";
import styles from "../../styles/Home.module.css";

type Props = {
    heading: string
    description: string
    page: string
}

export const HomeCard = ({ page, heading, description }: Props) =>
        <a href={page} className={styles.card}>
            <h2>{heading} &rarr;</h2>
            <p>{description}</p>
        </a>

// const HomeCard: FunctionComponent<Props> = ({ heading, description, page}) => (
//     <a href={page} className={styles.card}>
//         <h2>{heading} &rarr;</h2>
//         <p>{description}</p>
//     </a>
// )