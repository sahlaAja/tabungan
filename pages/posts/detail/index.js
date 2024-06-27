import Layout from '../../../components/layout';
import styles from '../../../styles/Home.module.css';
import Image from 'next/image';
import profilePic from '../../../public/image.jpg';
import Link from 'next/link';

//font
import { Kanit } from '@next/font/google';

const kanit = Kanit({
  subsets: ['latin'],
  weight : ['400'],
  variable: '--font-kanit',
});
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight : ['400'],
  variable: '--font-poppins',
});
// Mock data
const mockPosts = [];

export async function getServerSideProps() {
  return {
    props: {
      posts: mockPosts,
    },
  };
}

function PostIndex({ posts }) {
  return (
    <Layout>
      <div className="container py-4 my-4 mx-auto d-flex flex-column">
        <div className="header" style={{marginTop : '100px'}}>
          <div className="row r1">
            <div className="div2">
              <h1 className={poppins.className}>Tabungan Untuk Ke Bali</h1>
            </div>
            <div className="col-md-3 text-right pqr">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
        </div>
        <div className="container-body mt-4">
          <div className="row r3">
            <div className="col-md-5 p-0 klo">
              <ul>
                <li><h5 className={kanit.className}>Tanggal dibuat : 10 Mei 2024</h5></li>
                <li><h5 className={kanit.className}>Target : Rp 5.000.000,00</h5></li>
                <li><h5 className={kanit.className}>Jenis : Harian</h5></li>
                <li><h5 className={kanit.className}>Nominal : 10.000,00</h5></li>
                <li><h5 className={kanit.className}>Estimasi Terkumpul : 15 Mei 2025</h5></li>
                <li><h5 className={kanit.className}>Dana Terkumpul : Rp 120.000,00</h5></li>
                <li><h5 className={kanit.className}>Sisa : 4.880.000,00</h5></li>
                <li><Link href="/posts/transaksi"><button className={styles.button2}>Tambah Tabungan</button></Link></li>
              </ul>
            </div>
            <div className="col-md-7">
              <Image src={profilePic} width={500} height={400} alt="Profile" style={{marginLeft : '50px'}}/>
            </div>
          </div>
        </div>
        <div className="footer d-flex flex-column mt-5">
          <div className="row r4"></div>
        </div>
      </div>
      
      {/* Table */}
      <div className="container">
        <div className="row">
          <table className="table">
            <thead>
              <tr className="pricing-top-heading">
                <th className="free">Tanggal</th>
                <th className="basic">Nominal Tabungan</th>
              </tr>
            </thead>
            <tbody>
             
              <tr>
                <td className="no-padding" colSpan="3">
                  <div id="collapse_section_one" className="collapse show">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>13 Juni</td>
                          <td>Rp 40.000,00</td>
                        
                        </tr>
                        <tr>
                          <td>14 Juni</td>
                          <td>Rp 30.000,00</td>
                         
                        </tr>
                        <tr>
                          <td>15 Juni</td>
                          <td>Rp 50.000,00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
           </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default PostIndex;
