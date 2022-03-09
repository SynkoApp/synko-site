import React from 'react';
import '../index.css';
import { Redirect, Link } from 'react-router-dom'

export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    async componentDidMount(){
        let SynkoInterface = (await import(`../img/synko.webp`)).default
        let DevFriendly = (await import(`../img/devfriendly.webp`)).default
        this.setState({ SynkoInterface, DevFriendly })
    }

    render (){
        if(this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }
        return (
            <main className={'h-full pt-24 flex flex-col bg-gray-700 overflow-auto'}>
                <section className={"w-11/12 sm:w-4/5 2xl:w-2/3 mx-auto h-full"}>
                    <article className={'flex text-center xl:text-left items-center 2xl:items-start flex-col xl:flex-row mb-14 pb-14 border-b-2 border-gray-600'}>
                        <img className={'rounded-md mx-8 shadow-imgs xl:w-96 2xl:w-img-initial'} width='500px' src={this.state.SynkoInterface} alt="synko app"/>
                        <div className={'text-gray-200 text-lg mt-12 xl:mt-0'}>
                            <h2 className={'font-bold text-4xl text-white mb-4'}>A place to talk with your friends</h2>
                            <p>
                                Synko is a place where you can chat with your friends, make news, chill, have fun
                            </p>
                            <p>
                                You can do it really fast, just by downloading Synko, registering an account, and you'll be available to join groups 
                            </p>
                        </div>
                    </article>

                    <article className={'flex text-center xl:text-right items-center 2xl:items-start flex-col xl:flex-row-reverse mb-14 pb-14 border-b-2 border-gray-600'}>
                        <img className={'rounded-md mx-8 shadow-imgs xl:w-96 2xl:w-img-initial'} width='500px' src={this.state.DevFriendly} alt="developer icon"/>
                        <div className={'text-gray-200 mt-12 xl:mt-0 text-lg text-center xl:text-right'}>
                            <h2 className={'font-bold text-4xl text-white mb-4'}>Developers friendly</h2>
                            <p>If you are a developer, Synko is made for you :</p>
                            <p>- Advanced code sharing feature</p>
                            <p>- Special badge if you find a bug (bigger the bug is, better is your badge)</p>
                        </div>
                    </article>
                    <div className={'flex justify-center'}>
                        <Link to="/more" className={"bg-blue-500 w-3/5 sm:w-1/3 mb-10 px-6 py-2 text-center rounded-full font-semibold text-white hover:underline"}>Learn more</Link>
                    </div>
                </section>
            </main>
        )
    }
}