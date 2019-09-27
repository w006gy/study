import React from 'react';
import {Text,View,Button} from 'react-native'

class DetailButton extends React.Component {

    state = {
        showDetailButton:false,
        title:'flexDirection',
        //flexDirection:'row',
    }

    showDetailButton(isShow) {
        this.setState({
            showDetailButton:isShow,
        })
    }

    setFlexDirection(flex) {
        this.setState({
            title:flex,
        });
        // this.refs.layoutView.state.flexDirection=flex;
        window.layoutView.setState({
            flexDirection:flex,
        })
    }

    render(){
        if (!this.state.showDetailButton)
        return(
            <View style={{alignSelf:'flex-start',width:120}}>
                <Button onPress={()=>{
                        this.showDetailButton(true);
                    }} title={this.state.title} color='skyblue'/>
            </View>
        );
        else {
            return(
                <View style={{width:120}}>
                    <Button onPress={()=>{
                            this.showDetailButton(false);
                        }} title="flexDirection" color='skyblue'/>
                    <Button onPress={()=>{
                        this.setFlexDirection("row");
                        this.showDetailButton(false);
                    }} title="row" color='skyblue'/>
                    <Button onPress={()=>{
                        this.setFlexDirection("row-reverse");
                        this.showDetailButton(false);
                    }} title="row-reverse" color='skyblue'/>
                    <Button onPress={()=>{
                        this.setFlexDirection("column");
                        this.showDetailButton(false);
                    }} title="column" color='skyblue'/>
                    <Button onPress={()=>{
                        this.setFlexDirection("column-reverse");
                        this.showDetailButton(false);
                    }} title="column-reverse" color='skyblue'/>
                </View>
            );
        }
    }
}

class DetailButton2 extends React.Component {
    state = {
        showDetailButton:false,
        title:'justifyContent',
    }

    showDetailButton(isShow) {
        this.setState({
            showDetailButton:isShow,
        })
    }

    setJustifyContent(content) {
        this.setState({
            title:content,
        });
        window.layoutView.setState({
            justifyContent:content,
        })
    }

    render(){
        if (!this.state.showDetailButton)
        return(
            <View style={{width:120}}>
                <Button onPress={()=>{
                    this.showDetailButton(true);
                }} title={this.state.title} color='skyblue'/>
            </View>
        );
        else {
            return(
                <View style={{width:120}}>
                <Button onPress={()=>{
                    this.showDetailButton(false);
                }} title="justifyContent" color='skyblue'/>
                
                    <Button onPress={()=>{
                        this.setJustifyContent("flex-start");
                        this.showDetailButton(false);
                    }} title="flex-start" color='skyblue'/>
                    <Button onPress={()=>{
                        this.setJustifyContent("flex-end");
                        this.showDetailButton(false);
                    }} title="flex-end" color='skyblue'/>
                    <Button onPress={()=>{
                        this.setJustifyContent("center");
                        this.showDetailButton(false);
                    }} title="center" color='skyblue'/>
                    <Button onPress={()=>{
                        this.setJustifyContent("space-between");
                        this.showDetailButton(false);
                    }} title="space-between" color='skyblue'/>
                    <Button onPress={()=>{
                        this.setJustifyContent("space-around");
                        this.showDetailButton(false);
                    }} title="space-around" color='skyblue'/>
                </View>
            );
        }
    }
}

class DetailButton3 extends React.Component {
    state = {
        showDetailButton:false,
        title:'alignItems'
    }

    showDetailButton(isShow) {
        this.setState({
            showDetailButton:isShow,
        })
    }

    setAlignItems(align) {
        this.setState({
            title:align,
        })
        window.layoutView.setState({
            alignItems:align,
        })
    }

    render(){
        if (!this.state.showDetailButton)
        return(
            <View style={{width:120}}>
                <Button onPress={()=>{
                    this.showDetailButton(true);
                }} title={this.state.title} color='skyblue'/>
            </View>
        );
        else {
            return(
                <View style={{width:120}}>
                <Button onPress={()=>{
                    this.showDetailButton(false);
                }} title="alignItems" color='skyblue'/>
                
                    <Button onPress={()=>{
                        this.setAlignItems("flex-start");
                        this.showDetailButton(false);
                    }} title="flex-start" color='skyblue'/>
                    <Button onPress={()=>{
                        this.setAlignItems("flex-end");
                        this.showDetailButton(false);
                    }} title="flex-end" color='skyblue'/>
                    <Button onPress={()=>{
                        this.setAlignItems("center");
                        this.showDetailButton(false);
                    }} title="center" color='skyblue'/>
                    <Button onPress={()=>{
                        this.setAlignItems("stretch");
                        this.showDetailButton(false);
                    }} title="stretch" color='skyblue'/>
                </View>
            );
        }
    }
}

var layoutView;
export default class Layout extends React.Component{
    static navigationOptions = ({ navigation }) => {
        return {
          title : navigation.getParam('title','?'),
        }
      }

      componentDidMount(){
        window.layoutView = this;
      }

      state = {
          flexDirection:'row',
          wrap:'wrap',
          justifyContent:'flex-start',
          alignItems:'stretch',
      }
    render(){
        return(
            <View style={{top:20}}>
                <View style={{height:40}}>
                <Button onPress={()=>{
                    this.setState({
                        wrap:!this.state.wrap,
                    })
                }} title="change wrap"/>
                </View>
                <View ref="layoutView" style={{flexDirection:this.state.flexDirection,flexWrap:this.state.wrap,justifyContent:this.state.justifyContent,alignItems:this.state.alignItems,height:360}} >
                    <View style={{width:80,backgroundColor:'green',justifyContent:'center'}}>
                        <Text style={{alignSelf:'center',fontSize:24}}>1</Text>
                    </View>
                    <View style={{width:80,height:40,backgroundColor:'red',justifyContent:'center'}}>
                        <Text style={{alignSelf:'center',fontSize:24}}>2</Text>
                    </View>
                    <View style={{width:80,height:80,backgroundColor:'green',justifyContent:'center'}}>
                        <Text style={{alignSelf:'center',fontSize:24}}>3</Text>
                    </View>
                    <View style={{width:80,height:100,backgroundColor:'red',justifyContent:'center'}}>
                        <Text style={{alignSelf:'center',fontSize:24}}>4</Text>
                    </View>
                    <View style={{width:80,height:30,backgroundColor:'blue',justifyContent:'center'}}>
                        <Text style={{alignSelf:'center',fontSize:24}}>5</Text>
                    </View>
                    <View style={{width:80,height:40,backgroundColor:'blue',justifyContent:'center'}}>
                        <Text style={{alignSelf:'center',fontSize:24}}>6</Text>
                    </View>
                </View>
                <View style={{height:20}}/>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'flex-start'}}>
                    <DetailButton/>
                    <DetailButton2/>
                    <DetailButton3/>
                </View>
                
            </View>
        );
    }

}