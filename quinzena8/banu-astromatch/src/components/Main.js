import React from "react"
import styled from "styled-components"

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
`
function Main () {
    const [page, setPage] = useState('home')

    const onChangePage = (ev) => {
        setPage(ev.target.value)
        renderPage()
    }
    const renderPage = () => {
        switch (page) {
            case 'home':
                return (
                <Home
                />
            )
            case 'profile':
                return (
                <Profiles
                />
            )
            case 'match':
                return (
                <Matches
                />
            )
            default:
                return (
                <Home
                />
            )
        }
      
    }

    return (
        <ContainerMain>

        </ContainerMain>
    )
}
export default Main;