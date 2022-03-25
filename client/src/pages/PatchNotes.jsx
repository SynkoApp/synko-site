import React from 'react';
import '../index.css';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import PatchNote from '../components/PatchNote';

export default class extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    async componentDidMount(){
        axios({
            method: "get",
            url: "http://localhost:5001/patch-notes"
        }).then(res => {
            this.setState({notes: res.data})
        })
    }

    render (){
        if(this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }
        if(!this.state.notes) return <></>
        return (
            <main className={'h-full pt-24 flex flex-col bg-gray-700 overflow-auto'}>
                <section className={"w-11/12 sm:w-4/5 2xl:w-2/3 mx-auto h-full"}>
                    {this.state.notes.map(e => <PatchNote {...e} />)}
                </section>
            </main>
        )
    }
}