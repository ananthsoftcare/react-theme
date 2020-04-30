import React from 'react';
import logo from '../logo.svg';
import Theme1 from './theme1';
import Theme2 from './theme2';
import Theme3 from './theme3';
import Dropdown from './common/dropdown';
import api from '../api'

class Theme extends React.Component {
    constructor(props) {
        super(props);

        this.state = {            
            theme: '',
            users: [],
            currentUser: []
        };

        this.changeTheme  = this.changeTheme.bind(this);
    }

    componentDidMount = async () => {        
        await api.getUsers().then(users => {
            this.setState({
                users: users.data.data,
            })
        })
    }

    changeTheme(item) {
        let theme = item.target.value ? item.target.value : '';
        this.setState({
            currentUser: theme !== '' ? this.state.users.filter(user => user.id_user === Number(theme)) : [],
            theme: theme
        });
    }    

    render () {

        let arrayOfUsers = this.state.users;
        let options = arrayOfUsers.map((data, i) => {
            return {key : i, id : data.id_user, name : data.name};
        });
        return (
            <div className="App">
                { this.state.theme === '' && <div className="App-body-home">
                      
                        <div className="theme">
                            <p>Select User to change Theme</p>
                            <Dropdown 
                                className = 'btn btn-primary dropdown-toggle'
                                onChange = {this.changeTheme}
                                id = 'user_selection'
                                options = {options}
                                defaultOption = {true}
                            />
                        </div>
                    </div>
                }
                { this.state.theme === '1' && <Theme1 userinfo={this.state.currentUser[0]} changeTheme={this.changeTheme} /> }
                { this.state.theme === '2' && <Theme2 userinfo={this.state.currentUser[0]} changeTheme={this.changeTheme} /> }
                { this.state.theme === '3' && <Theme3 userinfo={this.state.currentUser[0]} changeTheme={this.changeTheme} /> }
            </div>
        );
    }
}

export default Theme;
