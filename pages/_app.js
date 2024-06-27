import 'bootstrap/dist/css/bootstrap.min.css'; // Impor CSS Bootstrap
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js"); // Impor JavaScript Bootstrap
    }, []);
    
    return <Component {...pageProps} />
}

export default MyApp;
