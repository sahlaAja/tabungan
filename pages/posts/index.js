// import layout
import Layout from "../../components/layout";

// import Link
import Link from 'next/link';

// import css
import styles from '../../styles/Home.module.css';

// import image
import Image from 'next/image';
import pic from '../../public/tab.png';
import Head from "next/head";

//font
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight : ['400'],
  variable: '--font-poppins',
});

import { Kanit } from '@next/font/google';

const kanit = Kanit({
  subsets: ['latin'],
  weight : ['400'],
  variable: '--font-kanit',
});

// data sementara
const mockPosts = [
   
];

//fungsi get server
export async function getServerSideProps() {
    return {
        props: {
            posts: mockPosts
        },
    }
}

function PostIndex(props) {
    const { posts } = props;

    return (
        <Layout>
        <div style={{marginTop : '30px'}}>
            <h1 style={{marginLeft : '18rem', marginTop:'220px'}} className={poppins.className}>Welcome to Tabunganku</h1>
            <h4 style={{marginLeft : '23rem'}} className={kanit.className}>Bersama meraih masa depan!</h4>
            <Image src={pic} width={500} height={550} style={{marginLeft : '45rem', marginTop:'-350px'}}/>
        </div>            
            
        </Layout>
    )
}

export default PostIndex;
