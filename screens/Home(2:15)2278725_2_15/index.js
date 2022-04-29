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
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee8f/744e/d0cf555144af115acda6963a7d7cacf1"
        }}
        style={styles.TouchableOpacity_2_23}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_32"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0343/1f0b/1ba441c7b927fde30b97300371f90b42"
        }}
        style={styles.TouchableOpacity_2_24}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_115"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97fc/df5a/0bb21fb471e48a841b851a592ee079c6"
        }}
        style={styles.TouchableOpacity_2_25}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_37"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2459/1ea6/b71714eea291a5d38805c0e3f0c385ac"
        }}
        style={styles.TouchableOpacity_2_26}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("22_144"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9db7/ca18/250c09ba6c2da522bf046028806e5af7"
        }}
        style={styles.TouchableOpacity_22_139}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_27"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_22_165}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("22_144"))
        }
      >
        <Text style={styles.Text_22_165}>Team_Name</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_22_166}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_115"))
        }
      >
        <Text style={styles.Text_22_166}>Ranking_Numb</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_22_167}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_27"))
        }
      >
        <Text style={styles.Text_22_167}>Quest_Compl.</Text>
      </TouchableOpacity>
      <View style={styles.View_22_168}>
        <Text style={styles.Text_22_168}>Time_Left</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("115%") },
  TouchableOpacity_2_23: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("103%"),
    resizeMode: "cover"
  },
  TouchableOpacity_2_24: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("103%"),
    resizeMode: "cover"
  },
  TouchableOpacity_2_25: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("103%"),
    resizeMode: "cover"
  },
  TouchableOpacity_2_26: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("103%"),
    resizeMode: "cover"
  },
  TouchableOpacity_22_139: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("103%"),
    resizeMode: "cover"
  },
  TouchableOpacity_22_165: {
    width: wp("100%"),
    minWidth: wp("100%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_22_165: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_22_166: {
    width: wp("100%"),
    minWidth: wp("100%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_22_166: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_22_167: {
    width: wp("100%"),
    minWidth: wp("100%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52%"),
    justifyContent: "center"
  },
  Text_22_167: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_168: {
    width: wp("100%"),
    minWidth: wp("100%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("77%"),
    justifyContent: "center"
  },
  Text_22_168: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
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
