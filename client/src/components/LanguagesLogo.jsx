import React from 'react';
import '../index.css';

export default class LangLogo extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    async componentDidMount(){
        let { props } = this
        let Logo = (await import(`../img/${props.logo.toLowerCase()}.webp`)).default
        this.setState({ Logo })
    }

    render (){
        return (
            <span className={'flex-col mx-4'}>
                <img width="100px" alt={`${this.props.logo}-logo`} src={this.state.Logo}/>
                <a href={`https://${this.props.logo.toLowerCase()}.org/`} rel="noreferrer" target='_blank' className={"block text-center text-gray-200 text-lg font-semibold hover:underline"}>{this.props.logo}</a>
            </span>
        )
    }
}