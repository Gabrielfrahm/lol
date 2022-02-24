import type { NextPage } from "next";
import Image from "next/image";
import styles from "./home.module.scss";
// import { useForm } from "react-hook-form";
import { InputAuth } from "../components/input";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { ButtonSocial } from "../components/buttonSocial";
import { AiOutlineArrowRight } from "react-icons/ai";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.main}>
          <Image src="/logo.svg" alt="logo" width={100} height={30} />
          <div>
            <h1>Sign in</h1>
            <form autoComplete="off">
              <div className={styles.form}>
                <InputAuth name="username" type="text" nameLabel="USERNAME" />
                <InputAuth
                  name="password"
                  type="password"
                  nameLabel="PASSWORD"
                />
                <div className={styles.buttonContainer}>
                  <ButtonSocial
                    icon={<BsFacebook color="#ffffff" />}
                    color="#1877F2"
                  />

                  <ButtonSocial icon={<FcGoogle />} color="#FFFFFF" />

                  <ButtonSocial
                    icon={<BsGithub color="#ffffff" />}
                    color="#000000"
                  />
                </div>
              </div>
              <div className={styles.checkboxContainer}>
                <input type="checkbox" style={{ cursor: "pointer" }} />
                <p>stay signed in</p>
              </div>

              <div className={styles.buttonConfirm}>
                <button className={styles.border}>
                  <AiOutlineArrowRight color="#E8E8E8" size={25} />
                </button>
              </div>
              <div className={styles.link}>
                <a href="">CAN`T SIGN IN ?</a>
                <a href="">CREATE ACCOUNT</a>
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
