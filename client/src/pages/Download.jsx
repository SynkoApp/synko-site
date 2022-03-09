import React from 'react';
import '../index.css';
import platform from "platform"
import { Redirect } from 'react-router-dom'

export default class Download extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render (){
        if(this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }
        return (
            <main className={'h-full flex flex-col bg-gray-700'}>
                <section className={"overflow-auto w-11/12 sm:w-4/5 2xl:w-2/3 mx-auto mt-20"}>
                    <article className={'flex flex-wrap text-lg text-gray-200 px-8 mb-14 pb-14'}>
                        <h2 className={'font-bold text-4xl text-white mb-4'}>You join us ? Good decision !</h2>
                        <span className={'w-full ml-4'}>
                            <p>We are glad to know! Our little spy shibas told us you were using <span className={'font-semibold'}>{platform.os.toString()}</span></p>
                            <p>So you can download Synko for {platform.os.toString().split(' ')[0].toLowerCase()} here :</p>
                        </span>
                        <a className={'hover:underline bg-blue-500 rounded-full px-6 py-2 font-semibold mx-auto'} download="Synko.exe" href={'https://api.synko.kunah.fr/files/Synko%20Client.exe'}>Download</a>
                    </article>
                </section>
            </main>
        )
    }
}