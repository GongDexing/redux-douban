/*jshint esversion:6*/
import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/card';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import { red500 } from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import { CLICK_TAG, SELECT_TAG, UNSELECT_TAG} from '../constant/status';
import { addTag, deleteTag, toggleTag } from '../actions/tags';
import { TAG_SEARCH } from '../constant/status';
function handleRequestDelete() {
  alert('test');
}
const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};
export default class Tages extends Component{
  constructor(props){
    super(props);
    this.chips = this.chips.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
    this.toggleTag = this.toggleTag.bind(this);
    this.keyDown = this.keyDown.bind(this);
  }
  deleteTag(index){
    const { dispatch } = this.props;
    dispatch(deleteTag(index));
  }
  toggleTag(index){
    const { dispatch } = this.props;
    dispatch(toggleTag(index));
  }
  chips(){
    const { tags } = this.props;
    return tags.map( (tag, index) =>{
      if(tag.tag === TAG_SEARCH){
        return (
          <Chip key={index}
                backgroundColor={ tag.selected ? red500 : '' }
                style={styles.chip}
                onTouchTap={() => this.toggleTag(index)}>
            <Avatar color={red500} icon={<FontIcon className="material-icons">search</FontIcon>} />
            {tag.tag}
          </Chip>
        );
      }
      return (
        <Chip key={index}
              backgroundColor={ tag.selected ? red500 : '' }
              style={styles.chip}
              onRequestDelete={() => this.deleteTag(index)}
              onTouchTap={() => this.toggleTag(index)}>
          {tag.tag}
        </Chip>
      );
    }

    );
  }
  keyDown(event){
    if(event.keyCode === 13){
      const { dispatch } = this.props;
      const input = this.refs.newTag.input;
      dispatch(addTag(input.value));
      input.value = '';
      input.placeholder = '输入标签，按回车添加';
    }
  }
  render(){
    const { sticky } = this.props;
    return (
      <div className={(sticky ? 'sticky-tags' : '') +  ' col-md-3'}>
        <Card>
          <CardText>
            <TextField
              hintText='输入书签，按回车添加'
              fullWidth={true}
              onKeyDown={this.keyDown}
              ref='newTag'
            />
            <div style={styles.wrapper}>
              {this.chips()}
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
}
