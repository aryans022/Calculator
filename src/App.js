import './App.css';
import { Button, Table, TableRow, TableCell} from '@material-ui/core';
import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.escFunction = this.escFunction.bind(this);
    this.state = {
      currentInput: ""
    };
  }
  escFunction(event){

    if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
      let e = event.keyCode
      let temp = this.state.currentInput + String.fromCharCode(e>=96?(e-48):e)
      this.setState({currentInput: temp})
    }

    if ((event.shiftKey && event.keyCode === 187) || event.keyCode === 107) {
      let temp = this.state.currentInput;
      if (temp.slice(-1) !== "+" && temp.slice(-1) !== "-" && temp.slice(-1) !== "*" && temp.slice(-1) !== "/") {
        temp += "+";
      }
      else {
        temp = temp.slice(0, -1) + "+";
      }
      this.setState({currentInput: temp})
    }

    if (event.keyCode === 189 || event.keyCode === 109) {
      let temp = this.state.currentInput;
      if (temp.slice(-1) !== "+" && temp.slice(-1) !== "-" && temp.slice(-1) !== "*" && temp.slice(-1) !== "/") {
        temp += "-";
      }
      else {
        temp = temp.slice(0, -1) + "-";
      }
      this.setState({currentInput: temp})
    }

    if ((event.shiftKey && event.keyCode === 56) || event.keyCode === 106) {
      let temp = this.state.currentInput;
      if (temp.slice(-1) !== "+" && temp.slice(-1) !== "-" && temp.slice(-1) !== "*" && temp.slice(-1) !== "/") {
        temp += "*";
      }
      else {
        temp = temp.slice(0, -1) + "*";
      }
      this.setState({currentInput: temp})
    }

    if (event.keyCode === 191 || event.keyCode === 111) {
      let temp = this.state.currentInput;
      if (temp.slice(-1) !== "+" && temp.slice(-1) !== "-" && temp.slice(-1) !== "*" && temp.slice(-1) !== "/") {
        temp += "/";
      }
      else {
        temp = temp.slice(0, -1) + "/";
      }
      this.setState({currentInput: temp})
    }

    if ((!event.shiftKey && event.keyCode === 187) || event.keyCode === 13) {
      let temp = this.state.currentInput;
      try {
        let str = eval(temp.replace(/[^-()\d/*+.]/g, '')) + "";
        if (str !== "undefined")
          this.setState({currentInput:str});
      }
      catch {
      }
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }

  render() {

    let temp = this.state.currentInput;
    if (temp.length>10) {
      alert("only 10 characters allowed");
      temp = temp.slice(0, 10);
      this.setState({currentInput:temp});
    }
    
    return (
      <div className="App" style={{ height: "70vh", padding:"15vh"}}>
      <center>
        <Table size="small" aria-label="a dense table" style={{ maxWidth: 300}}>

          <TableRow >
            <TableCell colSpan = {4} padding="none" align="right">
              
              <div style = {{backgroundColor:"#282c34", color:"white", fontSize:"40px", padding:"20px", paddingRight:"30px"}}>
                <p style={{ height: "50px", margin:"0px"}}>{this.state.currentInput}</p>
              </div>

            </TableCell>
          </TableRow>

          <TableRow>

            <TableCell padding="none" align="center">
              <Button style={{ "minHeight": "56px", width: "100%" }} 
                onClick={() => { 
                  let temp = "";
                  this.setState({currentInput:temp});
                }}>
                AC
              </Button>
            </TableCell>

            <TableCell padding="none" align="center">
              <Button style={{ "minHeight": "56px", width: "100%" }} 
                onClick={() => { 
                  let temp = this.state.currentInput;
                  if (temp.slice(0, 1) === "-") {
                    temp = temp.slice(1);
                  }
                  else {
                    temp = "-"+temp;
                  }
                  this.setState({currentInput:temp});
                }}>
                +/-</Button>
            </TableCell>

            <TableCell padding="none" align="center">
              <Button style={{ "minHeight": "56px", width: "100%" }}
                onClick={() => { 
                  let temp = this.state.currentInput;
                  if (temp.slice(-1) !== "+" && temp.slice(-1) !== "-" && temp.slice(-1) !== "*" && temp.slice(-1) !== "/") {
                    temp += "-";
                  }
                  else {
                    temp = temp.slice(0, -1) + "-";
                  }
                  this.setState({currentInput:temp});
                }}>
                %
                </Button>
            </TableCell>

            <TableCell padding="none" align="center">
              <Button style={{ "minHeight": "56px", width: "100%" }}
                onClick={() => { 
                  let temp = this.state.currentInput;
                  if (temp.slice(-1) !== "+" && temp.slice(-1) !== "-" && temp.slice(-1) !== "*" && temp.slice(-1) !== "/") {
                    temp += "/";
                  }
                  else {
                    temp = temp.slice(0, -1) + "/";
                  }
                  this.setState({currentInput:temp});
                }}>
                ÷
                </Button>
              </TableCell>
          </TableRow>

          <TableRow>
            
            <TableCell padding="none" align="center">
              <Button style={{ "minHeight": "56px", width: "100%" }}
                onClick={() => { 
                  let temp = this.state.currentInput+"1";
                  this.setState({currentInput:temp});
                }}>
                1
                </Button>
            </TableCell>

            <TableCell padding="none" align="center">
              <Button style={{ "minHeight": "56px", width: "100%" }}
                onClick={() => { 
                  let temp = this.state.currentInput+"2";
                  this.setState({currentInput:temp});
                }}>
                2
                </Button>
            </TableCell>

            <TableCell padding="none" align="center">
              <Button style={{ "minHeight": "56px", width: "100%" }}
                onClick={() => { 
                  let temp = this.state.currentInput+"3";
                  this.setState({currentInput:temp});
                }}>
                3
                </Button>
            </TableCell>

            <TableCell padding="none" align="center">
              <Button style={{ "minHeight": "56px", width: "100%" }}
                onClick={() => { 
                  let temp = this.state.currentInput;
                  if (temp.slice(-1) !== "+" && temp.slice(-1) !== "-" && temp.slice(-1) !== "*" && temp.slice(-1) !== "/") {
                    temp += "*";
                  }
                  else {
                    temp = temp.slice(0, -1) + "*";
                  }
                  this.setState({currentInput:temp});
                }}>
                X
                </Button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell padding="none" align="center">
              <Button style={{ "minHeight": "56px", width: "100%" }}
                onClick={() => { 
                  let temp = this.state.currentInput+"4";
                  this.setState({currentInput:temp});
                }}>
                4
                </Button>
            </TableCell>
            
            <TableCell padding="none" align="center">
              <Button style={{ "minHeight": "56px", width: "100%" }}
                onClick={() => { 
                  let temp = this.state.currentInput+"5";
                  this.setState({currentInput:temp});
                }}>
                5
                </Button>
            </TableCell>

            <TableCell padding="none" align="center">
              <Button style={{ "minHeight": "56px", width: "100%" }}
                onClick={() => { 
                  let temp = this.state.currentInput+"6";
                  this.setState({currentInput:temp});
                }}>
                6
                </Button>
            </TableCell>

            <TableCell padding="none" align="center">
              <Button style={{ "minHeight": "56px", width: "100%" }}
                onClick={() => { 
                  let temp = this.state.currentInput;
                  if (temp.slice(-1) !== "+" && temp.slice(-1) !== "-" && temp.slice(-1) !== "*" && temp.slice(-1) !== "/") {
                    temp += "-";
                  }
                  else {
                    temp = temp.slice(0, -1) + "-";
                  }
                  this.setState({currentInput:temp});
                }}>
                -
                </Button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell padding="none" align="center">
              <Button style={{ "minHeight": "56px", width: "100%" }}
                onClick={() => { 
                  let temp = this.state.currentInput+"7";
                  this.setState({currentInput:temp});
                }}>
                7
                </Button>
            </TableCell>

            <TableCell padding="none" align="center">
              <Button style={{ "minHeight": "56px", width: "100%" }}
                onClick={() => { 
                  let temp = this.state.currentInput+"8";
                  this.setState({currentInput:temp});
                }}>
                8
                </Button>
            </TableCell>

            <TableCell padding="none" align="center">
              <Button style={{ "minHeight": "56px", width: "100%" }}
                onClick={() => { 
                  let temp = this.state.currentInput+"9";
                  this.setState({currentInput:temp});
                }}>
                9
              </Button>
            </TableCell>

            <TableCell padding="none" align="center">
              <Button style={{ "minHeight": "56px", width: "100%" }}
                onClick={() => { 
                  let temp = this.state.currentInput;
                  if (temp.slice(-1) !== "+" && temp.slice(-1) !== "-" && temp.slice(-1) !== "*" && temp.slice(-1) !== "/") {
                    temp += "+";
                  }
                  else {
                    temp = temp.slice(0, -1) + "+";
                  }
                  this.setState({currentInput:temp});
                }}>
                +
                </Button>
              </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}  padding="none" align="center">
              <Button style={{ "minHeight": "56px", width: "100%" }}
                onClick={() => { 
                  let temp = this.state.currentInput+"0";
                  this.setState({currentInput:temp});
                }}>
                0
              </Button>
            </TableCell>

            <TableCell padding="none" align="center">
              <Button style={{ "minHeight": "56px", width: "100%" }}
                onClick={() => { 
                  let temp = this.state.currentInput;
                  if (temp.slice(-1) !== ".") {
                    temp += ".";
                  }
                  this.setState({currentInput:temp});
                }}>
                .
              </Button>
            </TableCell>

            <TableCell padding="none" align="center">
              <Button style={{ "minHeight": "56px", width: "100%" }}
                onClick={() => { 
                  let temp = this.state.currentInput;
                  try {
                    let str = eval(temp.replace(/[^-()\d/*+.]/g, '')) + "";
                    if (str !== "undefined")
                      this.setState({currentInput:str});
                  }
                  catch {
                    this.setState({currentInput:""});
                  }
                }}>
                =
              </Button>
            </TableCell>
          </TableRow>

          </Table>
          </center>
      </div>
    );
  }
}

export default App;