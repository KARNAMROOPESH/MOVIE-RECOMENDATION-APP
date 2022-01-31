import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import axios from "axios";

export default class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            movieDetails: {},
        }
    }
    componentDidMount() {
        //this.getMovie();
    }
    /*timeconvert = (duration) =>{
        var hours = Math.floor(duration/60);
        var minutes = duration % 60;
        return `${hours} hours and ${minutes} minutes`;
    }
    getMovie = () => {
        const url = "http://127.0.0.1:5000/get-movie"
        axios.get(url)
            .then(respose => {
                let details = reponse.data.data;
                details["duration"] = this.timeconvert(details.duration);
                this.setState({ movieDetails: details })
                console.log(this.state.movieDetails)
            })
            .catch(error => {
                console.log(error)
            })
    }

    getliked = () => {
        const url = "http://127.0.0.1:5000/liked-movies"
        axios.get(url)
            .then(response => {
                this.getMovie()
            })
            .catch(
                error => {
                    console.log(error)

                }

            )

    }

    getunliked = () =>{
        const url = "http://127.0.0.1:5000/unliked-movies"
        axios.get(url).then(
            response=> {
                this.getMovie()
            }
        ).catch(error=>{
            console.log(error)
        })
    }
    */
    render() {
        return (
            <View>
                
                    <Text>Hello Users</Text>
                
            </View>

        )
    }
}