import { useReducer, useState } from 'react';
import { useRouter } from 'expo-router';
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image 
} from 'react-native';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const jobTypes = ["Full Time", "Part time", "Contractor"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time")

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Mimi</Text>
        <Text style={styles.welcomeMessage}>Find your perfect Job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList 
          data={jobTypes}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )
          }
        />
      </View>
    </View>
  )
}

export default Welcome