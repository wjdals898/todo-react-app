import { InputBase, ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: props.item, readOnly: true};
        this.delete = props.delete;
    }

    deleteEventHandler = () => {
        this.delete(this.state.item);
    }

    offReadOnlyMode = () => {
        this.setState({readOnly:false}, () => {
            console.log("ReadOnly? ", this.state.readOnly);
        });
    }

    editEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item:thisItem});
    }

    enterKeyEventHandler = (e) => {
        if (e.key === "Enter") {
            this.setState({readOnly:true}, () => {
                console.log("ReadOnly? ", this.state.readOnly);
            });
        }
    }

    checkboxEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.done = !thisItem.done;
        this.setState({item:thisItem});
    }
    
    render() {
        const item = this.state.item;
        return (
            <ListItem>
                <Checkbox 
                    checked={item.done}
                    onChange={this.checkboxEventHandler}/>
                <ListItemText>
                    <InputBase 
                        inputProps={{"aria-label":"naked", readOnly:this.state.readOnly}}
                        type="text"
                        id={item.id}
                        name={item.name}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                        onClick={this.offReadOnlyMode}
                        onChange={this.editEventHandler}
                        onKeyPress={this.enterKeyEventHandler}
                    />
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton 
                        aria-label="Delete Todo"
                        onClick={this.deleteEventHandler}>
                        <DeleteOutlined/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default Todo;