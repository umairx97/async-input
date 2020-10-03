import React from "react";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
class AsyncInput extends React.Component {
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

  onChange = ({ target }) => {
    const search = target.value;
    this.inputRef.current.value = search;
    this.debounceSearch.next(search);
  };

  render() {
    const { nativeProps = {}, elementType = 'input' } = this.props
    if (elementType === 'input') return <input ref={this.inputRef} onChange={this.onChange} {...nativeProps} />;
    else if (elementType === 'textArea') return <textarea ref={this.inputRef} onChange={this.onChange} {...nativeProps} />;
  }
}

export default AsyncInput;
