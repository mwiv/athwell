import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { List, Divider, Title } from "react-native-paper";

import FAIcon from 'react-native-vector-icons/FontAwesome'; // https://oblador.github.io/react-native-vector-icons/
import FA5Icon from 'react-native-vector-icons/FontAwesome5'; // https://oblador.github.io/react-native-vector-icons/

import ICIcon from 'react-native-vector-icons/Ionicons'
import OCIcons from 'react-native-vector-icons/Octicons'

import HorizontalFlatList from '../components/HorizontalFlatList';
import FlatListMenu from '../components/FlatListMenu';
import { StudentSurveyListItem } from '../components/SurveyListItem'

import LandingGreeting from '../components/LandingGreeting';

export default function StudentLandingScreen() {
	const themecolors = ["#9DBBD8"]
	const user = "user"
	const numberOfIncompleteSurveys = 0
	
	const menuData = [...Array(10).keys()].map((item) => {
		return {
			"id": item, 
			"title":  "Menu Item " + item, 
			"icon": <FAIcon name = "fonticons" size = {30}/>, 
			"description": "This describes this item...", 
			"onPress": () => { console.log("Menu Item " + item + " pressed!")}
		}
	})


	const md = [

		{
			"id": 0, 
			"title": "Teams", 
			"icon": <FAIcon name = "group" size = {30} color = "black" style = {{ height: 30, width:30, textAlign:'center', marginRight: "5px"}}/>, 
			"description": "",
			"onPress": () => { console.log("Menu Item pressed!")}
		}, 
		{
			"id": 1, 
			"title": "Account", 
			"icon": <FAIcon name = "user" size = {30} color = "black" style = {{height: 30, width:30, textAlign:'center', marginRight: "5px"}}/>, 
			"description": "",
			"onPress": () => { console.log("Menu Item pressed!")}
		}, 
		{
			"id": 2, 
			"title": "Settings", 
			"icon": <ICIcon name = "settings-sharp" size = {30} color = "black" style = {{ height: 30, width:30, textAlign:'center', marginRight: "5px"}}/>, 
			"description": "",
			"onPress": () => { console.log("Menu Item pressed!")}
		}
	]
	const menuRenderItem = ({ item }) => {
		return (
			<TouchableOpacity
			onPress = { item.onPress }>
				
				<List.Item
				title = { item.title }
				description =  { item.description }
				left = { () =>  item.icon }
				/>

			</TouchableOpacity>
		)
	}
	

	const horizontalFlatListData = [...Array(10).keys()].map((item) => {
		return {
			"id": item, 
			"title": "Survey " + item, 
			"creator": "Creator Name", 
			"date": "Date Assigned: " + "mm/dd/yyyy", 
			"color": themecolors[ item % themecolors.length ],
			"onPress": () => { console.log("Survey " + item + " pressed!")}
		}
	})

	const horizontalFlatListRenderItem = ({ item }) => {
		return (
			<StudentSurveyListItem item = { item } />
		)
	}

	return (
		<View style = {{backgroundColor: 'white'}}>
	
			<LandingGreeting user = { user } body = { "You have " + numberOfIncompleteSurveys  + " new surveys to complete!" }/>

			<Divider/>

			<View>
				<List.Item
					style = {{marginBottom: "-10px"}}
					titleStyle = {{fontWeight: "bold"}}
					title = { "Surveys" }
					description =  { "" }
					left = { () =>  <OCIcons name = "checklist" size = {30} style = {{height: 30, width: 30, textAlign: 'center', marginRight: "5px"}}/> }
				/>
				<HorizontalFlatList
				listTitle= ""
				data = { horizontalFlatListData }
				renderItem = { horizontalFlatListRenderItem }/>	
				<Divider/>
			</View>

			<View style = {{flex: 1}}>
				<FlatListMenu
				data = { md }
				renderItem = { menuRenderItem }/>	
      		</View>
	  </View>
	)
}