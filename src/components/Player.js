
import React from 'react'
import { Form } from 'semantic-ui-react'
    	const options = [
    	  { key: 'm', text: 'Male', value: 'male' },
    	  { key: 'f', text: 'Female', value: 'female' },
    	]

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	name: '',
    	phone: '',
    	email: '',
    	sport: '',
    	gender: '',
    	ready: true,

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    
    event.preventDefault();
  }

  render() {
    const value = this.state.value  
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input label='First name' placeholder='First name' />
          <Form.Input label='Last name' placeholder='Last name' />
          <Form.Select label='Gender' options={options} placeholder='Gender' />
        </Form.Group>
        <Form.Group inline>
          <label>Size</label>
          <Form.Radio label='Small' value='sm' checked={value === 'sm'} onChange={this.handleChange} />
          <Form.Radio label='Medium' value='md' checked={value === 'md'} onChange={this.handleChange} />
          <Form.Radio label='Large' value='lg' checked={value === 'lg'} onChange={this.handleChange} />
        </Form.Group>
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}
