import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Container, Row, Col} from 'reactstrap';
import Sidebar from './components/sidebar';
import MainContent from './components/main-content';
import polls from './Data/polls';
import shortid from 'shortid';

class App extends React.Component {
  state = {
      polls: [],
      selectedPoll: {},
      searchTerm: ''
  }

  componentDidMount(){
    this.setState({polls: polls})
  }

  addNewPoll = poll => {
      poll.id = shortid.generate();
      poll.created = new Date();
      poll.totalVote = 0;
      poll.opinions = []

      this.setState({
        polls: this.state.polls.concat(poll)
      })
  }

  updatePoll = updatedPoll => {
    const polls = [...this.state.polls];
    const poll = polls.find(p => p.id === updatedPoll.id) 

    poll.title = updatedPoll.title;
    poll.description = updatedPoll.description;
    poll.options = updatedPoll.opinions;

    this.setState({polls});
  }

  deletePoll = pollId => {
    const polls = this.state.polls.filter(p => p.id !== pollId);
    this.setState({polls, selectedPoll: {}});
  }

  selectPoll = pollId => {
    const poll = this.state.polls.find(p => p.id === pollId)
    this.setState({selectPoll: poll}) 
  }
  render() {
    return (
      <Container className='my-5'>
        <Row>
          <Col md={4}>
            <Sidebar/>
          </Col>
          <Col md={8}>
            <MainContent/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
