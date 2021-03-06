import Image from "next/image";
import styles from "../styles/components/country-item.module.scss";

interface PropsInterface {
  country: any;
};

const CountryItem: React.FC<PropsInterface> = ({ country }) => {
  return (
    <div className={styles.country_item}>
      <div className={styles.image}>
        <Image
          src={country.flags.png}
          alt={country.name.official}
          layout="fill"
        />
      </div>

      <div className={styles.informations}>
        <h2>{country.name.official}</h2>
        <h3>Population: <span>{country.population ? country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}</span></h3>
        <h3>Region: <span>{country.region ? country.region : "N/A"}</span></h3>
        <h3>Capital: <span>{country.capital && country.capital.length ? country.capital.map((capital: string) => capital).join(", ") : "N/A"}</span></h3>
      </div>
    </div>
  );
}

export default CountryItem;