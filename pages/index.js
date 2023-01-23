import Layout from "../components/Layout";
import Head from "next/head";
import { BsGlobe2 } from "react-icons/bs";

import Inputpassword from "../components/Passwordinput";
import styles from "../styles/Login.module.css";

function Heading() {
  return (
    <div className={styles.heading}>
      <div className=" flex ">
        <BsGlobe2 className="my-2 mx-3" />
        <h1>Admin Login</h1>
      </div>
    </div>
  );
}

function InputFeild({
  type = "text",
  placeholder = "Enter Here",
  label = "",
  name = "",
}) {
  return (
    <div className="w-full grid">
      <label className={styles.label}>
        {label}
        <input
          className=" h-[3rem] rounded-md outline-none p-4 "
          type={type}
          placeholder={placeholder}
          name={name}
        />
      </label>
    </div>
  );
}

function Button() {
  return (
    <div className="h-full flex justify-center items-center  ">
      <button
        type="submit"
        className="py-3 px-8 rounded-md bg-blue-600 text-white "
      >
        Submit
      </button>
    </div>
  );
}

function onSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  let formData = new FormData(form);
  formData = Object.fromEntries([...formData.entries()]);

  console.log(formData);
}

export default function Login() {
  return (
    <>
      <Head>
        <title>Admin Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <div className={styles.mainLayout}>
          <div className={styles.formBox}>
            <Heading />
            <form onSubmit={onSubmit} className="w-full h-full">
              <div className="py-4 grid w-full h-full  ">
                <InputFeild
                  placeholder="Enter Email"
                  label="Email"
                  name="Email"
                />
                <Inputpassword
                  placeholder="Enter Password"
                  label="Password"
                  name="Password"
                />
                <Button />
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}
