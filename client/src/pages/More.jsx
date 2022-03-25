import React from 'react';
import '../index.css';
import { Redirect } from 'react-router-dom'
import LangLogo from '../components/LanguagesLogo';

export default class extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render (){
        if(this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }
        return (
            <main className={'overflow-auto h-full flex flex-col bg-gray-700'}>
                <section className={"w-11/12 sm:w-4/5 2xl:w-2/3 mx-auto mt-20"}>
                    <h2 className={'text-4xl text-center mb-10 font-semibold text-white'}>Made with ❤ and</h2>
                    <div className={'flex w-full justify-center'}>
                        <LangLogo logo="ReactJS"/>
                        <LangLogo logo="ElectronJS"/>
                        <LangLogo logo="NodeJS"/>
                    </div>
                    <p className={'text-4xl text-center mt-10 font-semibold text-white'}>by <a href="https://kunah.fr" rel="noreferrer" target='_blank' className={"text-blue-500 hover:underline"}>Kunah</a> and <a href="https://genoweb.fr" rel="noreferrer" target='_blank' className={"text-blue-500 hover:underline"}>GenoWeb</a></p>
                    <article className={'flex flex-wrap mt-16 text-lg text-gray-200 py-16 px-8 border-t-2 border-b-2 border-gray-600'}>
                        <h2 className={'text-4xl mb-10 font-semibold text-white'}>Why ?</h2>
                        <div className={'ml-4 w-full'}>
                            <p>We've created Synko for multiple reasons :</p>
                            <ul className={'list-disc list-inside'}>
                                <li>Improve our knowledge</li>
                                <li>Chat and share code with our classmates</li>
                                <li>Have a good project to present at a future job interview</li>
                            </ul>
                            And to see if we would be able to create a good chat, that was really fun
                        </div>
                    </article>
                </section>
            </main>
        )
    }
}