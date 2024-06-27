import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import {useState,useEffect} from 'react';
import {useRouter} from "next/router";

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();
    const isHome = router.pathname === '/posts/home';
    const isLogin = router.pathname === '/posts/login';
    const isDetail = router.pathname === '/posts/detail';
    const isSign = router.pathname === '/posts/signIn';
    const isCreate= router.pathname === '/posts/create';
    const isTransaksi = router.pathname === '/posts/transaksi';
  
    const handleLogin = () => {
      setIsAuthenticated(true);
      router.push('/posts/login'); // Alihkan ke halaman Home setelah login
    };
  
    const handleLogout = () => {
      setIsAuthenticated(false);
      const confirmLogout = window.confirm('Apakah Anda yakin ingin logout?');
      if (confirmLogout) {
        var axios = require('axios');
        const token = "Bearer " + localStorage.getItem('token');
var config = {
  method: 'get',
maxBodyLength: Infinity,
  url: `${process.env.NEXT_PUBLIC_API_BACKEND}/api/auth/logout`,
  headers: {  
    'Authorization': `${token}`
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  localStorage.clear();
  router.push('/posts'); 
})
.catch(function (error) {
  console.log(error);
});
      }
       
      
      // Alihkan ke halaman Home setelah logout
    };
  
    useEffect(() => {
      // Set the initial authentication state if needed
      // For example, checking local storage or a cookie
    }, []);

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top border-0 shadow-sm" style={{ background: 'white' }}>
                <div className="container">
                        <span className="navbar-toggler-icon"></span>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-0 mb-md-0">
                            <li className="nav-item">
                                <h3>Tabunganku</h3>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                            <li className="nav-item" style={{ marginLeft: '20px' }}>
                            
                            </li>
                            {!isHome && !isAuthenticated && !isDetail && !isLogin && !isSign && !isCreate && !isTransaksi && (
                                    <>
                                        <li>
                                        <button onClick={handleLogin} className={styles.button}><Link href="/posts/login" className={styles.link}>Login</Link></button>
                                        </li>
                                        <li>
                                        <button className={styles.button} style={{marginLeft : '20px'}}><Link href="/posts/signIn" className={styles.link}>Sign Up</Link></button>
                                        </li>
                                    </>
                                    )}
                                    {isHome && !isAuthenticated && (
                                    <li>
                                        <button onClick={handleLogout} className={styles.logout}>Logout</button>
                                    </li>
                                    )}
                                     {isDetail && !isAuthenticated && (
                                     <li>
                                     <button className={styles.button}><Link href="/posts/home" className={styles.link}>Home</Link></button>
                                     </li>
                                    )}
                                    {isCreate && !isAuthenticated && (
                                     <li>
                                     <button className={styles.button}><Link href="/posts/home" className={styles.link}>Home</Link></button>
                                     </li>
                                    )}
                                     {isLogin && !isAuthenticated && (
                                     <li>
                                     <button className={styles.button}><Link href="/posts" className={styles.link}>Dashboard</Link></button>
                                     </li>
                                    )}
                                     {isSign && !isAuthenticated && (
                                     <li>
                                     <button className={styles.button}><Link href="/posts" className={styles.link}>Dashboard</Link></button>
                                     </li>
                                    )}
                                    {isTransaksi && !isAuthenticated && (
                                        <li></li>
                                    )
                                    }
                                    

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
    }
export default Navbar;
