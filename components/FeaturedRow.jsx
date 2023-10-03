import { View,Text } from "react-native"

const FeaturedRow = ({title,category,featuredCategory}) => {
  return (
    <View>
        <Text>{title}</Text>
        <Text>{category}</Text>
        <Text>{featuredCategory}</Text>
    </View>
  )
}

export default FeaturedRow