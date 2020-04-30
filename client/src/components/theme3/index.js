import React from 'react';
import styled from 'styled-components';
import api from '../../api'

const Wrapper = styled.div`
min-height: 15em;
font-size: 1.5em;
display: ${props => props.display};
color: ${props => props.theme.text_color};
background-color: ${props => props.theme.background_color};
`;


class Theme3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display : 'none',
      themeInfo : {
        background_color : 'palevioletred',
        text_color : 'mediumseagreen'
      }
    };
  }

  componentDidMount = async () => {      
    await api.getThemeById(this.props.userinfo.id_theme).then(theme => {
        this.setState({
            themeInfo: theme.data.data,
            display: 'block'
        })
    })
  }

  render () {
    return (
      <Wrapper theme={this.state.themeInfo}>
        <div className="App-body">
          <p>{this.props.userinfo.content}</p>
          <button className = 'btn btn-primary' onClick={this.props.changeTheme}>Back to user Selection</button>
        </div>
      </Wrapper>
    );
  }
}

/*Theme1.defaultProps = {
  theme: {
    background_color: "palevioletred",
    color: "mediumseagreen"
  }
}*/

export default Theme3;
