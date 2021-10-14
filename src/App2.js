import { useState } from 'react'
import Navbar2 from './Components/AllComponent/Navbar2';
// import "./css/Navbar2.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Setting from "../src/page/Setting/Setup";
import Socialcard from "../src/page/Announcement/Mainpage";
import Announcep from './page/Announcement/Annoucep';
import "./Css/Everypage/Navbar2.css"
import Settingpage from './page/Setting/Settingpage';
import Detailpage from './page/Announcement/Detailpage';
import Detail from './Components/Anouncement/Detail';
import MoreDetail from './page/Announcement/Moredetails';
// import ExpenseHistory from './page/Expens/ExpenHistory';
import Exhistorypage from './page/ExpenseHistory/Exhistorypage';
import Expensepage from './page/Expens/Expensepage';
import Billpage from './page/Bill/Billpage';
import DetailBillpage from './page/Bill/DetailBillpage'
import Exdetailpage from './page/ExpenseHistory/Exdetailpage';
import { WorkOffRounded } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import Roompage from './page/RoomManagement/Roompage';
import Personalinfopage from './page/RoomManagement/Personalinfopage';
import Dashpage from './page/DashBoard/Dashpage';
import Petitionpage from './page/Petition/Petitionpage';
import STBuildingpage from './page/STBuilding/STBuildingpage';
import Createbuilding from './page/STBuilding/Createbuilding';
import CreateFeetype from './page/STFeetype/CreateFeetype';
import DisplayDialog from './page/STRoom/DisplayDialog';
import DialogDetail from './page/STRoom/DialogDetail';
import STRoompage from './page/STRoom/STRoompage';
import CreateFloor from './page/STFloor/CreateFloor';
import CreateRoom from './page/STFloor/CreateRoom';
import Initialize from './page/STFloor/Initialize';
import EditBuilding from './page/STBuilding/EditBuilding';
import Petitiondetails from './page/Petition/Petitiondetails';
import CreateFeeset from './page/STFeeset/CreateFeeset';
import Feeset from './page/STFeeset/Feeset';
import CreateRoomRe from './page/STFloor/CreateRoomRe';
import Verifypage from './page/Verify/Verifypage';


function App2() {

  // const [ word , setWord] = useState('Bob')
  const [word, setWord] = useState(false)
  const [announceId, setAnnounceId] = useState(0)

  const [arrayFloor, setArrayFloor] = useState()

  //Building Room all page

  const [youareinthisBuilding, iWillBeInthisBuilding] = useState()
  const [thisBuildingId, setThisBuildingID] = useState("")

  const [allData, setAllData] = useState("")

  const [buildingId, setBuildingId] = useState("")
  





  return (

    <>
      <Router>
        {/* <Button  style={{backgroundColor: 'blue'}} onClick={() => alert(word)}/> */}


        <header>
          <button onClick={()=> alert(buildingId)}>

          </button>
        </header>
        <Navbar2 isOpened={word => setWord(word)} buiId={buildingId}>

        </Navbar2>
        {/* <Bill/> */}

        <div className='main' style={{ backgroundColor: "#F3F7FC", position: 'relative' }}>
          <Route exact path="/bill/:id" exact={true} render={(props) => <Billpage isOpened={word} {...props} />} />
          <Route exact path="/announce/:id" exact={true} render={(props) => <Announcep isOpened={word} {...props} />} />

          {/* <Route exact path="/" exact={true} component={Socialcard}/> */}
          <Route exact path="/expense/:id" exact={true} render={(props) => <Expensepage isOpened={word} {...props} />} />
          {/* <Route path="/expensehistory" exact={true} render={(props) => <Exhistorypage isOpened = {word => setWord(word)} {...props} />} /> */}

          {/* <Route path="/expensehistory" exact={true} component={Exhistorypage} /> */}

          <Route path="/expensehistory/:id" exact={true} render={(props) => <Exhistorypage isOpened={word} {...props} />} />


          <Route path="/setting" exact={true} component={Setting} />


          <Route path="/setting2/:id" exact={true} render={(props) => <Settingpage getId={thisBuildingId => setThisBuildingID(thisBuildingId)} isOpened={word} {...props} />} />

          <Route path="/momo" exact={true} component={Settingpage} />
          {/* <Route path="/details" exact={true} component={Detailpage}/> */}
          <Route path="/details" exact={true} component={MoreDetail} />

          <Route path="/billdetails/:id" exact={true} render={(props) => <DetailBillpage isOpened={word} {...props} />} />
          
          <Route path="/rooms/:id" exact={true} render={(props) => <Roompage isOpened={word} {...props} />} />
          <Route path="/personinfo/:id" exact={true} render={(props) => <Personalinfopage isOpened={word} {...props} />} />
          <Route path="/dashpage/:id" exact={true} render={(props) => <Dashpage isOpened={word} {...props} />} />
          {/* <Route path="/petitionpage" exact={true}  render={(props) => <Petitionpage isOpened = {word} {...props} />} /> */}


          <Route path="/building_sp" exact={true} render={(props) => <STBuildingpage isOpened={word} save={buildingId => setBuildingId(buildingId)} {...props} />} />

          <Route path="/addbuilding" exact={true} render={(props) => <Createbuilding isOpened={word} {...props} />} />
          <Route path="/feetype_sp/:id" exact={true} render={(props) => <CreateFeetype getId={thisBuildingId => setThisBuildingID(thisBuildingId)} isOpened={word} {...props} />} />
          <Route path="/detailpage" exact={true} render={(props) => <Detailpage isOpened={word} {...props} />} />
          <Route path="/petitionpage:id" exact={true} render={(props) => <Petitionpage isOpened={word} {...props} />} />
          <Route path="/notedetails/:id" exact={true} render={(props) => <Petitiondetails isOpened={word} {...props} />} />

          <Route path="/stCreateFloor/:id" exact={true} render={(props) => <CreateFloor keptArray={arrayFloor => setArrayFloor(arrayFloor)} />} />
          {/* <Route path="/settingroom/:id" exact={true} render={(props) => <CreateRoom allFloor={arrayFloor} {...props} />} /> */}

          {/* <Route path="/testnewpage" exact={true}  render={(props) => <STRoompage isOpened = {word} {...props} />} /> */}
          {/* <Route path="/testnewpage" exact={true}  render={(props) => <Personalinfopage isOpened = {word} {...props} />} /> */}

          <Route path="/detailpage/:id" exact={true} render={(props) => <Detailpage isOpened={word} {...props} />} />
          <Route path="/roomtype_sp/:id" exact={true} render={(props) => <STRoompage getAllData={allData => setAllData(allData)}  isOpened={word} {...props} />} />
          <Route path="/st_initialize/:id" exact={true} render={(props) => <Initialize isOpened={word} {...props} />} />
          {/* <Route path="/testnewpage" exact={true} render={(props) => <Initialize isOpened={word} {...props} />} /> */}
          <Route path="/editbuilding_sp/:id" exact={true} render={(props) => <EditBuilding isOpened={word} {...props} />} />

          {/* <Route path="/testnewpage" exact={true} render={(props) => <Testjmae2 keptArray={arrayFloor => setArrayFloor(arrayFloor)} />} /> */}
          <Route path="/feesets_sp/:id" exact={true} render={(props) => <Feeset isOpened={word} {...props} />} />
          <Route path="/feesets/:id" exact={true} render={(props) => <CreateFeeset isOpened={word} {...props} />} />
          {/* <Route path="/testnewpage" exact={true} render={(props) => <Verifypage isOpened={word} {...props} />} /> */}
          <Route path="/settingroom/:id" exact={true} render={(props) => <CreateRoomRe allFloor={arrayFloor} isOpened={word} {...props} />} />
          {/* <Route path="/historydetails" exact={true} render={(props) => <Exdetailpage isOpened={word} {...props} />} /> */}
          {/* <Route path="/testnewpage" exact={true} render={(props) => <Exdetailpage isOpened={word} {...props} />} /> */}
          

          <Route path="/verify/:id" exact={true} render={(props) => <Verifypage isOpened={word} {...props} />} />





        </div>

      </Router>
    </>

  );
}

export default App2;

