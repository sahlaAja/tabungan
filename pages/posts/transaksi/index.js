import Layout from '../../../components/layout';
import styles from '../../../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

const mockPosts =[

];
export async function getServerSideProps() {
  return {
    props: {
      posts: mockPosts,
    },
  };
}
function PostIndex({posts}) {
  return(
    <Layout>
      <form action="/">
      <div className={styles.div3}>
        <div className={styles.radiocontainer}>
        <label className={styles.radiolabel}><input type="radio" name="operasi" value="tambah" className={styles.customradio}/>Tambah</label>
        <label className={styles.radiolabel}><input type="radio" name="operasi" value="kurangi" className={styles.customradio}/>Kurangi</label>
        </div>
       <div className="row px-3">
          <label className="mb-1"><h6 className="mb-0 text-sm">Nominal</h6></label>
          <input type="number" name="nominal" className={styles.input1} style= {{width:'300px',height:'20px'}}required/>
        </div>
        <div className="row px-3">
          <label className="mb-1"><h6 className="mb-0 text-sm">Keterangan</h6></label>
          <input type="text" name="ket" className={styles.input1} style= {{width:'300px',height:'20px'}}/>
        </div>
        <div className="row mb-3 px-3">
          <button type="submit" className="btn btn-primary text-center" style={{width:'300px',height:'35px'}}>Simpan</button>
        </div>
      </div>
      </form>
    </Layout>
  )
}
export default PostIndex;