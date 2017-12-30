import React, {Component} from 'react';

class AddNote extends Component {


  changeHandler (e) {
    let s = e.target.value;
    s = s.replace(/(^\s*)|(\s*$)/gi,"");
	  s = s.replace(/[ ]{2,}/gi," ");
	  s = s.replace(/\n /,"\n");
    this.props.addNote(e.target.value, e.target.value.length, s.split(' ').length);
  }

  render () {
    let date = new Date();
    let id = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    let todayNote = this.props.notes && this.props.notes[id] ? this.props.notes[id] : { note: '', symbols: 0, words: 0};

    console.log('this.props.notes', this.props.notes);

    return (
      <div>
        <textarea className="form-element" value={todayNote.note} onChange={this.changeHandler.bind(this)} />
        {/* <div>Letters count: {todayNote.symbols}</div> */}
        <div>{todayNote.words} of 500 words</div>
      </div>
    )
  }
}

export default AddNote;
