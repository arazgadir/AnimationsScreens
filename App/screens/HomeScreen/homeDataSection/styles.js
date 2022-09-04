import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
container: {
    
    width: '100%',
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
},
titleView: {
    flexDirection: 'row',
},
title: {
    left : 15,
},
description: {
    marginTop: 15,
},

titleText:{
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: 'black'
},
timeText: {
    fontSize: 12,
    color: 'black',
    marginBottom: 10
},
draft: {
    backgroundColor: '#F6C3C3',
    borderRadius: 8,
    width: '30%',
    padding: 5,
    alignItems: 'center'

},
published: {
    width: '50%',
    padding: 5,
    backgroundColor: '#C3F5B9',
    borderRadius: 8
},
statusText: {
    fontSize: 14,
    fontWeight: 'bold'
},
clear:{  
    width: '20%',
    height: 30,
    backgroundColor:"#A49995",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 5,
    alignSelf: 'flex-end'
}
})