import React, {Component} from 'react'
import styled from 'styled-components'
import Facebook from '../../img/facebook.png'
import Instagram from '../../img/instagram.png'
import Twitter from '../../img/twiiter.png'

const PostRedes = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 5px;
    height: 25px;
`

const ImgRedes = styled.img`
    padding-left: 5px;
    padding-right: 5px;
`

class Share extends Component {
    state = {
        compartilharRedes: false
	}

	onClickComp = (nome) => {
        console.log(`Post compartilhado no ${nome}!`)
		this.setState({ 
        
        })
	}

	render() {
        const onClickFacebook = () => {this.onClickComp('Facebook')}

		return <PostRedes>
            <ImgRedes 
            alt={'Facebook'} 
            src={Facebook} 
            onClick={onClickFacebook}
            
            />

            <ImgRedes 
            alt={'Twitter'} 
            src={Twitter} 
            onClick={this.onClickComp}/>

            <ImgRedes 
            alt={'Instagram'} 
            src={Instagram} 
            onClick={this.onClickComp}/>

	</PostRedes>
	}
}
export default Share