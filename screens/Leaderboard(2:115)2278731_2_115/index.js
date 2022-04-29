import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_2_117}>
        <Text style={styles.Text_2_117}>1st</Text>
      </View>
      <View style={styles.View_2_122}>
        <Text style={styles.Text_2_122}>2nd</Text>
      </View>
      <View style={styles.View_2_121}>
        <Text style={styles.Text_2_121}>3rd</Text>
      </View>
      <View style={styles.View_2_118}>
        <Text style={styles.Text_2_118}>4th</Text>
      </View>
      <View style={styles.View_2_135}>
        <Text style={styles.Text_2_135}>5th</Text>
      </View>
      <View style={styles.View_2_134}>
        <Text style={styles.Text_2_134}>6th</Text>
      </View>
      <View style={styles.View_2_133}>
        <Text style={styles.Text_2_133}>7th</Text>
      </View>
      <View style={styles.View_2_132}>
        <Text style={styles.Text_2_132}>8th</Text>
      </View>
      <View style={styles.View_2_124}>
        <Text style={styles.Text_2_124}>9th</Text>
      </View>
      <View style={styles.View_2_126}>
        <Text style={styles.Text_2_126}>10th</Text>
      </View>
      <View style={styles.View_22_178}>
        <Text style={styles.Text_22_178}>CURRENT RANKINGS</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("197%") },
  View_2_117: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    justifyContent: "center"
  },
  Text_2_117: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_122: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%"),
    justifyContent: "center"
  },
  Text_2_122: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_121: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49%"),
    justifyContent: "center"
  },
  Text_2_121: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_118: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("64%"),
    justifyContent: "center"
  },
  Text_2_118: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_135: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("79%"),
    justifyContent: "center"
  },
  Text_2_135: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_134: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("94%"),
    justifyContent: "center"
  },
  Text_2_134: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_133: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("108%"),
    justifyContent: "center"
  },
  Text_2_133: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_132: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("123%"),
    justifyContent: "center"
  },
  Text_2_132: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_124: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("138%"),
    justifyContent: "center"
  },
  Text_2_124: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_126: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("153%"),
    justifyContent: "center"
  },
  Text_2_126: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_178: {
    width: wp("100%"),
    minWidth: wp("100%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_22_178: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
