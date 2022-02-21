import type { NextPage } from "next";
import Image from "next/image";
import styles from "./home.module.scss";
// import { useForm } from "react-hook-form";
import { InputAuth } from "../components/input";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.main}>
          <Image src="/logo.svg" alt="logo" width={100} height={30} />
          <div>
            <h1>Sign in</h1>
            <form>
              <div className={styles.form}>
                <InputAuth name="username" type="text" nameLabel="USERNAME" />
                <InputAuth name="password" type="text" nameLabel="PASSWORD" />
                <div className={styles.buttonContainer}>
                  <button>face</button>
                  <button>google</button>
                  <button>apple</button>
                </div>
              </div>
              <div className={styles.checkboxContainer}>
                <input type="checkbox" />
                <p>stay signed in</p>
              </div>

              <div>
                <button>entrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.contentImage} />
    </div>
  );
};

export default Home;
