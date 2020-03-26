import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import COLORS from '../../../reusables/Colors';

export default class PrivacyPolicy extends React.Component {
render() {
return(

<View>
        
    <ScrollView>
        
        <View>

            <Text style={styles.heading}>Privacy Policy</Text> 
        
        </View>
        
        
        <Text style={styles.privacyPolicy}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et dapibus ligula. Suspendisse pretium neque id sodales placerat. Phasellus interdum sem molestie ligula iaculis elementum non et ex. Suspendisse potenti. Aenean tempor tempus mauris quis laoreet. Sed sem nulla, posuere quis vulputate condimentum, mattis ac tortor. Proin dignissim, quam id consequat lacinia, ipsum diam euismod risus, quis cursus libero est non quam. Praesent at fermentum sapien. Curabitur feugiat ultrices ipsum, ac ullamcorper sapien porttitor et. Donec congue massa sed ex consequat, nec viverra nulla eleifend. Praesent consequat pharetra enim, a maximus neque mollis sit amet. Vestibulum sit amet tortor blandit, suscipit magna elementum, blandit enim. In commodo aliquet odio, sed porttitor sapien consequat eu. Vestibulum viverra tempus tristique. Aliquam sit amet arcu eget orci faucibus imperdiet et in eros.
        
        Nunc ultricies odio libero, auctor blandit massa pulvinar non. Etiam venenatis tempus felis, sed aliquet justo. Mauris auctor tellus sed euismod iaculis. Donec nec porttitor enim, in pulvinar augue. Nullam porttitor erat laoreet, consequat urna a, euismod magna. Ut faucibus elit sit amet mollis dapibus. Pellentesque molestie nisl a molestie tempus. Phasellus tristique a neque id lobortis. In luctus tortor sit amet eros porta, varius tempor tortor pellentesque. Mauris ut urna tristique, ultricies mauris sit amet, mattis velit. Maecenas placerat tincidunt magna, eu vulputate nisl consectetur sed. In sed diam ipsum.
        
        Donec massa nisl, tincidunt eget ipsum quis, fermentum molestie augue. Vestibulum magna erat, sodales in imperdiet et, placerat at eros. Suspendisse pretium risus sed magna aliquet eleifend. Praesent ac eleifend lacus. Donec justo erat, molestie non lectus vel, pulvinar maximus turpis. Suspendisse aliquam eros ut pharetra rutrum. Sed ut vulputate arcu. Vivamus malesuada magna nec ullamcorper iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nulla arcu, consectetur at molestie dignissim, fermentum non ex. Proin nunc enim, hendrerit a ultricies ac, rhoncus vel orci.
        
        Proin fermentum tristique lacus, nec fermentum magna aliquet a. Proin aliquam condimentum nunc eu pretium. Aenean augue nibh, gravida vel scelerisque in, ornare vitae lacus. Morbi vitae aliquet urna. Donec at purus sed eros convallis vehicula eget sed magna. Aliquam quis volutpat lectus. Maecenas ultricies interdum sagittis. Integer vitae hendrerit lectus. Vivamus sit amet lectus turpis. Vivamus sollicitudin a elit vitae venenatis. Vivamus massa sem, bibendum in lorem sed, ullamcorper hendrerit urna. Suspendisse ut lectus fermentum, bibendum ligula at, luctus tortor. Nullam pretium tellus diam, id consectetur erat egestas vitae.
        
        In consequat molestie ligula, id efficitur turpis varius eget. Nam vitae nunc sit amet dolor tristique pharetra vitae vitae dui. Sed risus erat, convallis non sollicitudin ut, placerat vitae turpis. Integer sollicitudin eget massa viverra porttitor. Phasellus velit dui, accumsan ut purus vitae, lobortis congue dolor. Ut sit amet mattis lectus, at imperdiet odio. Fusce lacinia ipsum quis rhoncus volutpat. Sed facilisis lacus arcu, vel accumsan massa finibus nec. Curabitur vestibulum, elit id ornare mollis, quam arcu ornare risus, id bibendum nunc ante id eros. Mauris varius metus ac tellus mollis, fermentum iaculis purus placerat. Aliquam mollis tincidunt consequat. Curabitur metus tortor, viverra eu tortor et, lacinia convallis enim.
        </Text>
        
    </ScrollView>
</View>
        
)}}
        

const styles = StyleSheet.create({
heading:{
    margin: 60,
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    color: COLORS.classicGreen
    },
            

  privacyPolicy:{
    fontSize: 14,
    margin: 25,
    marginTop: 1,
    color: 'grey',
    }



  
});