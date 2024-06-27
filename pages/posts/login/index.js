import Layout from "../../../components/layout";
import Link from 'next/link';
import styles from '../../../styles/Home.module.css';
import Image from 'next/image';
import axios from "axios";
import Router from 'next/router';
import { useState } from 'react';

function PostLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
      //state validation
      const [validation, setValidation] = useState({});

const storePost = async (e) => {
        e.preventDefault();
const formdata = new FormData();
formdata.append('username',username);
formdata.append('password',password);

  //send data to server
  await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/auth/login`, formdata)
  .then((response) => {
    console.log(JSON.stringify(response.data));
      // Simpan token di Local Storage
      const token = response.data.data[0].token;
      localStorage.setItem('token', token);
      const id = response.data.data[1].id;
      localStorage.setItem('id', id);
      const username = response.data.data[1].username;
      localStorage.setItem('username', username);
      Router.push('/posts/home')
  })
  .catch((error) => {
    console.log(JSON.stringify(error.response.data));
    setValidation(error.response.data);
    window.alert('Username atau password yang anda masukan salah!');
  })
};

    
    return (
        <Layout>
            <div className={styles.container2}>
                <div className={styles.screen}>
                    <div className={styles.screen__content}>
                        <form className={styles.login} onSubmit={ storePost }>
                          <h1>LOGIN</h1>
                            <div className={styles.login__field}>
                                <input type="text"  className={styles.login__input} name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required/>
                            </div>
                            <div className={styles.login__field}>
                                <input type="password" className={styles.login__input} name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
                            </div>
                            {
                                        validation.data &&
                                            <div className="alert alert-danger">
                                                {validation.data}
                                            </div>
                                    }
                                <button type="submit" className={styles.login__submit}>
                            LOGIN NOW
                            </button>
                        </form>
                    </div>
                    <div className={styles.screen__background}>
                        <span className={`${styles.screen__background__shape} ${styles.screen__background__shape4}`}></span>
                        <span className={`${styles.screen__background__shape} ${styles.screen__background__shape3}`}></span>
                        <span className={`${styles.screen__background__shape} ${styles.screen__background__shape2}`}></span>
                        <span className={`${styles.screen__background__shape} ${styles.screen__background__shape1}`}></span>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PostLogin;
