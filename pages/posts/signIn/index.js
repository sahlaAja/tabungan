import Layout from "../../../components/layout";
import Link from 'next/link';
import styles from '../../../styles/Home.module.css';
import Image from 'next/image';
import axios from "axios";
import Router from 'next/router';
import { useState } from 'react';

//create
function PostCreate() {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
      //state validation
      const [validation, setValidation] = useState({});

const storePost = async (e) => {
        e.preventDefault();
const formdata = new FormData();
formdata.append('username',username);
formdata.append('name',name);
formdata.append('password',password);
formdata.append('c_password',password);
console.log(username);

  //send data to server
  await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/auth/register`, formdata)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    Router.push('/posts')
      

  })
  .catch((error) => {

     //assign validation on state
     setValidation(error.response.data);
  })
};

    return (
        <Layout>
            <div className={styles.container2}>
                <div className={styles.screen} style={{height:'auto'}}>
                    <div className={styles.screen__content}>
                        <form className={styles.login} onSubmit={ storePost }>
                          <h1>Sign Up</h1>
                            <div className={styles.login__field}>
                                <input type="text"  className={styles.login__input} name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                            </div>
                            {
                                        validation.username &&
                                            <div className="alert alert-danger">
                                                {validation.username}
                                            </div>
                                    }
                            <div className={styles.login__field}>
                                <input type="text"  className={styles.login__input} name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                            </div>
                            {
                                        validation.name &&
                                            <div className="alert alert-danger">
                                                {validation.name}
                                            </div>
                                    }
                            <div className={styles.login__field}>
                                <input type="password" className={styles.login__input} name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
                            </div>
                            {
                                        validation.password &&
                                            <div className="alert alert-danger">
                                                {validation.password}
                                            </div>
                                    }
                            <button type="submit" className={styles.login__submit}>
                            Sign Up
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

export default PostCreate;