import React from 'react'
import Detail from '../../Components/Anouncement/Detail'
import Comment from '../../Components/Anouncement/Comment'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { ScrollView } from 'react-native';


const useStyles = makeStyles((theme) => ({
    scrollspace280: {
        height: "730px",
        width: '100%',
        margin: 'auto',
        paddingLeft: 245,
        transition: 'all 0.5s ease',

    },
    scrollspace202: {
        height: "730px",
        width: '100%',
        margin: 'auto',
        paddingLeft: 172,
        transition: 'all 0.5s ease',
    },
    texttile: {
        fontWeight: "bold",
        color:"#4A4A4A",
        fontSize: "19.4px"
    },
    frametop: {
        width: "100%",
        height: "106px"
    }

}));

export default function Detailpage({isOpened}) {

    const classes = useStyles()

    return (


        <ScrollView>
            <div>

            </div>
            <div className={isOpened ? classes.scrollspace202 : classes.scrollspace280}>
                <div style={{ width: "1169.8px", background: "red", position: "relative" }}>
                    <div style={{ position: "absolute", left: 0 }} >
                        <Detail />
                    </div>
                    <div style={{ position: "absolute", right: 0 }}>
                        <Comment/>
                    </div>
                </div>
            </div>
        </ScrollView>

    )
}
