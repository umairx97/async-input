import React from "react";
import { string, func, number, object } from 'prop-types'
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.debounceSearch = new Subject();
  }

  componentDidMount() {
    const { debounceTime: time, onChange } = this.props
    this.subscription = this.debounceSearch
      .pipe(debounceTime(time || 500))
      .subscribe(onChange);
  }

  componentWillUnmount() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  changeHandler = ({ target }) => {
    const search = target.value;
    this.inputRef.current.value = search;
    this.debounceSearch.next(search);
  };

  render() {
    const { nativeProps = {}, elementType = 'input', value} = this.props
    if (elementType === 'input') return <input ref={this.inputRef} onChange={this.changeHandler} value={value} {...nativeProps} />;
    else if (elementType === 'textArea') return <textarea ref={this.inputRef} onChange={this.changeHandler} value={value} {...nativeProps} />;
  }
}


Input.PropTypes = {
  elementType: string, 
  nativeProps: object, 
  value: string.isRequired, 
  debounceTime: number, 
  onChange: func.isRequired,
}

export default Input;
