import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ScrollView } from 'react-native';
import {storage } from './base'

const useStyles = makeStyles((theme) => ({
    fame: {
        width: "755px",
        height: "653px",
        backgroundColor: "#FFFFFF"
    },
    titleframe: {
        height: "85.7px",
        width: "100%",
        position: "relative"
    },
    mainframe: {
        height: "567.3px",
        width: "100%",
    },
    textbuilding: {
        fontSize: "22.6px",
        fontWeight: "bold",
        color: "#4A4A4A",
        paddingLeft: 40,
        paddingTop: 22
    },
    line: {
        height: "1px",
        width: "90%",
        backgroundColor: "#D8D8D8",
        top: 30,
        position: "relative",
        margin: "auto"
    },
    eachtitle: {
        fontSize: "18px",
        color: "#4A4A4A"
    },
    setrow: {
        height: "31.5px",
        width: "100%",
        fontSize: "18px",
        color: "#4A4A4A"
    },
    setrow2: {
        height: "31.5px",
        width: "100%",
        fontSize: "18px",
        color: "#4A4A4A"
    },
    setwidth: {
        width: "100%",

    },
    setwidth2: {
        width: "100%",
        height: "59.8px",
        position: "relative"
    },
    setrow3: {
        height: "31.5px",
        width: "200%",
        fontSize: "18px",
        color: "#4A4A4A"
    },
    setauto: {
        height: 266,
        width: 670,
        margin: "auto",
        paddingTop: 40,
        position: "relative"

    },
    buttonsubmit: {
        width: "407px",
        height: "42.8px",
        position: "absolute",
        top: 450,
        left: "20%"
    },
    scrollspace: {
        height: "730px",
        width: '1163px',
        margin: 'auto',
        paddingLeft: 110,
        transition: 'all 0.5s ease'
    },
    scrollspace36: {
        height: "730px",
        width: '1163px',
        margin: 'auto',
        paddingLeft: 36,
        transition: 'all 0.5s ease'
    },

    Choosefile: {
        width: '15%',
        margin: 'auto',
        paddingLeft: 36,
        transition: 'all 0.5s ease'
    },

}));



function Photo() {
    const classes = useStyles()
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
  
    const handleChange = e => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };
  
    const handleUpload = () => {
      const uploadTask = storage.ref(`/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref()
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              setUrl(url);
            });
        }
      );
    };
  
    console.log("image: ", image);
    return (
      <div className="container">
          <div className={classes.fame}>
            
          <ScrollView>
          <div style={{ width: '100%', height: '550px' }}>
                <progress value={progress} max="100" />
                <br />
                <br />
                <div className={classes.mainframe}>
                <div className={classes.setauto}>
                    <div >
                        <div  style={{ paddingBottom: 5 }}></div>
            <input clasName={classes.Choosefile}
                 //size="40"
                type="file" 
                onChange={handleChange} />
        
                <button 
                    onClick={handleUpload}>Upload
                 </button>
                <br/>
                {url}
                <br />

                {/*<img src={url || "http://via.placeholder.com/100"} alt="firebase-image" />*/}
            </div>
            </div>
        </div>
        </div>
    </ScrollView>
        </div>
    </div>     
    );
};
  

export default Photo;
