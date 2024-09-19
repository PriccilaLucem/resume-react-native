import { Text, View, StyleSheet, ScrollView } from "react-native";
import Star from "../components/star";


const Skills = () => {

    return (
        <ScrollView>
        <View style={styles.scrollView}>
                <View style={styles.container}>
                    <Text style={styles.text}>Java:</Text>
                <View style={styles.stars}>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star fillColor="#FFF"/>
                </View>
                </View>
            <View style={styles.container}>
                <Text style={styles.text}>Javascript:</Text>
                <View style={styles.stars}>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star fillColor="#FFF"/>
                </View>

            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Typescript:</Text>
                <View style={styles.stars}>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star fillColor="#FFF"/>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Python:</Text>
                <View style={styles.stars}>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star fillColor="#FFF"/>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>React:</Text>
                <View style={styles.stars}>
                    <Star/>
                    <Star/>
                    <Star fillColor="#FFF"/>
                    <Star fillColor="#FFF"/>
            </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>React Native:</Text>
                <View style={styles.stars}>
                    <Star/>
                    <Star/>
                    <Star fillColor="#FFF"/>
                    <Star fillColor="#FFF"/>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Django:</Text>
                <View style={styles.stars}>
                    <Star/>
                    <Star/>
                    <Star fillColor="#FFF"/>
                    <Star fillColor="#FFF"/>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Flask:</Text>
                <View style={styles.stars}>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star fillColor="#FFF"/>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Spring-Boot:</Text>
                <View style={styles.stars}>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Express:</Text>
                <View style={styles.stars}>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>MySQL:</Text>
                <View style={styles.stars}>
                    <Star/>
                    <Star/>
                    <Star fillColor="#FFF"/>
                    <Star fillColor="#FFF"/>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>MongoDB:</Text>
                <View style={styles.stars}>
                    <Star/>
                    <Star/>
                    <Star fillColor="#FFF"/>
                    <Star fillColor="#FFF"/>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>PSQL:</Text>
                <View style={styles.stars}>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star fillColor="#FFF"/>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    text:{
        fontSize:30,
        width: "auto",
        marginRight: 10
    },
    stars: {
        display: "flex",
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"center"
    },
    container:{
        display: "flex",
        flexDirection: "row",
        marginBottom:20
    }
})

export default Skills;
