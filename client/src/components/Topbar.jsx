import React from 'react';
import '../index.css';
import { Redirect, Link } from 'react-router-dom'
import Logo from '../img/logo.webp'

export default class Topbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render (){
        if(this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }
        return (
            <div className={'flex fixed w-full h-12 bg-blue-500 p-2 font-semibold items-center text-white text-lg px-4'}>
                <Link to="/" className={'flex ml-0 items-center mx-2 hover:underline'}><img alt="synko-logo" className={'mr-2'} width='35px' src={Logo}/> Synko</Link>
                <span className={'flex-grow'}></span>
                <Link className={'mx-2 hover:underline'} to="/download">Download</Link>
                <Link className={'mx-2 mr-0 hover:underline'} to="/patch-notes">Patch notes</Link>
                   
            </div>
        )
    }
}