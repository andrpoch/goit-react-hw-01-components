import React from "react";
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import getRandomHexColor from "./getRandomHexColor";

const Statistics = ({ title, stats }) => (
   <section className={styles.statistics}>
      {title.length > 0 && ( <h2 className={styles.title}>{title}</h2>)}
      <ul className={styles.stat_list}>
         {stats.map(stat => (<li className={styles.item} key={stat.id} style= {{backgroundColor:getRandomHexColor()}}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
         </li>
         ))}
      </ul>
   </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
 };

export default Statistics;