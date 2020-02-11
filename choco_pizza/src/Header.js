import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
        <header>
            <div>
                <img src={this.props.logo} alt='fork and knife icon'/>
                <h3 id='delicious'>Delicious</h3>
                <p id='bestFood'>THE BEST FOOD BLOG ON THE WEB</p>
            </div>
            <aside>
                <img src={this.props.fbLogo} alt='Facebook icon'/>
                <img src={this.props.twitLogo} alt='Twitter icon'/>
                <img src={this.props.gLogo} alt='Google Plus icon'/>
                <img src={this.props.instaLogo} alt='Instagram icon'/>
                <img src={this.props.flicLogo} alt='Flicker icon'/>
                <img src={this.props.pintLogo} alt='Pintrist icon'/>
                <br></br>
                <img src={this.props.rssLogo} alt='RSS icon'/>
                <img src={this.props.mailLogo} alt='Mail icon'/>
            </aside>
        </header>
        )
    }
};
