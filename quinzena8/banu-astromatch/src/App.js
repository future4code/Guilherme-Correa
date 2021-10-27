import React from "react";
import NewApp from './NOVO/App'

function App (props) {
  return (
      <div>
          <NewApp />
      </div>
  )
}
export default App;



// import './index.css';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import styled from 'styled-components';

// import {urlAstroMatch} from './constants/url'

// import Header from './components/Header';
// import Profiles from './components/Profiles';
// import Footer from './components/Footer';
// import Home from './components/Home'
// import IconClear from './img/icon_clear.svg'
// import Matches from './components/Matches';

// const ContainerApp = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 10px 30vw 5px 30vw;
//   padding: 10px;
//   background-color: #48cdee;
//   #ClearIcon {
//     width: 30px;
//     padding-left: 90%;
//     padding-right: 10px;
//   }
//   #ClearIcon:hover{
//     filter: invert(25%); 
//   }
//   #ClearIcon:active{
//     filter: invert(25%); 
//   }
// `
// const Main = styled.div`
//   display: flex;
//   width: 100%;
// `
// function App() {
//   const [profile, setProfile] = useState({})
//   const [page, setPage] = useState('home')

//   const getProfileToChoose = async () => {
//     try {
//       const newName = localStorage.getItem("usuario")
//       const response = await axios
//         .get(`${urlAstroMatch}/astroMatch/${newName}/person`)
//         if (response.data.profile != null) {
//         setProfile(response.data.profile)
//         } else {
//           alert ('acabou!')
//         }
//     }
//     catch(err) {
//     }
//   }
  
//   const clearChooses = async () => {
//     try {
//       const newName = localStorage.getItem("usuario")
//       const response = await axios
//         .put(`${urlAstroMatch}/astroMatch/${newName}/clear`)
//     }
//     catch(err) {
//     }
//     getProfileToChoose()
//   }

//   useEffect(
//     getProfileToChoose, []
//   )
//   const onChangePage = (page) => {
//     setPage(page)
//   }

// const renderPage = () => {
//     switch (page) {
//         case 'home':
//             return (
//             <Home
//               onChangePage={onChangePage}
//             />
//         )
//         case 'profile':
//             return (
//             <Profiles
//               profile={profile}
//               getProfileToChoose={getProfileToChoose}
//             />
//         )
//         case 'match':
//           console.log('pagina match')
//             return (
//             <Matches
              
//             />
//         )
//         default:
//             return (
//             <Home
//             onChangePage={onChangePage}
//             />
//         )
//     }
  
// }

//   return (
//     <ContainerApp>
//       <Header
//         page={page}
//         setPage={setPage}
//         renderPage={renderPage}
//         onChangePage={onChangePage}
//       />

//       <Main>
//         {renderPage()}
//       </Main>

//       <Matches />

//       <Footer 
//         profile={profile}
//         getProfileToChoose={getProfileToChoose}
//       />
//       <img src={IconClear} 
//         alt='Limpar Match' 
//         id='ClearIcon'
//         onClick={clearChooses}
//       />
//     </ContainerApp>
//   );
// }
// export default App;