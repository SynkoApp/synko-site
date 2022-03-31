import React from 'react';
import '../index.css';

export default class extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render (){
        console.log(this.props)
        return (
            <article className={'flex-col m-4 border rounded border-slate-500 py-4'}>
                <div className='flex justify-around'>
                    <p className={'font-semibold text-xl text-gray-200'}>Version: {this.props.version}</p>
                    <p className={'text-lg font-semibold text-gray-200'}>Release date: {this.props.release_date}</p>
                </div>
                <div className="flex justify-around mt-2">
                {this.props.bug_fixes.length > 0 ? 
                    <span>
                        <p className='text-gray-200 text-lg font-semibold'>Bug fixes: </p>
                        <ul className="text-gray-300 pl-6">
                            {this.props.bug_fixes.map(e => <li className='list-disc'>{e}</li>)}
                        </ul>
                    </span>
                : ""}
                {this.props.added_features.length > 0 ? 
                    <span>
                        <p className='text-gray-200 text-lg font-semibold'>Added features: </p>
                        <ul className="text-gray-300 pl-6">
                            {this.props.added_features.map(e => <li className='list-disc'>{e}</li>)}
                        </ul>
                    </span>
                : ""}
                </div>
            </article>
        )
    }
}