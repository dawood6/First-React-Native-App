import React, { Component, Fragment } from 'react'
import Main from './Components/Main'
import Couresol from './Components/Couresol'
import CardSliderApp from './Components/CardSlider'
import { ScrollView } from 'react-native'
import ProuductSlider1 from './Components/ProuductsSlider1'

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <ScrollView>
              <Main />
              <Couresol />
              <CardSliderApp />
              <ProuductSlider1 />
              </ScrollView>
            </Fragment>
        )
    }
}
