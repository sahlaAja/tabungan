// import layout
import Layout from "../../../components/layout";

// import Link
import Link from 'next/link';

// import css
import styles from '../../../styles/Home.module.css';
import React from 'react';
// import image
import Image from 'next/image';
import pic from '../../../public/tab3.jpg';
import Head from "next/head";
import axios from "axios";
import Router from 'next/router';
import { useState, useEffect } from 'react';

function PostTab() {
  var FormData = require('form-data');
  const [judul, setJudul] = useState("");
  const [image, setImage] = useState("");
  const [target, setTarget] = useState("");
  const [nominal, setNominal] = useState("");
  const [jadwal, setJadwal] = useState("");
    //state validation
    const [validation, setValidation] = useState({});

  //function "handleFileChange"
  const handleFileChange = (e) => {
    //define variable for get value image data
    const imageData = e.target.files[0]
    //check validation file
    if (!imageData.type.match('image.*')) {
        //set state "image" to null
        setImage('');
        return
    }
    //assign file to state "image"
    setImage(imageData);
}
//sambung ke token
// const fetchData = async () => {
//   const token = "Bearer " + localStorage.getItem('token');
//   console.log(token)

//   if (!token) {
//       Router.push('/posts/login'); // Redirect jika token tidak ada
//       return;
//   }

//   try {
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/auth/login`, {
//           headers: {
//             'Content-Type': 'application/json',
//               Authorization: `${token}`,
//               'Accept': 'application/json'
//           }
          
//       });
//       console.log(response.data);
//   } catch (error) {
//       console.error('Error fetching protected data:', error);
//       if (error.response.status === 401) {
//           Router.push('/posts/login'); // Redirect jika token tidak valid
//       }
//   }
// };

//useEffect(() => {
  //fetchData();
//}, []);

const storePost = async (e) => {
e.preventDefault();
const data = new FormData();
data.append('user_id','1');
data.append('judul',judul);
data.append('gambar',image);
data.append('target_uang',target);
data.append('jadwal_menabung',jadwal);

data.append('nominal_pengisian',nominal);
const token = "Bearer " + localStorage.getItem('token');
console.log(image)

var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: `${process.env.NEXT_PUBLIC_API_BACKEND}/api/tabungan`,
  headers: { 
    'Authorization': `${token}`, 
    'Accept': 'application/json', 
  },
  data : data
};



if (!token) {
    Router.push('/posts/login'); // Redirect jika token tidak ada
    return;
}

 await axios(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    Router.push('/posts/home')
  })
  .catch((error) => {
    console.log(JSON.stringify(error.response.data));
    setValidation(error.response.data);
    window.alert('File tidak boleh lebih dari 2 MB');
  })
}
//return data
return(
<Layout>
  <form onSubmit={ storePost }>
<div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
<div className="card card0 border-0">
  <div className="row d-flex">
    <div className="col-lg-6">
      <div className="card1 pb-5">
        <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
          <Image src={pic}/>
        </div>
      </div>
    </div>
    <div className="col-lg-6">
      <div className="card2 card border-0 px-4 py-5">
        <div className="row px-3">
          <label className="mb-1"><h6 className="mb-0 text-sm">Gambar</h6></label>
          <input type="file" name="image" onChange={handleFileChange}  max="5000"/>
        </div>
              {validation.image && (
                <div className="alert alert-danger">
                {validation.image}
                </div>
              )}
        <div className="row px-3">
          <label className="mb-1"><h6 className="mb-0 text-sm">Judul Tabungan</h6></label>
          <input type="text" name="judul" value={judul} onChange={(e) => setJudul(e.target.value)} className={styles.input1} required/>
        </div>
        {validation.judul && (
          <div className="alert alert-danger">
          {validation.judul}
          </div>
          )}
        <div className="row px-3">
          <label className="mb-1"><h6 className="mb-0 text-sm">Target Tabungan</h6></label>
          <input type="number" name="target" value={target} onChange={(e) => setTarget(e.target.value)} className={styles.input1} required/>
        </div>
        {validation.target && (
          <div className="alert alert-danger">
          {validation.target}
          </div>
        )}
        <div className="row px-3">
          <label className="mb-1"><h6 className="mb-0 text-sm">Jadwal Menabung</h6></label>
          <select name="jadwal" className={styles.input1} value={jadwal} onChange={(e) => setJadwal(e.target.value)} required>
            <option value="hari">Harian</option>
            <option value="minggu">Mingguan</option>
            <option value="bulan">Bulanan</option>
          </select>
        </div>
        {validation.jadwal && (
          <div className="alert alert-danger">
          {validation.jadwal}
          </div>
          )}
        <div className="row px-3">
          <label className="mb-1"><h6 className="mb-0 text-sm">Nominal Pengisian</h6></label>
          <input type="number" name="nominal" value={nominal} onChange={(e) => setNominal(e.target.value)} className={styles.input1} required/>
        </div>
        {validation.nominal && (
            <div className="alert alert-danger">
            {validation.nominal}
            </div>
                                    )}
        <div className="row mb-3 px-3">
          <button type="submit" className="btn btn-primary text-center">Submit</button>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-blue py-3">
    <div className="row px-2">
      <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
      <div className="social-contact ml-4 ml-sm-auto">
        <span className="fab fa-facebook mr-4 text-sm"></span>
        <span className="fab fa-google-plus mr-4 text-sm"></span>
        <span className="fab fa-linkedin mr-4 text-sm"></span>
        <span className="fab fa-twitter mr-4 mr-sm-5 text-sm"></span>
      </div>
    </div>
  </div>
</div>
</div>
</form>
</Layout>
)
}

export default PostTab;