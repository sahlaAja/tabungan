// import layout
import Layout from "../../../components/layout";

// import Link
import Link from 'next/link';

// import css
import styles from '../../../styles/Home.module.css';

// import image
import Image from 'next/image';
import axios from "axios";
import Router from 'next/router';
import { useState, useEffect } from 'react';


function PostIndex() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
    const fetchData = async () => {
        const token = "Bearer " + localStorage.getItem('token');
        const id = localStorage.getItem('id');
        
        var config = {
          method: 'get',
        maxBodyLength: Infinity,
          url: `${process.env.NEXT_PUBLIC_API_BACKEND}/api/tabungan/user/${id}?status=berlangsung`,
          headers: { 
            'Authorization': `${token}`, 
            'Accept': 'application/json', 
          },
        };
        if (!token) {
            Router.push('/posts/login'); // Redirect jika token tidak ada
            return;
        }
        
         await axios(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            setPosts(Array.isArray(response.data) ? response.data : [response.data]);
          })
          .catch((error) => {
            console.log(JSON.stringify(error.response));
            //setValidation(error.response.data);
          })
        }
    
        fetchData();
    }, []); 
        //return data
        console.log(posts)
    return (
        <Layout>
            <div className="container" style={{ marginTop: '80px' }}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card border-0 shadow-sm rounded-3">
                            <div className="card-body">
                                <Link href="/posts/create">
                                    <button className="btn btn-primary border-0 shadow-sm mb-3">TAMBAH</button>
                                </Link>
                                {Array.isArray(posts) && posts.map((post, index) => (
                                <div className={styles.card}>
                                    <Image
                                        src={``}
                                        width={200}
                                        height={200}
                                        alt="Contoh gambar"
                                    />
                                    <div className="container">
                                        <h4 style={{ fontFamily: 'Bahnscrift' }}><b><center><Link href="/posts/detail" className={styles.link2}>`${post.judul}`</Link></center></b></h4>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </Layout>
    )
}

export default PostIndex;
