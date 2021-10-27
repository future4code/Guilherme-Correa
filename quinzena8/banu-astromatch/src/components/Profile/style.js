import styled from 'styled-components'

export const ContainerProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`
export const ContainerProfileCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    width: 95%;
    height: 100%;
`
export const CardProfile = styled.div`
    width: 100%;
    height: 370px;
    background-image: ${props => `url(${props.photoBack})`};
    background-position: center top;
    background-size: cover;
    background-repeat:   no-repeat;
    border-radius: 15px;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0 5px 7px 5px ;
    
    div {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        background-color: #fe1a89;
        padding: 3px;
        #name {
            font-size: 22px;
        }
        #age {
            font-size: 18px;
        }
    }
    #bio {
        background-color: #fe1a89;
        margin-top: 3px;
    }
`
export const ClearIcon = styled.div`
    padding-left: 85%;
    #ClearIcon {
        width: 40px;
    }
    #ClearIcon:hover{
        filter: invert(35%); 
    }
    #ClearIcon:active{
        filter: invert(35%); 
    }
`
