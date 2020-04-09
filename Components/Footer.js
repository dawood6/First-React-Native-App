import React, { Component, Fragment} from 'react'
import { View, Text, Image } from 'react-native'

const icons = [
    'https://img.icons8.com/cute-clipart/64/000000/instagram-new.png',
    'https://img.icons8.com/cute-clipart/64/000000/facebook-new.png',
    'https://img.icons8.com/cute-clipart/64/000000/twitter.png',
    'https://img.icons8.com/cute-clipart/64/000000/snapchat.png',
    'https://img.icons8.com/color/48/000000/whatsapp.png'
]

export default class Footer extends Component {
    
    render() {
        return (
            <Fragment>
            <View style={{backgroundColor: 'dodgerblue'}}>
                <Text style={{fontSize: 30, textAlign: 'center', color: 'lightcyan'}}>Follow  Us On</Text>
                   
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                
                {
                    icons.map((icon, index) =>
                    <Image
                    key={index}
                    source={{uri: icon}}
                    style={{width: 50, height: 50, margin: 10}}
                    />
                    )
                }
                </View>
            </View>
            </Fragment>
        )
    }
}
